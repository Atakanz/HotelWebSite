import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

const Slider = props => {
  const images = props.data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const decreaseIndex = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const increaseIndex = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${images[currentIndex].path})`,
        }}
        className="w-full h-[625px] bg-center bg-cover duration-600 flex  items-end">
        <div className="bg-gray-900 opacity-60 hover:opacity-80 w-full">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl text-white mr-5">
              <BsChevronCompactLeft
                size={50}
                onClick={decreaseIndex}
                className="hover:text-orange-600 cursor-pointer"
              />
            </div>
            <div className="text-white text-2xl">
              {images[currentIndex].title && (
                <p>{images[currentIndex].title}</p>
              )}
            </div>
            <div className="text-2xl text-white ml-5">
              <BsChevronCompactRight
                size={50}
                onClick={increaseIndex}
                className="hover:text-orange-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
