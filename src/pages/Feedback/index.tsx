import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableFeedback from '../../components/Tables/TableFeedback';
import DefaultLayout from '../../layout/DefaultLayout';

const Feedback = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Feedback" />

      <div className="flex flex-col items-center W-full">
        <TableFeedback />
      </div>
    </DefaultLayout>
  );
};

export default Feedback;
