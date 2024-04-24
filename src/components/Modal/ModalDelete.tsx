import { EventType } from "../../types/event";
import ModalBase from "./ModalBase";

type ModalDeleteProps = {
  selectEvent: EventType;
  setIsOpen: (param: boolean) => void;
};

const ModalDelete = ({selectEvent, setIsOpen}: ModalDeleteProps) => {
  // console.log("Select event : "+selectEvent);
//   const [eventName, setEventName] = useState("");
  return (
    <ModalBase name="Confirmation" setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-2.5">

        <div className="">

        </div>

        <div className="flex items-center justify-end gap-5 mt-4">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {

              
              
              setIsOpen(false);
              // setIsOpen(false)
            }}
          >
            Save
          </button>

          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            {/* {!isEditing ? 'Remove' : 'Cancel'} */}
            Cancel
          </button>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalDelete;
