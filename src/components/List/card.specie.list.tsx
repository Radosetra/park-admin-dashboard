import { useState } from 'react';
import { truncateString } from '../../utils/stringUtils';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { CardActions } from '../card/components/card.actions';
import { CardBody } from '../card/components/card.body';
import { CardBodyTitle } from '../card/components/card.body.title';
import { CardHeader } from '../card/components/card.header';
import { ListCardSpecieProps } from './types/list.specie.type';
import { Specie } from '../../types/specie';
import { FaPlus } from 'react-icons/fa';
import ModalItemView from '../Modal/ModalItemView';
import ModalCreateItem from '../Modal/ModalCreateItem';

export const ListCardSpecie = ({
  species,
}: ListCardSpecieProps) => {

  const [currentSpecie, setCurrentSpecie] = useState<Specie>({
    specie_name: "",
    specie_description: "",
    specie_type: "animal",
    photos: []
  });

  const [isOpen, setIsOpen] = useState(false);

  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

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
          {species.map((specie, key) => {
            const image: string = specie.photos[0];
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
                        setCurrentSpecie(specie);
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
