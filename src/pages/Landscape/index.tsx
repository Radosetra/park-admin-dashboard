import { FaPlus } from 'react-icons/fa';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button } from '../../components/button';
import DefaultLayout from '../../layout/DefaultLayout';
import { useState } from 'react';
import { LandscapeType } from '../../types/landscapeType';
import { ListCardLandscape } from '../../components/List/card.landscape.list';

import { landscapes } from '../../utils/constant/landscape.data';
import ModalItemView from '../../components/Modal/ModalItemView';
import ModalCreateItem from '../../components/Modal/ModalCreateItem';

const Landscape = () => {
  const [currentLandscape, setCurrentLandscape] = useState<LandscapeType>({
    landscape_name: '',
    type: 'type1',
    landscape_description: '',
    photos: [],
  });

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Landscape" />

      <ListCardLandscape landscapes={landscapes} />
    </DefaultLayout>
  );
};

export default Landscape;
