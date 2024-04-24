import { useState } from 'react';
import { MessageType } from '../../types/messageType';
import { ChatRoomInput } from '../input/components/input/chatroom.input';
import ModalBase from './ModalBase';

interface ModalMessageViewProps {
  message: MessageType;
  setIsOpen: (value: boolean) => void;
}

const ModalMessageView = (props: ModalMessageViewProps) => {
  const { message, setIsOpen } = props;

  const [fakeMessage, setFakeMessage] = useState<MessageType>({
    sender: 'Mickael Radosetra',
    date: '2024-04-23',
    status: "Responded",
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus doloremque, et, ipsam ullam nulla dolor quas, cupiditate obcaecati eos aut enim veritatis libero quasi ex. Quibusdam saepe perspiciatis cum! Illo eveniet, incidunt placeat labore, adipisci ea maxime nisi sed ad tenetur qui voluptatibus, quo hic dolorum architecto repellendus et quis possimus. Corporis, nostrum dignissimos. Tempore quam, molestias sunt consequatur, sed vero molestiae quod, itaque provident modi perferendis ex repellendus. Unde ab qui voluptas, fuga ducimus eveniet repudiandae in fugiat explicabo consectetur architecto ex et quas corporis repellat facere veritatis sequi molestias labore aliquid? Corrupti illo provident sit quos illum!',
  });

  return (
    <ModalBase name="Message" setIsOpen={setIsOpen} style="w-[40rem]">
      <div className="flex flex-col gap-2 ">
        <div className="w-full h-[1px] bg-gray"></div>

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

          <span className="text-black opacity-25">{message.date}</span>
        </div>

        <div className="flex flex-col py-5 h-[20rem] overflow-y-scroll gap-2">
          <div className="text-customGray-400/80">{message.content}</div>

          {/* Fake Response */}
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-2">
              
              <div className="flex items-center justify-center bg-primary text-white text-md font-medium w-[2.5rem] h-[2.5rem] rounded-full">
                {fakeMessage.sender[0].toUpperCase()}
              </div>

              
              <div className="flex items-center justify-center ">
                <h3 className="text-black  dark:text-white text-[1.5rem] opacity-4">
                  {fakeMessage.sender}
                </h3>
                <span className="text-black opacity-25 ml-2">(Response)</span>
              </div>
            </div>

            <span className="text-black opacity-25">{fakeMessage.date}</span>
          </div>

          <div className="text-customGray-400/80 py-5">
            {fakeMessage.content}
          </div> */}
        </div>

        <div className="h-[4rem]">
          <ChatRoomInput />
        </div>

        {/* <ChatRoomInput /> */}
      </div>
    </ModalBase>
  );
};

export default ModalMessageView;
