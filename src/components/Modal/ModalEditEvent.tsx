import ModalBase from './ModalBase';
import { InputField } from '../input/components/input/input';
import { TextArea } from '../input/components/input/textarea.input';
import { useEffect, useState } from 'react';
import { useEditEvent, useFetchEventById } from '../../hooks/event.hooks';
import { DeleteEventDto, EditEventDto, TagDto } from '../../_type/event.dto';
import { DatePickerWithRange } from '../Scheduler/DatePickerRange';
import { dateRangeDto } from '@/src/_type/dateRange.dto';
import { TagSelector } from '../Scheduler/TagSelector';

// import { convertToStr } from '../../utils/dateUtils';

// import moment from 'moment-timezone';

type ModalEditEventProps = {
  eventId: string;
  setCurrentEvent: (param: DeleteEventDto) => void
  setIsOpen: (param: boolean) => void;
};

const ModalEditEvent = (props: ModalEditEventProps) => {
  // console.log("Select event : "+selectEvent);
  const { eventId, setCurrentEvent, setIsOpen } = props

  const [event, setEvent] = useState<EditEventDto>();

  const [eventName, setEventName] = useState<string>();
  const [dateRange, setDateRange] = useState<dateRangeDto>();
  const [eventDescription, setEventDescription] = useState<string>();
  const [choisedTags, setChoisedTags] = useState<TagDto[]>();

  const { data, isSuccess, isLoading, error } = useFetchEventById(eventId);

  const {
    mutate: updateEvent,
    isSuccess: isSubSuscess,
    data: responseData,
    isError: isSubError,
  } = useEditEvent(eventId);

  useEffect(() => {
    if (error) {
      console.error('Error fetching event:', error);
    }
    if (isSuccess) {
      console.log('Data loaded Succes 1: ', data?.data);
      // console.log('Data date', typeof data?.data.event_end_date);
      const tmpEvent:EditEventDto = {
        event_id: data?.data.event_id,
        event_name: data?.data.event_name,
        event_start_date: data?.data.event_start_date,
        event_end_date: data?.data.event_end_date,
        event_description: data?.data.event_description,
        tags: data?.data.tags,
      } 
      console.log("TMP ", tmpEvent);
      
      setEvent(tmpEvent);
      
      console.log('Data loaded Succes 2: ', event);
      setEventName(tmpEvent?.event_name);
      setDateRange({
        start_date: tmpEvent?.event_start_date!,
        end_date: tmpEvent?.event_end_date!,
      });
      setEventDescription(tmpEvent?.event_description);
      setChoisedTags(tmpEvent?.tags);
      console.log("Current tags ", tmpEvent?.tags);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isSubSuscess) {
      console.log('Update success Event');
    }

    if (isSubError) {
      console.log('Update failed Event');
    }
  }, [isSubSuscess, isSubError]);

  const handleSubmit = () => {

    const tmpEvent: EditEventDto = {
      event_id: eventId,
      event_name: eventName!,
      event_start_date: dateRange?.start_date!,
      event_end_date: dateRange?.end_date!,
      event_description: eventDescription!,
      tags: choisedTags!,
    }

    console.log("Tmp Event ", tmpEvent);
    
    updateEvent(tmpEvent);
  };

  const handleDeleteOpen = ()=>{
    const tmp: DeleteEventDto = {
      event_id: eventId,
      event_name: eventName!
    }

    setCurrentEvent(tmp);
  }

  return (
    <ModalBase name="Event View" setIsOpen={setIsOpen} style="w-[30rem]">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="flex flex-col gap-2.5">
          <InputField
            name="event_name"
            onChanged={(e) => setEventName(e.target.value)}
            placeholder=""
            type="text"
            label="Name"
            size="large"
            value={eventName}
          />

          <div className="flex flex-col gap-2">
            <h3 className="text-large">Date start - Date End</h3>

            <DatePickerWithRange
              start_date={dateRange?.start_date!}
              end_date={dateRange?.end_date!}
              setDateRange={setDateRange}
            />
          </div>

          <div className="h-[7.5rem]">
            <TextArea
              name="event_description"
              onChanged={(e:any) => setEventDescription(e.target.value)}
              size="large"
              label="Description"
              value={eventDescription}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-base">Tags</span>
            <TagSelector
              tags={choisedTags}
              setTags={setChoisedTags}
              state="edit"
            />
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
              Edit
            </button>

            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                handleDeleteOpen()
                setIsOpen(false)
                
              }
              }
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </ModalBase>
  );
};

export default ModalEditEvent;
