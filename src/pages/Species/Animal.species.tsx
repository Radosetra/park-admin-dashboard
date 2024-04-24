import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { ListCardSpecie } from '../../components/List/card.specie.list';
import { SpecieType } from '../../_type/species.dto.ts';

const AnimalSpecies = () => {
  // fetch data from a json file
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Animal" />

      <ListCardSpecie 
        type={SpecieType.ANIMAL}
      />
      
    </DefaultLayout>
  );

  
};

export default AnimalSpecies;
