import React, { useEffect, useState } from 'react';

import LeftArrow from '@/images/svg/arrow-left.svg';
import RightArrow from '@/images/svg/arrow-right.svg';
import { FilePreview } from './media.preview';

type FileSliderPreviewProps = {
  files: File[];
  removeFile: (param: number) => void;
};

const FileSlider = (props: FileSliderPreviewProps) => {
  const { files, removeFile } = props;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [displayBtn, setDisplayBtn] = useState(false);
  const slidesCount = Math.ceil(files.length / 3);

  const handleSlideChange = (direction: 'prev' | 'next') => {
    const newSlideIndex =
      direction === 'prev' ? currentSlideIndex - 1 : currentSlideIndex + 1;

    // Handle out-of-bounds cases
    if (newSlideIndex < 0) {
      setCurrentSlideIndex(slidesCount - 1); // Go to last slide on prev
    } else if (newSlideIndex >= slidesCount) {
      setCurrentSlideIndex(0); // Go to first slide on next
    } else {
      setCurrentSlideIndex(newSlideIndex);
    }
  };

  useEffect(() => {
    if (slidesCount > 3) {
      setDisplayBtn(true);
    }
  }, [files]);
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out gap-1`}
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
      >
        {files!.map((file, index) => (
          <FilePreview
            file={file}
            index={index}
            removeFile={() => removeFile(index)}
            key={index}
            style="shrink-0 w-[33%] rounded-lg overflow-hidden"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 px-4 py-2 rounded shadow"
        onClick={() => handleSlideChange('prev')}
      >
        <img
          src={LeftArrow}
          alt="Left arrow"
          className="h-8 rounded-2xl bg-white dark:bg-white opacity-40"
        />
        {/* <LeftArrow style={{ fill: "white" }} className="h-8"/> */}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 px-4 py-2 rounded shadow"
        onClick={() => handleSlideChange('next')}
      >
        <img
          src={RightArrow}
          alt="Right arrow"
          className="h-8 rounded-2xl bg-white opacity-40"
        />
      </button>
    </div>
  );
};

export default FileSlider;
