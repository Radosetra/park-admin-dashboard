import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import Calendar from '../../components/Scheduler';

const Event = () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Event" />

      <div className="flex flex-col items-center w-full">
        <Calendar 
        />
      </div>
    </DefaultLayout>
  );
};

export default Event;
