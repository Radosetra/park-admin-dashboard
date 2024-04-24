import { useState } from 'react';
import ImageSlider from '../ImageSlider';
import { DynamicInput, FileInput } from '../input';
import { FaImage } from 'react-icons/fa';
import {
  isActivityChecker,
  isLandscapeChecker,
  isSpecieChecker,
} from '../../utils/typeUtils';
import ModalBase from './ModalBase';
import { LandscapeDto } from '../../_type/landscape.dto.ts';
import { ActivityDto } from '../../_type/activity.dto.ts';
import { SpeciesDto } from '../../_type/species.dto.ts';

interface ModalItemViewProps {
  item: SpeciesDto | ActivityDto | LandscapeDto;
  setIsOpen: (value: boolean) => void;
}

export default function ModalItemView({ item, setIsOpen }: ModalItemViewProps) {
  const [isEditing, setIsEditing] = useState(false);

  const itemName = (item: SpeciesDto | ActivityDto | LandscapeDto): string => {
    let itemName = '';
    if (isSpecieChecker(item)) {
      itemName = item.specie_name;
    } else if (isActivityChecker(item)) {
      itemName = item.activity_name;
    } else if (isLandscapeChecker(item)) {
      itemName = item.landscape_name;
    }

    return itemName;
  };

  const itemDescription = (
    item: SpeciesDto | ActivityDto | LandscapeDto,
  ): string => {
    let itemDescri = '';
    if (isSpecieChecker(item)) {
      itemDescri = item.specie_description;
    } else if (isActivityChecker(item)) {
      itemDescri = item.activity_description;
    } else if (isLandscapeChecker(item)) {
      itemDescri = item.landscape_description;
    }

    return itemDescri;
  };

  return (
    <ModalBase 
      name={itemName(item)} 
      setIsOpen={setIsOpen}
      style='w-[40rem]'
    >
      <div className="flex flex-col gap-2.5">
        {/*body*/}

        {/* Image slider */}
        {item.pictures?.length !== 0 && (
          <div className="flex-auto">
            {isEditing ? (
              <FileInput
                previewed="after"
                label="Input file"
                icon={<FaImage />}
                style="border-dashed h-[4.5rem]"
              />
            ) : (
              <ImageSlider height="h-[17rem]" images={item.pictures!} />
            )}
          </div>
        )}

        {/* Content */}

        {isLandscapeChecker(item) &&(
          <div className="flex">
          <div className="flex flex-col w-full">
            <h2 className="text-black text-lg font-medium py-2">Type</h2>
            {isEditing ? (
                <DynamicInput
                label="Desciption"
                content={item.type}
                type={'text'}
                size="medium"
              />
            ) : (
              <p className="">{item.type}</p>
            )}
          </div>
        </div>
        )
        }

        <div className="flex">
          <div className="flex flex-col w-full">
            <h2 className="text-black text-lg font-medium py-2">Description</h2>
            {isEditing ? (
                <DynamicInput
                label="Desciption"
                content={itemDescription(item)}
                type={'text'}
                size="medium"
              />
            ) : (
              <p className="">{itemDescription(item)}</p>
            )}
          </div>
        </div>

        {/*footer*/}
        <div className="flex items-center justify-end gap-5 py-3 ">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            {!isEditing ? 'Edit' : 'Save'}
          </button>

          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            {!isEditing ? 'Remove' : 'Cancel'}
          </button>
        </div>
      </div>
    </ModalBase>
  );
}
