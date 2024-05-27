import ImageSlider from '../ImageSlider';
import ModalBase from './ModalBase';
import { FeedbackDto } from '../../_type/feedback.dto';
import { FeedbackStatus } from '../../types/feedbackType';
import { useUpdateFeedbackStatus } from '../../hooks/feedback.hooks';

interface ModalFeedbackProps {
  feedback: FeedbackDto;
  setIsOpen: (value: boolean) => void;
}

export default function ModalFeedback({
  feedback,
  setIsOpen,
}: ModalFeedbackProps) {
  const {mutate:updateStatus} = useUpdateFeedbackStatus(feedback.feedback_id)

  const handleSubmit = async (status: FeedbackStatus) => {
    // const feedbackFormData = new FormData()
    const data:Partial<FeedbackDto> = {
      feedback_status: status
    }
    updateStatus(data)
  }
  return (
    <ModalBase name="Feedback View" setIsOpen={setIsOpen} style="w-[40rem]">
      <div className="flex flex-col gap-2.5">
        {/* Image slider */}
        {(feedback.pictures && feedback.pictures?.length !== 0)  && (
          <div className="lex-auto">
            <ImageSlider height="h-[17rem]" images={feedback.pictures} />
          </div>
        )}

        {/* Content */}

        <div className="flex items-center justify-start gap-5">
          {/* Profil */}
          <div className="flex items-center justify-center bg-primary text-white text-md font-medium w-[2.5rem] h-[2.5rem] rounded-full">
            {feedback.feedback_sender[0].toUpperCase()}
          </div>

          {/* Name */}
          <div className="flex items-center justify-center text-black  dark:text-white text-[1.5rem] opacity-4">
            {feedback.feedback_sender}
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <p className="w-full text-justify">{feedback.feedback_content}</p>
        </div>

        {/*footer*/}
        {feedback.feedback_status === FeedbackStatus.PENDING && (
          <div className="flex items-center justify-end gap-5">
            <button
              className="bg-white text-emerald-600 border border-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-lg hover:bg-emerald-600 hover:text-white mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                handleSubmit(FeedbackStatus.APPROVED)
                setIsOpen(false)
              }}
            >
              Approve
            </button>

            <button
              className="text-red-500 border border-red-500 hover:text-white hover:bg-red-500 font-bold uppercase px-6 py-3 rounded-lg text-sm outline-none mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                handleSubmit(FeedbackStatus.REFUSED)
                setIsOpen(false)
              }}
            >
              Decline
            </button>
          </div>
        )}
      </div>
    </ModalBase>
  );
}
