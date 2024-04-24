import React from 'react';
import ImageSlider from '../ImageSlider';
import { FeedbackType } from '../../types/feedbackType';
import ModalBase from './ModalBase';

interface ModalFeedbackProps {
  feedback: FeedbackType;
  setIsOpen: (value: boolean) => void;
}

export default function ModalFeedback({
  feedback,
  setIsOpen,
}: ModalFeedbackProps) {
  return (
    <ModalBase name="Feedback View" setIsOpen={setIsOpen} style="w-[40rem]">
      <div className="flex flex-col gap-2.5">
        {/* Image slider */}
        {feedback.photos.length !== 0 && (
          <div className="lex-auto">
            <ImageSlider height="h-[17rem]" images={feedback.photos} />
          </div>
        )}

        {/* Content */}

        <div className="flex items-center justify-start gap-5">
          {/* Profil */}
          <div className="flex items-center justify-center bg-primary text-white text-md font-medium w-[2.5rem] h-[2.5rem] rounded-full">
            {feedback.sender[0].toUpperCase()}
          </div>

          {/* Name */}
          <div className="flex items-center justify-center text-black  dark:text-white text-[1.5rem] opacity-4">
            {feedback.name}
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <p className="">{feedback.content}</p>
        </div>

        {/*footer*/}
        <div className="flex items-center justify-end gap-5">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Approved
          </button>

          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Declined
          </button>
        </div>
      </div>
    </ModalBase>
  );
}
