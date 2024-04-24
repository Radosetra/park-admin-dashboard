import { useState } from 'react';
import { FeedbackType, FeedbackStatus } from '../../types/feedbackType';
import { truncateString } from '../../utils/stringUtils';
import ModalFeedback from '../Modal/ModalFeedback';

interface TableFeedbackProps {
  // isOpen: boolean,
  feedbackData: FeedbackType[],
}


const TableFeedback = ({feedbackData} : TableFeedbackProps) => {

  const [currentStatus, setCurrentStatus] = useState<FeedbackStatus>(FeedbackStatus.approved);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentFeedback, setCurrentFeedback] = useState<FeedbackType>({
    sender: "",
    name: "",
    content: "",
    date: "",
    status: FeedbackStatus.approved,
    photos: []
  });
  
  // Initialize feedbacks with the filtered feedback data based on currentStatus
  let feedbacks: FeedbackType[] = feedbackData.filter(feedback => feedback.status === currentStatus);

  // Modal 
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // Update feedbacks whenever currentStatus changes
  const handleStatusChange = (status: FeedbackStatus) => {
    setCurrentStatus(status);
    feedbacks = feedbackData.filter(feedback => feedback.status === status);
  };
  

  return (
    <div className="rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        {/* Tabs section */}
        <div className="flex gap-10 items-start">
          <div 
            className={`p-2.5 text-center xl:p-3 cursor-pointer ${currentStatus === FeedbackStatus.approved && `border-b border-black dark:border-white font-bold`}`}
            onClick={() => handleStatusChange(FeedbackStatus.approved)}
          >
              <h5 className={`text-sm dark:text-white ${currentStatus === FeedbackStatus.approved && `text-black font-bold`}`}>
                Approved
              </h5>
          </div>

          <div 
            className={`p-2.5 text-center xl:p-3 cursor-pointer ${currentStatus === FeedbackStatus.pending && `border-b border-black dark:border-white`}`}
            onClick={() => handleStatusChange(FeedbackStatus.pending)}
          >
              <h5 className={`text-sm dark:text-white ${currentStatus === FeedbackStatus.pending && `text-black font-bold`}`}>
                Pending
              </h5>
          </div>

          <div 
            className={`p-2.5 text-center xl:p-3 cursor-pointer ${currentStatus === FeedbackStatus.declined && `border-b border-black dark:border-white`}`}
            onClick={() => handleStatusChange(FeedbackStatus.declined)}
          >
              <h5 className={`text-sm dark:text-white ${currentStatus === FeedbackStatus.declined && `text-black font-bold`}`}>
                Declined
              </h5>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Sender
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Name
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
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase ">
              Action
            </h5>
          </div>
        </div>

        {/* Table body */}
        {feedbacks.map((feedback, key) => (
          <div className={`grid grid-cols-3 sm:grid-cols-5 hover:shadow-xl hover:scale-105 transition duration-300 ${
            key === feedbacks.length - 1
              ? ''
              : 'border-b border-stroke dark:border-strokedark'
          }`}
          key={key}>
            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black dark:text-white font-medium">
                {feedback.sender}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black dark:text-white font-medium">
                {feedback.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black dark:text-white font-light">
                {truncateString(feedback.content, 40)}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black dark:text-white font-medium">
                {feedback.date}
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
