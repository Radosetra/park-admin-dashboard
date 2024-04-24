import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { ListCardLandscape } from '../../components/List/card.landscape.list';

const Landscape = () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Landscape" />

      <ListCardLandscape />
    </DefaultLayout>
  );
};

export default Landscape;
