import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { ListCardSpecie } from '../../components/List/card.specie.list';
import { SpecieType } from '../../_type/species.dto.ts';

const vegetalSpecies = () => {
  // fetch data from a json file
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Vegetal" />

      <ListCardSpecie 
        type={SpecieType.PLANT}
      />
      
    </DefaultLayout>
  );

  
};

export default vegetalSpecies;
