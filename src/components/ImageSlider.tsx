import React, { useState } from "react";

import LeftArrow from "../images/svg/arrow-left.svg";
import RightArrow from "../images/svg/arrow-right.svg";

interface ImageSliderProps {
    height: string
    images: string[]
}

const ImageSlider = ({ height, images }:ImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${height}`}
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`carousel-${index}`} className="w-full h-full shrink-0 object-cover rounded-lg" />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 px-4 py-2 rounded shadow"
        onClick={prevImage}
      >
        <img src={LeftArrow} alt="Left arrow" className="h-8 rounded-2xl bg-white dark:bg-white opacity-40"/>
        {/* <LeftArrow style={{ fill: "white" }} className="h-8"/> */}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 px-4 py-2 rounded shadow"
        onClick={nextImage}
      >
        <img src={RightArrow} alt="Right arrow" className="h-8 rounded-2xl bg-white opacity-40"/>
      </button>
    </div>
  );
};

export default ImageSlider;
