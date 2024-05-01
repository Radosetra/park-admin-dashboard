import { useEffect, useState } from 'react';
import MessageCard from '../card/message.card';
import { ContactList } from '../../_type/contact.dto.ts';
import { useFetchRecentPendingContact } from '../../hooks/overview.hooks.ts';
import { useNavigate } from 'react-router-dom';

const ListRecentCardMessage = () => {
  const [messages, setMessages] = useState<ContactList[]>()
  const {data, isSuccess} = useFetchRecentPendingContact()
  const navigate = useNavigate()

  useEffect(() => {
    setMessages(data?.data)
  }, [data, isSuccess]);


  return(
    <div
      className="flex flex-col rounded-xl border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 gap-2.5"
      onClick={()=>navigate("message")}
    >
      <div className={"pt-1 pb-4"}>
        <h1 className={"text-gray-900 text-2xl font-semibold"}>Most recent pending message</h1>
      </div>
      <div className="w-full h-[0.5px] bg-gray"></div>
      <div className="flex flex-col gap-2">
        {
          messages?.map((message, key) => (
            <MessageCard
              key={key}
              message={message}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ListRecentCardMessage