import { useState } from 'react';

import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { INITIAL_EVENTS, createEventId } from './event-utils';
import { EventType } from '../../types/event';
import ModalCreateEvent from '../Modal/ModalCreateEvent';

type CalendarProps = {
  event: EventType;
  setCurrentEvent: (param: EventType) => void;
  setIsCreateModalOpen: (param: boolean) => void;
  setDetailModal: (param: boolean) => void
};

const Calendar = (props: CalendarProps) => {
  const { event, setIsCreateModalOpen, setCurrentEvent, setDetailModal } = props;
  
  // const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setCurrentEvent({
      name: '',
      startStr: selectInfo.startStr,
      endStr: selectInfo.endStr,
      description: '',
      allDay: false,
    });

    setIsCreateModalOpen(true);

    // service create
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    setCurrentEvent({
      name: clickInfo.event.title,
      startStr: clickInfo.event.startStr,
      endStr: clickInfo.event.endStr,
      description: '',
      allDay: false,
    });

    setDetailModal(true);

    // action handle for deleting event
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove()
    // }
  };

  return (
    <div className="w-full h-[60rem] rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        initialView="dayGridMonth"
        editable={true}
        // selection cell/multi

        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={INITIAL_EVENTS}
        eventClick={handleEventClick}
        //DYNAMIC - component interaction
        select={handleDateSelect}
      />
    </div>
  );
};

export default Calendar;
