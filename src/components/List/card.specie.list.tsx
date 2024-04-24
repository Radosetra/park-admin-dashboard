import { useEffect, useState } from 'react';
import { truncateString } from '../../utils/stringUtils';
import { Button } from '../button';
import { Card } from '../card';
import { CardActions } from '../card/components';
import { CardBody } from '../card/components';
import { CardBodyTitle } from '../card/components';
import { CardHeader } from '../card/components';
import { ListCardSpecieProps } from './types/list.specie.type';
import { FaPlus } from 'react-icons/fa';
import ModalItemView from '../Modal/ModalItemView';
import ModalCreateItem from '../Modal/ModalCreateItem';
import { SpeciesDto, SpecieType } from '../../_type/species.dto.ts';
import { useFetchSpeciesByType } from '../../hooks/species.hooks.ts';
import { Specie } from '../../types/specie.ts';

export const ListCardSpecie = ({
  type
}: ListCardSpecieProps) => {

  const [currentSpecie, setCurrentSpecie] = useState<Specie>({
    specie_name: "",
    specie_description: "",
    specie_type: SpecieType.ANIMAL,
    photos: []
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [species, setSpecies] = useState<SpeciesDto[]>()
  const {data, isSuccess} = useFetchSpeciesByType(type)
  useEffect(() => {
    setSpecies(data?.data)
  }, [data, isSuccess]);
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-5">
        <Button size="medium" 
          label="Add" 
          style='' 
          type="button" 
          variant="primary" 
          onClick={() => setIsCreateFormOpen(true)}
          leftIcon={<FaPlus />}  />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-5">
          {species?.map((specie, key) => {
            const image: string = specie.pictures?specie.pictures[0]?.picture_url:"";
            return (
              <Card
                shadow="lg"
                style="bg-white w-[20rem] shrink-0 rounded-lg overflow-hidden"
                key={key}
              >
                <CardHeader
                  imageUrl={image}
                  style="h-[12rem] w-full overflow-hidden"
                />

                <CardBody>
                  <CardBodyTitle style="text-black text-[1.5rem] font-bold">
                    {specie.specie_name}
                  </CardBodyTitle>
                  <p className="text-customGray-400/80">
                    {truncateString(specie.specie_description, 50)}
                  </p>
                  <CardActions>
                    <Button
                      label="View"
                      onClick={() => {
                        setCurrentSpecie(specie as Specie);
                        setIsOpen(true);
                      }}
                      type="button"
                      variant="primary"
                    />
                  </CardActions>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {isOpen && <ModalItemView item={currentSpecie} setIsOpen={setIsOpen} />}

        {isCreateFormOpen && (
          <ModalCreateItem
            item="specie"
            specie="animal"
            setIsOpen={setIsCreateFormOpen}
          />
        )}
      </div>
    </div>
  );
};
