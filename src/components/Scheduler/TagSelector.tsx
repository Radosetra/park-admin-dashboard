import { CreateTagDto, TagDto, TagSelected } from '../../_type/event.dto';
import { useEffect, useState } from 'react';
import { TagPreview } from './TagPreview';
import { Button } from '../button/button';
import { FaPlus } from 'react-icons/fa';
import { useCreateTag, useFetchTags } from '../../hooks/tag.hooks';
import { InputField } from '../input/components/input/input';
interface TagSelectorProps {
  // list des tags choisis pour un evenement
  tags?: TagDto[];
  state: 'create' | 'edit';
  setTags: (parma: TagDto[]) => void;
}

export const TagSelector = (props: TagSelectorProps) => {
  const { tags, setTags, state } = props;

  const [isEditTag, setIsEditTag] = useState(false);

  // for creating new tag
  const [editTag, setEditTag] = useState("");

  const [tagsFromBackend, setTagsFromBackend] = useState<TagDto[]>();

  const [selectedTags, setSelectedTags] = useState<TagSelected[]>();

  const { data, isSuccess, isLoading, error } = useFetchTags();

  const {
    mutate: createTag,
    isSuccess: isCreateSuccess,
    data: dataResp,
    isError: isCreateError,
  } = useCreateTag();

  useEffect(() => {
    if (isLoading) {
      console.log('Loading data tags...');
    }

    if (error) {
      console.error('Error fetching data:', error);
    }

    if (isSuccess) {
      setTagsFromBackend(data?.data);
      console.log('DATA response tag', data?.data);

      console.log("Tag selector current tags ", tags);
      

      console.log('Data form back ', tagsFromBackend);
    }
  }, [data, isSuccess, isLoading, error]);

  useEffect(() => {
    if (state === 'create' && tagsFromBackend !== undefined) {
      const initialSelectedTags = tagsFromBackend?.map((tag) => ({
        ...tag,
        tag_selected: false,
      }));
      setSelectedTags(initialSelectedTags!);

      console.log('Selected Tag ', selectedTags);
    } else if (state === 'edit' && isSuccess) {
      // merge to array : array of tag of the event == true else false
      const initialSelectedTags = combineTags(tagsFromBackend!, tags!);
      setSelectedTags(initialSelectedTags!);
    }
  }, [tagsFromBackend]);

  useEffect(() => {
    // only if selectedTag is not null
    if (selectedTags !== undefined) {
      // tag here only for selected tag
      const tmpTags = selectedTags!
        .filter((tag) => tag.tag_selected)
        .map((tag) => ({
          tag_id: tag.tag_id,
          tag_name: tag.tag_name,
        }));
      setTags(tmpTags);
    }
  }, [selectedTags]);

  useEffect(() => {
    if (isCreateSuccess) {
      console.log('Create Tag');
    }

    if (isCreateError) {
      console.log('Error Tag ' + dataResp);
    }
  }, [isCreateSuccess, isCreateError]);

  // merging tag for create
  const combineTags = (tag1: TagDto[], tag2: TagDto[]) => {
    const combineTags: TagSelected[] = [];

    for (const tag of tag1) {
      const isSelected = tag2.some((t2) => t2.tag_id === tag.tag_id);
      combineTags.push({ ...tag, tag_selected: isSelected });
    }

    return combineTags;
  };

  const submitTags = () => {
    const tmpTag = {
      tag_name: editTag
    }
    createTag(tmpTag);
    setEditTag('');
  };

  return (
    <div className="flex justify-between items-center gap-2 w-full">
      {!isEditTag ? (
        <>
          <div className="w-[70%] flex items-center">
            {isSuccess && (
              <TagPreview tags={selectedTags!} setTags={setSelectedTags} />
            )}
          </div>

          <div className="w-[25%] h-[2.5rem]">
            <Button
              type="button"
              onClick={() => setIsEditTag(true)}
              label="Create"
              variant="primary"
              leftIcon={<FaPlus />}
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-[70%] flex items-center justify-center">
            <InputField
              name="tag"
              onChanged={(e) => setEditTag(e.target.value)}
              placeholder="Tag name"
              type="text"
              size="large"
              value={editTag}
            />
          </div>

          <div className="w-[25%] h-[2.5rem]">
            <Button
              type="button"
              onClick={() => {
                submitTags();
                setIsEditTag(false);
              }}
              label="Add"
              variant="primary"
            />
          </div>
        </>
      )}
    </div>
  );
};
