import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import ListCardMessage from "../../components/List/card.message.list";
import DefaultLayout from "../../layout/DefaultLayout";

const Message = () => {
  return(
    <DefaultLayout>
      <Breadcrumb pageName="Message"/>
      <ListCardMessage />
    </DefaultLayout>
  );
}

export default Message