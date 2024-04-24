import { useEffect, useState } from "react"
import { MessageType } from "../../types/messageType"
import MessageCard from "../card/message.card"
import ModalMessageView from "../Modal/ModalMessageView"

interface ListCardMessageProps {
  messages: MessageType[]
}

const ListCardMessage = (props: ListCardMessageProps) => {
  const {messages} = props

  const [message, setMessage] = useState<MessageType>({
    sender: '',
    date: '',
    status: "Pending",
    content: ''
  })

  const [messageData, setMessageData] = useState<MessageType[]>(messages.filter(message => message.status === "Responded"));
  

  const [trigger, setTrigger] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => {
    setTrigger(!trigger)
    const newStatus = trigger ? "Pending" : "Responded"; // Determine the new status based on the toggle
    setMessageData(messages.filter(message => message.status !== newStatus));
  }

  return(
    <div className="flex flex-col rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 gap-2.5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-black text-[1.2rem] font-bold">Inbox</h3>
        <div className="flex items-center justify-center bg-gray rounded-lg p-2 ">
          <div 
            className={`text-[0.75rem] text-black px-3 py-1 rounded-xl cursor-pointer ${!trigger && "bg-white"}`}
            onClick={()=> handleTrigger()}
          >Responded</div>
          <div 
            className={`text-[0.75rem] text-black px-3 py-1 rounded-xl cursor-pointer ${trigger && "bg-white"}`}
            onClick={()=> handleTrigger()}
          >Pending</div>
        </div>
      </div>

      <div className="w-full h-[0.5px] bg-gray"></div>

      <div className="flex flex-col gap-2">
        {
          messageData?.map((message, key) => (
            <MessageCard 
              key={key}
              message={message}
              setIsOpen={setIsOpen}
              setCurrentMessage={setMessage}
            />
          ))
        }
      </div>

      {
        isOpen && 
        <ModalMessageView 
          message={message}
          setIsOpen={setIsOpen}
        />
      }
      
    </div>
  );
}

export default ListCardMessage