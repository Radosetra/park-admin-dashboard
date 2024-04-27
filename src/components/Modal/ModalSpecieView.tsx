import { ChangeEvent, useEffect, useState } from 'react';
import ImageSlider from '../ImageSlider';
import { FileInput } from '../input';
import { FaImage } from 'react-icons/fa';
import ModalBase from './ModalBase';
import { SpeciesDto } from '../../_type/species.dto.ts';
import { InputField } from '../input/components/input/input.tsx';
import { TextArea } from '../input/components/input/textarea.input.tsx';
import { useEditSpecie } from '../../hooks/species.hooks.ts';

interface ModalSpecieViewProps {
  item: SpeciesDto;
  setIsOpen: (value: boolean) => void;
}

export default function ModalSpecieView({ item, setIsOpen }: ModalSpecieViewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [files, setFiles ] = useState<File[]>([])
  const [type, setType] = useState<string>(item.specie_type)
  const [description, setDescription] = useState<string>(item.specie_description)
  const {mutate:editSpecie, isSuccess, isError} = useEditSpecie(item.specie_id!)
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setFiles([...files,...Array.from(e.target.files!)])
  }
  const removeFile = (index:number)=>{
    setFiles(files.filter((_,i)=> i !== index))
  }
  const handleTypeChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setType(e.target.value)
  }
  const handleDescriptionChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    setDescription(e.target.value)
  }
  const handleSubmit = ()=>{
    const editedSpecie = new FormData()
    editedSpecie.append("specie_type", type)
    editedSpecie.append("specie_description", description)
    for (const file of files){
      editedSpecie.append("pictures", file)
    }
    editSpecie(editedSpecie)
  }
  useEffect(() => {
    if (isSuccess) console.log("Success")
    if (isError) console.log("Error")
  }, [isSuccess, isError]);

  return (
    <ModalBase 
      name={item.specie_name}
      setIsOpen={setIsOpen}
      style='w-[40rem]'
    >
      <div className="flex flex-col gap-2.5">
        {/*body*/}

        {/* Image slider */}
        {item.pictures?.length !== 0 && (
          <div className="flex-auto">
            {isEditing ? (
              <FileInput
                handleFileChange={handleFileChange}
                files={files}
                removeFile={removeFile}
                previewed="after"
                label="Input file"
                icon={<FaImage />}
                style="border-dashed h-[4.5rem]"
              />
            ) : (
              <ImageSlider height="h-[17rem]" images={item.pictures!} />
            )}
          </div>
        )}
          <div className="flex">
          <div className="flex flex-col w-full">
            <h2 className="text-black text-lg font-medium py-2">Type</h2>
            {isEditing ? (
                <InputField
                label="Desciption"
                name={"description"}
                value={item.specie_type}
                onChanged={handleTypeChange}
                type={'text'}
                size="medium"
              />
            ) : (
              <p className="">{item.specie_type}</p>
            )}
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col w-full">
            <h2 className="text-black text-lg font-medium py-2">Description</h2>
            {isEditing ? (
                <TextArea
                label="Desciption"
                value={item.specie_description}
                onChanged={handleDescriptionChange}
                size="medium"
              />
            ) : (
              <p className="">{item.specie_description}</p>
            )}
          </div>
        </div>

        {/*footer*/}
        <div className="flex items-center justify-end gap-5 py-3 ">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={!isEditing?
              () => {
              setIsEditing(true)
              }:
              ()=>handleSubmit()
            }
          >
            {!isEditing ? 'Edit' : 'Save'}
          </button>

          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            {!isEditing ? 'Close' : 'Cancel'}
          </button>
        </div>
      </div>
    </ModalBase>
  );
}
