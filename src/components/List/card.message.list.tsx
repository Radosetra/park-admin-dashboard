import { useEffect, useState } from 'react';
import MessageCard from '../card/message.card';
import ModalMessageView from '../Modal/ModalMessageView';
import { ContactList, ContactStatus } from '../../_type/contact.dto.ts';
import { useFetchContactByStatus } from '../../hooks/contact.hooks.ts';


const ListCardMessage = () => {
  const [messages, setMessages] = useState<ContactList[]>()
  const [message, setMessage] = useState<ContactList>({
    user_email: '',
    contact_date: new Date(),
    contact_status: ContactStatus.PENDING,
    contact_content:""
  })
  const [statusTab, setStatusTab] = useState<ContactStatus>(ContactStatus.PENDING)
  const [trigger, setTrigger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {data, isSuccess} = useFetchContactByStatus(statusTab)

  useEffect(() => {
    setMessages(data?.data)
  }, [data, isSuccess]);
  const handleTrigger = (status:ContactStatus) => {
    setTrigger(!trigger)
    setStatusTab(status)
  }

  return(
    <div className="flex flex-col rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 gap-2.5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-black text-[1.2rem] font-bold">Inbox</h3>
        <div className="flex items-center justify-center bg-gray rounded-lg p-2 ">
          <div 
            className={`text-[0.75rem] text-black px-3 py-1 rounded-xl cursor-pointer ${trigger && "bg-white"}`}
            onClick={()=> handleTrigger(ContactStatus.ANSWERED)}
          >Responded</div>
          <div 
            className={`text-[0.75rem] text-black px-3 py-1 rounded-xl cursor-pointer ${!trigger && "bg-white"}`}
            onClick={()=> handleTrigger(ContactStatus.PENDING)}
          >Pending</div>
        </div>
      </div>

      <div className="w-full h-[0.5px] bg-gray"></div>

      <div className="flex flex-col gap-2">
        {
          messages?.map((message, key) => (
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
          status={statusTab}
          message={message}
          setIsOpen={setIsOpen}
        />
      }
      
    </div>
  );
}

export default ListCardMessage