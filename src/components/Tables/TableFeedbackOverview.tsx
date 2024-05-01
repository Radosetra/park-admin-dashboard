import { useEffect, useState } from 'react';
import { truncateString } from '../../utils/stringUtils';
import { FeedbackDto } from '../../_type/feedback.dto';
import { convertToStr } from '../../utils/dateUtils';
import { useFetchRecentPendingFeedback } from '../../hooks/overview.hooks.ts';
import { useNavigate } from 'react-router-dom';

const TableFeedbackOverview = () => {
  const navigate = useNavigate()
  const {data:feedbackPending, isSuccess:isFeedPendSuccess} = useFetchRecentPendingFeedback()
  const [feedbacks, setFeedbacks] = useState<FeedbackDto[]>()

  useEffect(()=>{
    setFeedbacks(feedbackPending?.data)
  }, [feedbackPending, isFeedPendSuccess])

  return (
    <div className="rounded-xl border border-stroke w-full bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" onClick={()=>navigate("feedback")}>
        <div className={"pt-1 pb-4"}>
          <h1 className={"text-gray-900 text-2xl font-semibold"}>Most recent pending feedback</h1>
        </div>
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Sender
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Content
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Date
            </h5>
          </div>
        </div>
      <div>
        {/* Table body */}
        {feedbacks?.map((feedback, key) => (
          <div className={`grid grid-cols-3 sm:grid-cols-3 hover:shadow-xl hover:scale-105 transition duration-300 ${
            key === feedbacks.length - 1
              ? ''
              : 'border-b border-stroke dark:border-strokedark'
          }`}
          key={key}>
            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black dark:text-white font-medium">
                {feedback.feedback_sender}
              </p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black dark:text-white font-light">
                {truncateString(feedback.feedback_content, 40)}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black text-sm dark:text-white font-medium">
                {convertToStr(feedback.feedback_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableFeedbackOverview;
