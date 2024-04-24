import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { ListCardActivity } from '../../components/List/card.activity.list';

const Activity = () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Activity" />

        <ListCardActivity />
    </DefaultLayout>
  );
};

export default Activity;
