import { FaImage } from 'react-icons/fa';
import { FileInput } from '../input';
import { InputField } from '../input/components/input/input';
import ModalBase from './ModalBase';
import { useCreateActivity } from '../../hooks/activity.hooks.ts';
import { useCreateLandscape } from '../../hooks/landscape.hooks.ts';
import { ChangeEvent, useEffect, useState } from 'react';
import { useCreateSpecies } from '../../hooks/species.hooks.ts';
import { MessageAlertDialog } from '../Alert/MessageAlertDialog.tsx';
import { useToast } from '../../../@/components/ui/use-toast.ts';

type ModalCreateItemProps = {
  item: 'specie' | 'activity' | 'landscape'
  specie?: 'animal' | 'vegetal' | 'landscape'
  setIsOpen: (param: boolean) => void;
};

const ModalCreateItem = (props: ModalCreateItemProps) => {
  const { item, setIsOpen } = props;
  const {toast} = useToast()
  const {isSuccess:isSpecSuccess, isError:isSpecError, mutate:createSpecie} = useCreateSpecies();
  const {isSuccess:isLandSuccess, isError:isLandError, mutate:createLandscape} = useCreateLandscape()
  const {isSuccess:isActSuccess, isError:isActError, mutate:createActivity} = useCreateActivity()
  const [ name, setName ] = useState<string>("")
  const [ description, setDescription ] = useState<string>("")
  const [ type, setType ] = useState<string>("")
  const [files, setFiles ] = useState<File[]>([])
  const [openCreateAlert, setOpenCreateAlert] = useState<boolean>(false)

  const toggleCreateAlert = ()=>{
    setOpenCreateAlert(openCreateAlert=>!openCreateAlert)
  }
  const handleNameChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  const handleDescriptionChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setDescription(e.target.value)
  }
  const handleTypeChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setType(e.target.value)
  }
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setFiles([...files,...Array.from(e.target.files!)])
  }
  const removeFile = (index:number)=>{
    setFiles(files.filter((_,i)=> i !== index))
  }
  const handleSubmit = async () => {
      switch (item) {
        case 'activity':
          const activity = new FormData()
          activity.append("activity_name", name)
          activity.append("activity_description", description)
          for (let file of files){
            activity.append("pictures", file)
          }
          createActivity(activity)
          if (isActSuccess){
             toast(
      {
                  description:`${item} added successfully`
                }
              )
          }
          if (isActError){
              toast({
                description:`Failed to add new ${item}`,
                variant: "destructive"
              })
          }
          break
        case 'landscape':
          const landscape = new FormData()
          landscape.append("landscape_name", name)
          landscape.append("landscape_description", description)
          landscape.append("landscape_type", type)
          for (let file of files){
            landscape.append("pictures", file)
          }
          createLandscape(landscape)
          if (isLandSuccess){
            toast(
      {
                  description:`${item} added successfully`
                }
              )
          }
          if (isLandError){
              toast({
                description:`Failed to add new ${item}`,
                variant: "destructive"
              })
          }
          break
        case 'specie':
          const specie = new FormData()
          specie.append("specie_name", name)
          specie.append("specie_description", description)
          specie.append("specie_type", type)
          for (let file of files){
            specie.append("pictures", file)
          }
          createSpecie(specie)
          if (isSpecSuccess){
            toast(
              {
                description:`${item} added successfully`
              }
            )
          }
          if (isSpecError){
              toast({
                description:`Failed to add new ${item}`,
                variant: "destructive"
              })
          }
          break;
        default:
          break;
    }
    setIsOpen(false)
  }
  useEffect(() => {
    if (isActSuccess){
      toast(
        {
          description:`${item} added successfully`
        }
      )
    }
    if(isActError){
      toast({
        description:`Failed to add new ${item}`,
        variant: "destructive"
      })
    }
  }, [isActError, isActSuccess]);
  useEffect(() => {
    if (isLandSuccess){
      toast(
        {
          description:`${item} added successfully`
        }
      )
    }
    if(isLandError){
      toast({
        description:`Failed to add new ${item}`,
        variant: "destructive"
      })
    }
  }, [isLandError, isLandSuccess]);
  useEffect(() => {
    if (isSpecSuccess){
      toast(
        {
          description:`${item} added successfully`
        }
      )
    }
    if(isSpecError){
      toast({
        description:`Failed to add new ${item}`,
        variant: "destructive"
      })
    }
  }, [isSpecError, isSpecSuccess]);

  return (
    <ModalBase
      name={`${item[0].toUpperCase() + item.slice(1)} Form`}
      setIsOpen={setIsOpen}
      style="p-4"
    >
      <div className="flex flex-col gap-2.5">
        <InputField
          name="name"
          onChanged={handleNameChange}
          placeholder=""
          value={name}
          type="text"
          label="Name"
          size="large"
        />

        <InputField
          name="descri"
          value={description}
          onChanged={handleDescriptionChange}
          placeholder=""
          type="text"
          label="Description"
          size="large"
        />

        {
          (item != 'activity') &&
            <InputField
            name="type"
            value={type}
            onChanged={handleTypeChange}
            placeholder=""
            type="text"
            label="Type"
            size="large"
          />
        }

        

        <FileInput
          files={files}
          removeFile={removeFile}
          handleFileChange={handleFileChange}
          previewed="after"
          label="Input file"
          icon={<FaImage />}
          style="border-dashed h-[4.5rem]"
        />

        <div className="flex items-center justify-end gap-5">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => toggleCreateAlert()}
          >
            {/* {!isEditing ? 'Edit' : 'Save'} */}
            Save
          </button>

          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          {
            openCreateAlert &&
            <MessageAlertDialog handleSubmit={()=>handleSubmit()} toggleOpen={toggleCreateAlert} description={"Are you sure you want to add this "+item} title={"Adding a new "+item}/>
          }
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalCreateItem;
