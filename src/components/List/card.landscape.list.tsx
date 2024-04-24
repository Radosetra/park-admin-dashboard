import { useEffect, useState } from 'react';
import { truncateString } from '../../utils/stringUtils';
import { Button } from '../button';
import { Card } from '../card';
import { CardActions } from '../card/components';
import { CardBody } from '../card/components';
import { CardBodyTitle } from '../card/components';
import { CardHeader } from '../card/components';
import { FaPlus } from 'react-icons/fa';
import ModalItemView from '../Modal/ModalItemView';
import ModalCreateItem from '../Modal/ModalCreateItem';
import { LandscapeDto } from '../../_type/landscape.dto.ts';
import { useFetchLandscape } from '../../hooks/landscape.hooks.ts';

export const ListCardLandscape = () => {
  const [landscapes, setLandscapes] = useState<LandscapeDto[]>()
  const {data, isSuccess} = useFetchLandscape()
  if(isSuccess){
    console.log(data?.data)
  }
  useEffect(() => {
    setLandscapes(data?.data)
  }, [data, isSuccess]);

  const [currentLandscape, setCurrentLandscape] = useState<LandscapeDto>({
    landscape_name: '',
    landscape_type: 'type1',
    landscape_description: '',
    pictures: [],
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
          {landscapes?.map((landscape, key) => {
            const image: string = landscape.pictures?landscape.pictures[0].picture_url:"";
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
                      <p>{landscape.landscape_type}</p>
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
