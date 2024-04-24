import { useState } from 'react';
import { truncateString } from '../../utils/stringUtils';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { CardActions } from '../card/components/card.actions';
import { CardBody } from '../card/components/card.body';
import { CardBodyTitle } from '../card/components/card.body.title';
import { CardHeader } from '../card/components/card.header';
import { ListCardLandscapeProps } from './types/list.landscape.type';
import { FaPlus } from 'react-icons/fa';
import { LandscapeType } from '../../types/landscapeType';
import ModalItemView from '../Modal/ModalItemView';
import ModalCreateItem from '../Modal/ModalCreateItem';

export const ListCardLandscape = (props: ListCardLandscapeProps) => {
  const { landscapes } = props;

  const [currentLandscape, setCurrentLandscape] = useState<LandscapeType>({
    landscape_name: '',
    type: 'type1',
    landscape_description: '',
    photos: [],
  });

  const [isViewOpen, setIsViewOpen] = useState(false);

  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-5">
        <Button
          size="medium"
          label="Add"
          style=""
          type="button"
          variant="primary"
          onClick={() => setIsCreateFormOpen(true)}
          leftIcon={<FaPlus />}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-5 justify-between">
          {landscapes.map((landscape, key) => {
            const image: string = landscape.photos[0];
            return (
              <Card
                shadow="lg"
                style="bg-white w-[20rem] shrink-0 rounded-lg overflow-hidden mb-5"
                key={key}
              >
                <CardHeader
                  imageUrl={image}
                  style="h-[12rem] w-full overflow-hidden"
                />

                <CardBody>
                  <CardBodyTitle style="text-black text-[1.5rem] font-bold">
                    {landscape.landscape_name}
                  </CardBodyTitle>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <span className="text-black text-[1.1rem] font-700">
                        Type
                      </span>
                      <p>{landscape.type}</p>
                    </div>
                  </div>
                  <p className="text-customGray-400/80">
                    {truncateString(landscape.landscape_description, 50)}
                  </p>
                  <CardActions>
                    <Button
                      label="View"
                      onClick={() => {
                        setCurrentLandscape(landscape);
                        setIsViewOpen(true);
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

        {isViewOpen && (
          <ModalItemView item={currentLandscape} setIsOpen={setIsViewOpen} />
        )}

        {isCreateFormOpen && (
          <ModalCreateItem item="landscape" setIsOpen={setIsCreateFormOpen} />
        )}
      </div>
    </div>
  );
};
