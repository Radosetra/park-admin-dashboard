import ImageSlider from '../ImageSlider';
import ModalBase from './ModalBase';
import { LandscapeDto } from '../../_type/landscape.dto.ts';
import { ChangeEvent, useEffect, useState } from 'react';
import { useUploadPhotos } from '../../hooks/gallery.hooks.ts';
import { FaImage } from 'react-icons/fa';
import { FileInput } from '../input';
import { MessageAlertDialog } from '../Alert/MessageAlertDialog.tsx';

interface ModalLandscapeViewProps {
  item: LandscapeDto;
  setIsOpen: (value: boolean) => void;
}

export default function ModalLandscapeView({ item, setIsOpen }: ModalLandscapeViewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [files, setFiles ] = useState<File[]>([])
  const [openEditAlert, setOpenEditAlert] = useState<boolean>(false)
  const {mutate:uploadPhoto, isSuccess, isError} = useUploadPhotos("landscape", item.landscape_id!)

  const toggleEditAlert = ()=> setOpenEditAlert(openEditAlert=>!openEditAlert)
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setFiles([...files,...Array.from(e.target.files!)])
  }
  const removeFile = (index:number)=>{
    setFiles(files.filter((_,i)=> i !== index))
  }
  const handleSubmit = async ()=>{
    const pictures = new FormData()
    for (const file of files) {
      pictures.append("pictures", file)
    }
    uploadPhoto(pictures)
    setIsOpen(false)
  }
  useEffect(() => {
    if (isError) console.log("Error")
    if (isSuccess) console.log("Success")
  }, [isSuccess, isError])

  return (
    <ModalBase
      name={item.landscape_name}
      setIsOpen={setIsOpen}
      style='w-[40rem]'
    >
      <div className="flex flex-col gap-2.5">
        {item.pictures?.length !== 0 && (
          <div className="flex-auto">
            {isEditing ? (
              <FileInput
                handleFileChange={handleFileChange}
                files={files}
                removeFile={removeFile}
                previewed="after"
                label="Add pictures"
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
            <h2
              className="text-black text-lg font-medium py-2">{`[${item.landscape_locationX}, ${item.landscape_locationY}]`}</h2>
            <p className="">{item.landscape_type}</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-full">
            <h2 className="text-black text-lg font-medium py-2">Description</h2>
            <p className="">{item.landscape_description}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-5 py-3 ">
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={!isEditing ?
            () => {
              setIsEditing(true)
            } :
            ()=>toggleEditAlert()
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
        {
          openEditAlert &&
          <MessageAlertDialog handleSubmit={()=>handleSubmit()} toggleOpen={toggleEditAlert} description={"Are you sure you want to proceed the modification"} title={"Add pictures"}/>
        }
      </div>
    </ModalBase>
  );
}
