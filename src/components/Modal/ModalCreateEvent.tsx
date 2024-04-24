import { DateSelectArg } from '@fullcalendar/core';
import ModalBase from './ModalBase';
import { InputField } from '../input/components/input/input';
import { TextArea } from '../input/components/input/textarea.input';
import DatePickerOne from '../Forms/DatePicker/DatePickerOne';
import { EventType } from '../../types/event';
import MultiSelect from '../Forms/MultiSelect';
import { useRef, useState } from 'react';

type ModalCreateEventProps = {
  selectEvent: EventType;
  view?: boolean;
  setCurrentEvent: (param:EventType) => void
  setIsOpen: (param: boolean) => void;
};

const data = [
  'climb',
  'natation',
  'randonne'
];

const ModalCreateEvent = ({ selectEvent, setIsOpen, setCurrentEvent, view=false }: ModalCreateEventProps) => {
  // console.log("Select event : "+selectEvent);
  const [eventName, setEventName] = useState("");
  return (
    <ModalBase name={view? "Event View" : "Event Form"} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-2.5">
        <InputField
          name="name"
          onChanged={(e) => setEventName(e.target.value)}
          placeholder=""
          type="text"
          label="Name"
          size="large"
          value={view ? selectEvent.name : ''}
        />

        <div className="flex justify-between gap-4">
          <DatePickerOne 
            size='large'
            label="Date start"
          />

          <DatePickerOne
            size='large'
            label="Date end"
          />
        </div>

        <div className="h-[7.5rem]">
          <TextArea
            onChanged={() => console.log('')}
            size="large"
            label="Description"
            value={view ? selectEvent.description : ''}
          />
        </div>

        <MultiSelect 
          id='tag'
          label='Tag'
          tags={data}
        />

        <div className="flex items-center justify-end gap-5 mt-4">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              setCurrentEvent({
                name: eventName,
                startStr: selectEvent.startStr,
                endStr: selectEvent.endStr,
                description: "",
                allDay: false,
              })


              
              setIsOpen(false);
              // setIsOpen(false)
            }}
          >
            {view ? 'Edit' : 'Save'}
          </button>

          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            {view ? 'Close' : 'Cancel'}
          </button>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalCreateEvent;
