import { DeleteEventDto } from '@/src/_type/event.dto';
import ModalBase from './ModalBase';
import { useDeleteEvent } from '../../hooks/event.hooks';
import { useEffect } from 'react';

interface ModalDeleteEventProps extends DeleteEventDto {
  setIsOpen: (param: boolean) => void
}

export const ModalDeleteEvent = (props: ModalDeleteEventProps) => {
  const {event_id, event_name, setIsOpen} = props

  const {
    mutate: deleteEvent,
    isSuccess: isDeleteSuscess,
    data: responseData,
    isError: isDeleteError,
  } = useDeleteEvent(event_id);

  useEffect(()=>{
    if(isDeleteSuscess){
      console.log("Delete success");
    }

    if(isDeleteError){
      console.log("Delete error ... "+responseData);
    }
  }, [isDeleteSuscess, isDeleteError]);

  const handleSubmit = ()=>{
    deleteEvent();
  }
  return (
    <ModalBase 
      name="Confirmation"
      setIsOpen={setIsOpen}
      style='w-[30rem]'
    >
      <div className="flex flex-col gap-2">
        <div className="w-full text-black">
          Are you sure to cancel the event {`"${event_name.toUpperCase()}"`}
        </div>

        <div className="flex items-center justify-end gap-5 mt-4">
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                handleSubmit();
                setIsOpen(false);
              }}
            >
              Confirm
            </button>

            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                setIsOpen(false)
              }
              }
            >
              Cancel
            </button>
          </div>

      </div>
    </ModalBase>);
};
