import { FaImage } from 'react-icons/fa';
import { FileInput } from '../input/components/input/file.input';
import { InputField } from '../input/components/input/input';
import ModalBase from './ModalBase';

type ModalCreateItemProps = {
  item: 'specie' | 'activity' | 'landscape'
  specie?: 'animal' | 'vegetal' | 'landscape'
  setIsOpen: (param: boolean) => void;
};

const ModalCreateItem = (props: ModalCreateItemProps) => {
  const { item, specie, setIsOpen } = props;

  // const itemName = (item: string): string => {
  //   let title = '';
  //   switch(item){
  //     case 'specie':
  //       title = 
  //   }

  //   return itemName;
  // };
  return (
    <ModalBase
      name={`${item[0].toUpperCase() + item.slice(1)} Form`}
      setIsOpen={setIsOpen}
      style="p-4"
    >
      <div className="flex flex-col gap-2.5">
        <InputField
          name="name"
          onChanged={() => console.log('')}
          placeholder=""
          type="text"
          label="Name"
          size="large"
        />

        <InputField
          name="descri"
          onChanged={() => console.log('')}
          placeholder=""
          type="text"
          label="Description"
          size="large"
        />

        {
          (item === 'landscape') &&
            <InputField
            name="type"
            onChanged={() => console.log('')}
            placeholder=""
            type="text"
            label="Type"
            size="large"
          />
        }

        

        <FileInput
          previewed="after"
          label="Input file"
          icon={<FaImage />}
          style="border-dashed h-[4.5rem]"
        />

        <div className="flex items-center justify-end gap-5">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              setIsOpen(true);
              // setIsOpen(false)
            }}
          >
            {/* {!isEditing ? 'Edit' : 'Save'} */}
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

export default ModalCreateItem;
