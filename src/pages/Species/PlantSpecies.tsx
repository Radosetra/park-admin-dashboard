import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { ListCardSpecie } from '../../components/List/card.specie.list';
import { SpecieType } from '../../_type/species.dto.ts';

const PlantSpecies = () => {
  // fetch data from a json file
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Plant" />

      <ListCardSpecie 
        type={SpecieType.PLANT}
      />
      
    </DefaultLayout>
  );

  
};

export default PlantSpecies;
