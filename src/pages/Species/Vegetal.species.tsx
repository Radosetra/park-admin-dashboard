import { useEffect, useState } from 'react';

import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

import { Specie } from '../../types/specie';
import { ListCardSpecie } from '../../components/List/card.specie.list';


import {speciesData} from "../../utils/constant/data"


const vegetalSpecies = () => {
  // fetch data from a json file
  const [species, setSpecies] = useState<Specie[]>([]);

  useEffect(() => {
    setSpecies(speciesData.filter((specie) => specie.specie_type === "vegetal"));
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Vegetal" />

      <ListCardSpecie 
        species={species}
      />
      
    </DefaultLayout>
  );

  
};

export default vegetalSpecies;
