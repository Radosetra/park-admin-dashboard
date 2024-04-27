import { useEffect, useState } from 'react';
import { truncateString } from '../../utils/stringUtils';
import { Button } from '../button';
import { Card } from '../card';
import { CardActions } from '../card/components';
import { CardBody } from '../card/components';
import { CardBodyTitle } from '../card/components';
import { CardHeader } from '../card/components';
import ModalCreateItem from '../Modal/ModalCreateItem';
import { FaPlus } from 'react-icons/fa';
import { ActivityDto } from '../../_type/activity.dto.ts';
import { useFetchActivity } from '../../hooks/activity.hooks.ts';
import ModalActivityView from '../Modal/ModalActivityView.tsx';

export const ListCardActivity = () => {
  const [activities, setActivities] = useState<ActivityDto[]>()
  const {data, isSuccess} = useFetchActivity()
  const [currentActivity, setCurrentActivity] = useState<ActivityDto>({
    activity_name: '',
    activity_description: '',
    pictures: [],
  });
  if (isSuccess) console.log(data)
  useEffect(() => {
    setActivities(data?.data)
  }, [data, isSuccess]);

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
        <div className="flex flex-wrap gap-5">
          {activities?.map((activity, key) => {
            const image: string = activity.pictures?activity.pictures[0]?.picture_url:"";
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
          <ModalActivityView item={currentActivity} setIsOpen={setIsViewOpen} />
        )}

        {isCreateFormOpen && (
          <ModalCreateItem item="activity" setIsOpen={setIsCreateFormOpen} />
        )}
      </div>
    </div>
  );
};
