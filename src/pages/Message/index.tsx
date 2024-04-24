import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import ListCardMessage from "../../components/List/card.message.list";
import DefaultLayout from "../../layout/DefaultLayout";
import { messages } from "../../utils/constant/message.data";

const Message = () => {
  return(
    <DefaultLayout>
      <Breadcrumb pageName="Message"/>

      <ListCardMessage 
        messages={messages}
      />
    </DefaultLayout>
  );
}

export default Message