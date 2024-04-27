import { useEffect, useState } from 'react';

import {
  DateSelectArg,
  EventClickArg,
  EventInput,
} from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { EventType } from '../../types/event';

import { useFetchEvents } from '../../hooks/event.hooks';
import { formatEvent } from '../../utils/event/formatEvent';
import { DeleteEventDto, EventDto } from '../../_type/event.dto';
import ModalEditEvent from '../Modal/ModalEditEvent';
import ModalCreateEvent from '../Modal/ModalCreateEvent';
import { ModalDeleteEvent } from '../Modal/ModalDeleteEvent';

const Calendar = () => {
  // fetching all events
  const {data, isSuccess: isEventsSucces, isLoading, error} = useFetchEvents()

  const [events, setEvents] = useState<EventDto[]>()

  const [eventId, setEventId] = useState<string>();

  const [eventsFormated, setEventsFormated] = useState<EventInput[]>();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [detailModal, setDetailModal] = useState(false);

  const [currentEvent, setCurrentEvent] = useState<DeleteEventDto>();

  const [deleteModalOpen, setOpenDeleteModal] = useState(false);

  useEffect(()=>{
    // setEvents(data?.data)
    if (isLoading) {
      console.log("Loading data...");
    }
  
    if (error) {
      console.error("Error fetching data:", error);
    }
  
    if (isEventsSucces) {
      console.log("Data loaded:", data);
      setEventsFormated(formatEvent(data?.data));  // Assuming the response is wrapped in a "data" object
      console.log("Events formated useEffect");
      
      console.log(eventsFormated);
    }
    
  }, [data, isEventsSucces, isLoading, error])

  useEffect(() => {
    console.log("Events formatted in useEffect:", eventsFormated);
  }, [eventsFormated]);

  useEffect(() =>{
    if(currentEvent !== undefined){
      setTimeout(()=>{
        setOpenDeleteModal(true)
      }, 1000)
    }
  }, [currentEvent])
  

  // create event
  const handleDateSelect = (selectInfo: DateSelectArg) => {

    setIsCreateModalOpen(true);

    // service create
  };

  // update event
  const handleEventClick = (clickInfo: EventClickArg) => {

    setEventId(clickInfo.event.id);
    console.log("ID : "+clickInfo.event.id);
    

    setDetailModal(true);
  };

  return (
    <div className="w-full h-[60rem] flex flex-col rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="w-full h-full">
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
        events={eventsFormated}
        eventClick={handleEventClick}
        //DYNAMIC - component interaction
        select={handleDateSelect}
      />
      </div>

      {isCreateModalOpen && (
        <ModalCreateEvent
          setIsOpen={setIsCreateModalOpen}
        />
      )}

      {detailModal && (
        <ModalEditEvent
          eventId={eventId!}
          setIsOpen={setDetailModal}
          setCurrentEvent={setCurrentEvent}
        />
      )}

      {deleteModalOpen && (
        <ModalDeleteEvent 
          event_id={currentEvent?.event_id!}
          event_name={currentEvent?.event_name!}
          setIsOpen={setOpenDeleteModal}
        />
      )
      }


    </div>
  );
};

export default Calendar;
