import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import CardDataStats from '../../components/CardDataStats';
import {
  useFetchOccuringEventCount,
  useFetchPendingContactCount,
  useFetchPendingFeedbackCount
} from '../../hooks/count.hooks.tsx';
import { FaCalendar, FaMessage, FaMoneyBill1Wave, FaNoteSticky } from 'react-icons/fa6';

const Overview: React.FC = () => {
  const  [eventCount, setEventCount] = useState<number>(0)
  const [feedbackCount, setFeedbackCount] = useState<number>(0)
  const [contactCount, setContactCount] = useState<number>(0)
  const {data:eventC, isSuccess:isESuccess} = useFetchOccuringEventCount()
  const {data:feedbackC, isSuccess:isFSuccess} = useFetchPendingFeedbackCount()
  const {data:contactC, isSuccess:isCSuccess} = useFetchPendingContactCount()

  useEffect(() => {
    setEventCount(eventC?.data)
  }, [eventC, isESuccess]);
  useEffect(() => {
    setFeedbackCount(feedbackC?.data)
  }, [feedbackC, isFSuccess]);
  useEffect(() => {
    setContactCount(contactC?.data)
  }, [contactC, isCSuccess]);
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Entry fees" total="$740-$1700 / adult">
          <FaMoneyBill1Wave className={"text-blue-700 text-2xl"}/>
        </CardDataStats>
        <CardDataStats title="All  pending feedback" total={feedbackCount+""}>
          <FaNoteSticky className={"text-blue-700 text-2xl"} />
        </CardDataStats>
        <CardDataStats title="All pending message" total={contactCount+""}>
          <FaMessage className={"text-blue-700 text-2xl"}/>
        </CardDataStats>
        <CardDataStats title="All occuring events" total={eventCount+""}>
          <FaCalendar className={"text-blue-700 text-2xl"}/>
        </CardDataStats>
      </div>
    </DefaultLayout>
  );
};

export default Overview;
