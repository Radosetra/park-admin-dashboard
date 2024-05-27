import { ChangeEvent, useEffect, useState } from 'react';
import ImageSlider from '../ImageSlider';
import { FileInput } from '../input';
import { FaImage } from 'react-icons/fa';
import ModalBase from './ModalBase';
import { ActivityDto } from '../../_type/activity.dto.ts';
import { useDeleteActivity, useEditActivity } from '../../hooks/activity.hooks.ts';
import { TextArea } from '../input/components/input/textarea.input.tsx';
import { MessageAlertDialog } from '../Alert/MessageAlertDialog.tsx';

interface ModelActivityViewProps {
  item: ActivityDto;
  setIsOpen: (value: boolean) => void;
}

export default function ModalActivityView({ item, setIsOpen }: ModelActivityViewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [files, setFiles ] = useState<File[]>([])
  const [description, setDescription] = useState<string>(item.activity_description)
  const {mutate:editActivity, isSuccess, isError} = useEditActivity(item.activity_id!)
  const {mutate, isSuccess:isDelSuccess, isError:isDelError} = useDeleteActivity(item.activity_id!)
  const [openEditAlert, setOpenEditAlert] = useState<boolean>(false)
  const [openDeleteAlert, setOpenDeleteAlert] = useState<boolean>(false)

  const toggleOpenEditAlert = ()=>{
    setOpenEditAlert(openEditAlert=>!openEditAlert)
  }
  const toggleOpenDeleteAlert = ()=>{
    setOpenDeleteAlert(openDeleteAlert=>!openDeleteAlert)
  }
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setFiles([...files,...Array.from(e.target.files!)])
  }
  const handleDescriptionChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    setDescription(e.target.value)
  }
  const removeFile = (index:number)=>{
    setFiles(files.filter((_,i)=> i !== index))
  }
  const handleDelete = async ()=>{
    mutate()
    setIsOpen(false)
  }
  const handleSubmit = async ()=>{
    if (description !== ""){
      const editedActivity = new FormData()
      editedActivity.append("activity_description", description)
      for (const pic of files){
        editedActivity.append("pictures", pic)
      }
      console.log(editedActivity)
      editActivity(editedActivity)
    }
    setIsOpen(false)
  }
  useEffect(() => {
    if (isSuccess){
      console.log("success")
    }
    if (isError){
      console.log("error")
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    if (isDelSuccess){
      console.log("success")
    }
    if (isDelError){
      console.log("error")
    }
  }, [isDelSuccess, isDelError]);

  return (
    <ModalBase 
      name={item.activity_name}
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
            <h2 className="text-black text-lg font-medium py-2">Description</h2>
            {isEditing ? (
                <TextArea value={item.activity_description} onChanged={handleDescriptionChange}/>
            ) : (
              <p className="">{item.activity_description}</p>
            )}
          </div>
        </div>

        {/*footer*/}
        <div className="flex items-center justify-end gap-5 py-3 ">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {!isEditing?
              setIsEditing(true):
              toggleOpenEditAlert()
            }}
          >
            {!isEditing ? 'Edit' : 'Save'}
          </button>

          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={!isEditing?()=>toggleOpenDeleteAlert():()=>setIsOpen(false)}
          >
            {!isEditing ? 'Remove' : 'Cancel'}
          </button>
          {
            openEditAlert &&
            <MessageAlertDialog handleSubmit={()=>handleSubmit()} toggleOpen={toggleOpenEditAlert} description={"Are you sure you want to proceed this modification"} title={"Edit "+item.activity_name}/>
          }
          {
            openDeleteAlert &&
            <MessageAlertDialog handleSubmit={()=>handleDelete()} toggleOpen={toggleOpenDeleteAlert} description={"Are you sure you want to delete this activity"} title={"Delete activity"}/>
          }
        </div>
      </div>
    </ModalBase>
  );
}
