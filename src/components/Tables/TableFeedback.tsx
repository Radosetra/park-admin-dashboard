import { useEffect, useState } from 'react';
import { FeedbackStatus } from '../../types/feedbackType';
import { truncateString } from '../../utils/stringUtils';
import ModalFeedback from '../Modal/ModalFeedback';
import { FeedbackDto } from '../../_type/feedback.dto';
import {  useFetchFeedbackByStatus } from '../../hooks/feedback.hooks';
import { convertToStr } from '../../utils/dateUtils';

const TableFeedback = () => {
  
  const {data:feedbackApproved, isSuccess:isFeedAppSuccess, isLoading:isFeedAppLoading} = useFetchFeedbackByStatus(FeedbackStatus.APPROVED)
  const {data:feedbackPending, isSuccess:isFeedPendSuccess, isLoading:isFeedPendlLoading} = useFetchFeedbackByStatus(FeedbackStatus.PENDING)
  const {data:feedbackRefused, isSuccess:isFeedRefSuccess, isLoading:isFeedRefLoading} = useFetchFeedbackByStatus(FeedbackStatus.REFUSED)

  const [feedbacks, setFeedbacks] = useState<FeedbackDto[]>(feedbackApproved?.data)
  
  const [currentStatus, setCurrentStatus] = useState<FeedbackStatus>(FeedbackStatus.PENDING);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentFeedback, setCurrentFeedback] = useState<FeedbackDto>({
    feedback_id: "",
    feedback_sender: "",
    feedback_content: "",
    feedback_date: new Date(),
    feedback_status: FeedbackStatus.APPROVED,
    pictures: []
  });
  

  // Update feedbacks whenever currentStatus changes
  const handleStatusChange = (status: FeedbackStatus) => {
    setCurrentStatus(status);
    if(status === FeedbackStatus.APPROVED){
      setFeedbacks(feedbackApproved?.data)
    } else if (status === FeedbackStatus.PENDING){
      setFeedbacks(feedbackPending?.data)
    } else if(status === FeedbackStatus.REFUSED){
      setFeedbacks(feedbackRefused?.data)
    }
  };

  useEffect(()=>{
    setFeedbacks(feedbackPending?.data)
  }, [feedbackPending, isFeedPendSuccess])

  
  
  return (
    <div className="rounded-xl border border-stroke w-full bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        {/* Tabs section */}
        <div className="flex gap-10 items-start">
          <div 
            className={`p-2.5 text-center xl:p-3 cursor-pointer ${currentStatus === FeedbackStatus.APPROVED && `border-b border-black dark:border-white font-bold`}`}
            onClick={() => handleStatusChange(FeedbackStatus.APPROVED)}
          >
              <h5 className={`text-sm dark:text-white ${currentStatus === FeedbackStatus.APPROVED && `text-black font-bold`}`}>
                Approved
              </h5>
          </div>

          <div 
            className={`p-2.5 text-center xl:p-3 cursor-pointer ${currentStatus === FeedbackStatus.PENDING && `border-b border-black dark:border-white`}`}
            onClick={() => handleStatusChange(FeedbackStatus.PENDING)}
          >
              <h5 className={`text-sm dark:text-white ${currentStatus === FeedbackStatus.PENDING && `text-black font-bold`}`}>
                Pending
              </h5>
          </div>

          <div 
            className={`p-2.5 text-center xl:p-3 cursor-pointer ${currentStatus === FeedbackStatus.REFUSED && `border-b border-black dark:border-white`}`}
            onClick={() => handleStatusChange(FeedbackStatus.REFUSED)}
          >
              <h5 className={`text-sm dark:text-white ${currentStatus === FeedbackStatus.REFUSED && `text-black font-bold`}`}>
                Refused
              </h5>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Sender
            </h5>
          </div>
          {/* <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Name
            </h5>
          </div> */}
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
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Action
            </h5>
          </div>
        </div>

        {/* Table body */}
        {feedbacks?.map((feedback, key) => (
          <div className={`grid grid-cols-3 sm:grid-cols-4 hover:shadow-xl hover:scale-105 transition duration-300 ${
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

            {/* <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black dark:text-white font-medium">
                {feedback.feedback_sender}
              </p>
            </div> */}

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

            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <button 
                className="hover:text-primary"
                
                onClick={() => {
                  setCurrentFeedback(feedback)
                  setIsModalOpen(true)
                }}
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                    fill=""
                  />
                  <path
                    d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Modal */}
        {
          isModalOpen && 
            <ModalFeedback 
              feedback={currentFeedback}
              setIsOpen={setIsModalOpen}
            />
        }
      </div>
    </div>
  );
};

export default TableFeedback;
