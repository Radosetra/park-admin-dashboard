import { FaMicrophone, FaPaperPlane, FaStop } from 'react-icons/fa6';
import { ChangeEvent, useRef, useState } from 'react';
import { IconButton } from '../../../button';
import { TextArea } from './textarea.input';

type ChatRoomInputProps = {
  send?: () => void;
};
export const ChatRoomInput = (props: ChatRoomInputProps) => {
  const { send } = props;
  const [message, setMessage] = useState<string>('');
  // const [showMic, setShowMic] = useState<boolean>(true)
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    // if (message !== '') {
    //   send();
    //   setMessage('');
    // }
  };

  return (
    <form className="w-full h-full flex bg-white justify-between">
      <div className="space-x-2 w-full h-full rounded-lg bg-gray-50 ">
        <div className="flex flex-row h-full justify-between items-start w-full gap-2">
          <TextArea
            onChanged={() => console.log('')}
            size="large"
            placeholder='Your response'
            style='w-[70%]'
          />
          {/* <textarea
            ref={textAreaRef}
            id="chat"
            autoFocus
            onChange={handleMessageChange}
            rows={1}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
          ></textarea> */}
          <IconButton
            onClick={sendMessage}
            icon={<FaPaperPlane />}
            variant="secondary"
            size="large"
          />
        </div>
        {/* <IconButton onClick={()=>console.log(files)} variant="icon" icon={<FaTerminal/>} style="p-2 text-gray-500 border-none text-customGray-300 rounded-full hover:text-gray-900 hover:bg-gray-100"/> */}
        {/* {
                    showMic &&
                    <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100" onClick={toggleRecord}>
                        <span>
                            {
                                isRecording?
                                <FaStop size={19}/>:
                                <FaMicrophone size={19}/>
                            }
                        </span>
                        <span className="sr-only">Voice message</span>
                    </button>
                } */}
      </div>
    </form>
  );
};
