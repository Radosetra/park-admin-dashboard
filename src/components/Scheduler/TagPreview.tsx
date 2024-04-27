import { cn } from './../../../@/lib/utils';
import { Button as ButtonShadCn } from './../../../@/components/ui/button';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './../../../@/components/ui/popover';
import { TagSelected,  } from '../../_type/event.dto';
import { useEffect, useState } from 'react';

interface TagPreviewProps {
  tags: TagSelected[];
  setTags: (parma: TagSelected[]) => void;
}

export const TagPreview = (props: TagPreviewProps) => {
  const { tags, setTags } = props;

  // const [selectedTags, setSelectedTags] = useState<TagSelected[]>([]);

  useEffect(() => {
    // console.log("Tag Preview Tags ", tags);
    // setSelectedTags(tags)
    
    console.log("Tag Preview selected", tags);
    
  }, []);

  const handleTagSelect = (tagId: string) => {
    setTags((prevSelectedTags) => {
      const foundTagIndex = prevSelectedTags?.findIndex(
        (tag) => tag.tag_id === tagId,
      );

      if (foundTagIndex !== -1) {
        // Create a copy to avoid mutation
        const newSelectedTags = [...prevSelectedTags];

        // Toggle the tag_selected property
        newSelectedTags[foundTagIndex].tag_selected =
          !prevSelectedTags[foundTagIndex].tag_selected;

        return newSelectedTags;
      } else {
        console.log('Tag with ID', tagId, 'not found in selectedTags');
        return prevSelectedTags; // Return original state if not found
      }
    });

    // handleTagsUpdate();
  };

  // const handleTagsUpdate = () => {
  //   const tmpTag: TagSelected[] = selectedTags.filter((tag) => tag.tag_selected);
  //   setTags(tmpTag);
  // };
  return (
    <div className={cn('grid gap-2 w-full')}>
      <Popover>
        <PopoverTrigger asChild>
          <ButtonShadCn
            id="tag-preview"
            variant={'outline'}
            placeholder="Select Tags"
          >
            {/* if no tag selected => display select tag + icon
              else tag preview
          */}

            <div className="flex items-center justify-arround w-full h-full gap-2 py-1 flex-wrap">
              {/* tag items */}

              {(tags) && tags
                .filter((tag) => tag.tag_selected)
                .map((tag) => (
                  <div
                    key={tag.tag_id}
                    className="flex justify-between items-center rounded bg-white border border-stroke px-1"
                  >
                    {/* text */}
                    <span className="text-sm">{tag.tag_name}</span>
                    <div
                      className="flex items-center justify-center pl-2 text-lg font-bold cursor-pointer"
                      onClick={() => handleTagSelect(tag.tag_id)}
                    >
                      x
                    </div>
                  </div>
                ))}
            </div>
          </ButtonShadCn>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          {/* List tag */}
          <div className="flex flex-col w-[5rem] rounded">
            {(tags) && tags
              .filter((tag) => !tag.tag_selected)
              .map((tag) => (
                <span
                  key={tag.tag_id}
                  className="text-sm px-4 py-2 border-b border-stroke cursor-pointer"
                  onClick={() => handleTagSelect(tag.tag_id)}
                >
                  {tag.tag_name}
                </span>
              ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
