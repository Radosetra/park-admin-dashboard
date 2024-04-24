import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import Calendar from '../../components/Scheduler';
import { useState } from 'react';
import ModalCreateEvent from '../../components/Modal/ModalCreateEvent';
import { EventType } from '../../types/event';

const Event = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [detailModal, setDetailModal] = useState(false);

  const [currentEvent, setCurrentEvent] = useState<EventType>({
    name: "",
    startStr: "",
    endStr: "",
    description: "",
    allDay: false,
  });

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Event" />

      <div className="flex flex-col items-center w-full">
        <Calendar 
          event={currentEvent}
          setCurrentEvent={setCurrentEvent}
          setIsCreateModalOpen={setIsCreateModalOpen}
          setDetailModal={setDetailModal}
        />

        {
          isCreateModalOpen && 
            <ModalCreateEvent 
              selectEvent={currentEvent}
              setCurrentEvent={setCurrentEvent}
              setIsOpen={setIsCreateModalOpen}
            />
        }

        {
          detailModal && 
          <ModalCreateEvent 
            selectEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            setIsOpen={setDetailModal}
            view={true}
          />
        }
      </div>
    </DefaultLayout>
  );
};

export default Event;
