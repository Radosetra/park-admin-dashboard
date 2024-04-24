import { useState } from 'react';
import { ActivityType } from '../../types/activityType';
import { truncateString } from '../../utils/stringUtils';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { CardActions } from '../card/components/card.actions';
import { CardBody } from '../card/components/card.body';
import { CardBodyTitle } from '../card/components/card.body.title';
import { CardHeader } from '../card/components/card.header';
import { ListCardActivityProps } from './types/list.activity.type';
import ModalItemView from '../Modal/ModalItemView';
import ModalCreateItem from '../Modal/ModalCreateItem';
import { FaPlus } from 'react-icons/fa';

export const ListCardActivity = (props: ListCardActivityProps) => {
  const { activities } = props;

  const [currentActivity, setCurrentActivity] = useState<ActivityType>({
    activity_name: '',
    activity_description: '',
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
          {activities.map((activity, key) => {
            const image: string = activity.photos[0];
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
                    {activity.activity_name}
                  </CardBodyTitle>
                  <p className="text-customGray-400/80">
                    {truncateString(activity.activity_description, 50)}
                  </p>
                  <CardActions>
                    <Button
                      label="View"
                      onClick={() => {
                        setCurrentActivity(activity);
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
          <ModalItemView item={currentActivity} setIsOpen={setIsViewOpen} />
        )}

        {isCreateFormOpen && (
          <ModalCreateItem item="activity" setIsOpen={setIsCreateFormOpen} />
        )}
      </div>
    </div>
  );
};
