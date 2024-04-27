import { FaPaperPlane } from 'react-icons/fa6';
import { ChangeEvent, useEffect, useState } from 'react';
import { IconButton } from '../../../button';
import { TextArea } from './textarea.input';
import { useAnswerMessage } from '../../../../hooks/contact.hooks.ts';
import { ContactResponseDto } from '../../../../_type/contact.dto.ts';

type ChatRoomInputProps = {
  send?: () => void;
  id?: string;
};
export const ChatRoomInput = (props: ChatRoomInputProps) => {
  const { id="" } = props;
  const [message, setMessage] = useState<string>('');
  // const [showMic, setShowMic] = useState<boolean>(true)

  const {mutate:sendMessage, isSuccess, isError} = useAnswerMessage(id)

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = ()=>{
      if (message !==""){
        const messageInput:ContactResponseDto = {
          response:message
        }
        sendMessage(messageInput)
      }
  }
  useEffect(() => {
    if (isSuccess){
      alert("Success: ")
    }
    if (isError){
      alert("Error")
    }
  }, [isSuccess, isError]);

  return (
    <form className="w-full h-full flex bg-white justify-between">
      <div className="space-x-2 w-full h-full rounded-lg bg-gray-50 ">
        <div className="flex flex-row h-full justify-between items-start w-full gap-2">
          <TextArea
            onChanged={handleMessageChange}
            value={message}
            size="large"
            placeholder='Your response'
            style='w-[70%]'
          />
          <IconButton
            onClick={handleSubmit}
            icon={<FaPaperPlane />}
            variant="secondary"
            size="large"
          />
        </div>
      </div>
    </form>
  );
};
