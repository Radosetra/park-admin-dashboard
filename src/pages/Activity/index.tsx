import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { ListCardActivity } from '../../components/List/card.activity.list';

import { activities } from '../../utils/constant/activity.data';
const Activity = () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Activity" />

        <ListCardActivity
          activities={activities}
        />
    </DefaultLayout>
  );
};

export default Activity;
