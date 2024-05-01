import { truncateString } from '../../utils/stringUtils';
import { Card } from './card';
import { CardBody } from './components';
import { ContactList } from '../../_type/contact.dto.ts';
import { formatDistanceToNow } from 'date-fns';

interface MessageCardProps {
  message: ContactList;
  setIsOpen?: (param: boolean) => void
  setCurrentMessage?: (param: ContactList) => void
}

const MessageCard = (props: MessageCardProps) => {
  const { message, setIsOpen, setCurrentMessage } = props;
  const relativeDate = formatDistanceToNow(message.contact_date)
  return (
    <div 
      className=""
      onClick={() => {
        setCurrentMessage!(message);
        setIsOpen!(true);
      }}
    >
      <Card
      shadow="lg"
      style="border-customGray-300/20 cursor-pointer rounded-xl hover:scale-105 transition duration-300"
    >
      <CardBody>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-2">
              {/* Profil */}
              <div className="flex items-center justify-center bg-primary text-white text-md font-medium w-[2.5rem] h-[2.5rem] max-md:w-[2.2rem] max-md:h-[2.2rem] rounded-full">
                {message.user_email[0].toUpperCase()}
              </div>

              {/* Name */}
              <div className="flex items-center justify-center text-black  dark:text-white text-[1.5rem] max-md:text-base max-md:font-semibold opacity-4">
                {message.user_email}
              </div>
            </div>

            <span className="text-black max-md:text-sm">{relativeDate}</span>
          </div>
        </div>

        <div className="text-customGray-400/80 max-md:text-base">
          {truncateString(message.contact_content,200)}
        </div>
      </CardBody>
    </Card>
    </div>
    
  );
};

export default MessageCard;
