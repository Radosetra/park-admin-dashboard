import { MessageType } from '../../types/messageType';
import { truncateString } from '../../utils/stringUtils';
import { Card } from './card';
import { CardBody } from './components';

interface MessageCardProps {
  message: MessageType;
  setIsOpen: (param: boolean) => void
  setCurrentMessage: (param: MessageType) => void
}

const MessageCard = (props: MessageCardProps) => {
  const { message, setIsOpen, setCurrentMessage } = props;
  return (
    <div 
      className=""
      onClick={() => {
        setCurrentMessage(message);
        setIsOpen(true);
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
              <div className="flex items-center justify-center bg-primary text-white text-md font-medium w-[2.5rem] h-[2.5rem] rounded-full">
                {message.sender[0].toUpperCase()}
              </div>

              {/* Name */}
              <div className="flex items-center justify-center text-black  dark:text-white text-[1.5rem] opacity-4">
                {message.sender}
              </div>
            </div>

            <span className="text-black">{message.date}</span>
          </div>
        </div>

        <div className="text-customGray-400/80">
          {truncateString(message.content,200)}
        </div>
      </CardBody>
    </Card>
    </div>
    
  );
};

export default MessageCard;
