import { useEffect, useState } from 'react';

import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

import { Specie } from '../../types/specie';
import { ListCardSpecie } from '../../components/List/card.specie.list';
import { Button } from '../../components/button/button';


import {speciesData} from "../../utils/constant/data"


const AnimalSpecies = () => {
  // fetch data from a json file
  const [species, setSpecies] = useState<Specie[]>([]);

  useEffect(() => {
    setSpecies(speciesData.filter((specie) => specie.specie_type === "animal"));
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Animal" />

      <ListCardSpecie 
        species={species}
      />
      
    </DefaultLayout>
  );

  
};

export default AnimalSpecies;
