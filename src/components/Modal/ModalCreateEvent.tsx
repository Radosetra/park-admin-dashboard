import ModalBase from './ModalBase';
import { InputField } from '../input/components/input/input';
import { TextArea } from '../input/components/input/textarea.input';
import { useEffect, useState } from 'react';
import { useCreateEvent } from '../../hooks/event.hooks';
import { CreateEventDto, TagDto } from '../../_type/event.dto';
import { DatePickerWithRange } from '../Scheduler/DatePickerRange';
import { dateRangeDto } from '@/src/_type/dateRange.dto';
import { TagSelector } from '../Scheduler/TagSelector';

import { format } from "date-fns"

type ModalCreateEventProps = {
  setIsOpen: (param: boolean) => void;
};

const ModalCreateEvent = ({setIsOpen }: ModalCreateEventProps) => {
  // console.log("Select event : "+selectEvent);

  // const [event, setEvent] = useState<CreateEventDto>()

  const [eventName, setEventName] = useState<string>();
  const [dateRange, setDateRange] = useState<dateRangeDto>()
  const [eventDescription, setEventDescription] = useState<string>()
  const [choisedTags, setChoisedTags] = useState<TagDto[]>()

  const {mutate: createEvent, isSuccess: isCreateSuccess, isError: isCreateError, data: createResp} = useCreateEvent()

  const handleSubmit = () => {
    const tmpEvent: CreateEventDto = {
      event_name: eventName!,
      event_start_date: format(dateRange?.start_date!, "y-MM-dd"),
      event_end_date: format(dateRange?.end_date!, "y-MM-dd"),
      event_description: eventDescription!,
      tags: choisedTags!,
    }
    console.log("Tmp Event ", tmpEvent);
    
    // setEvent(tmpEvent);

    // console.log("Event ", event)
    

    createEvent(tmpEvent!)
  }

  useEffect(()=>{
    if(isCreateSuccess){
      console.log("Create success");
    }

    if(isCreateError){
      console.log("Create error " + createResp);
      
    }

  }, [isCreateSuccess, isCreateError])

  return (
    <ModalBase 
      name="Event Form"
      setIsOpen={setIsOpen}
      style='w-[30rem]'
    >
      {/* {
        isLoading ? <p>Loading</p> : */}
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
        <h3 className='text-large'>Date start - Date End</h3>
        
        <DatePickerWithRange 
          start_date={dateRange?.start_date!}
          end_date={dateRange?.end_date!}
          setDateRange={setDateRange}
        />
          
        </div>

        <div className="h-[7.5rem]">
          <TextArea
            name="event_description"
            onChanged={(e) => setEventDescription(e.target.value)}
            size="large"
            label="Description"
            value={eventDescription}
          />
        </div>

        {/* <MultiSelect 
          id='tag'
          label='Tag'
          tags={event?.tags!}
          setTags={setChoisedTags}
        /> */}
        <div className="flex flex-col gap-2">
          <span className='text-base'>Tags</span>
          <TagSelector
            setTags={setChoisedTags}
            state="create"
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
            Save
          </button>

          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
      {/* } */}
      
    </ModalBase>
  );
};

export default ModalCreateEvent;
