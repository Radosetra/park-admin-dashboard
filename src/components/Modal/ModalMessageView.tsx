import { ChatRoomInput } from '../input/components/input/chatroom.input';
import ModalBase from './ModalBase';
import { ContactList, ContactStatus } from '../../_type/contact.dto.ts';
import { formatDistanceToNow } from 'date-fns';

interface ModalMessageViewProps {
  message: ContactList;
  setIsOpen: (value: boolean) => void;
  status:ContactStatus
}

const ModalMessageView = (props: ModalMessageViewProps) => {
  const { message, setIsOpen, status } = props;
  const relativeDate = formatDistanceToNow(message.contact_date)
  return (
    <ModalBase name="Message" setIsOpen={setIsOpen} style="w-[40rem]">
      <div className="flex flex-col gap-2 ">
        <div className="w-full h-[1px] bg-gray"></div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-center bg-primary text-white text-md font-medium w-[2.5rem] h-[2.5rem] rounded-full">
              {message.user_email[0].toUpperCase()}
            </div>

            {/* Name */}
            <div className="flex items-center justify-center text-black  dark:text-white text-[1.5rem] opacity-4">
              {message.user_email}
            </div>
          </div>

          <span className="text-black opacity-25">{relativeDate}</span>
        </div>

        <div className="flex flex-col py-5 h-[20rem] overflow-y-scroll gap-2">
          <div className="text-customGray-400/80">{message.contact_content}</div>

        </div>
          {
            status === ContactStatus.PENDING &&
            <div className="h-[4rem]">
              <ChatRoomInput id={message.contact_id}/>
            </div>
          }

        {/* <ChatRoomInput /> */}
      </div>
    </ModalBase>
  );
};

export default ModalMessageView;
