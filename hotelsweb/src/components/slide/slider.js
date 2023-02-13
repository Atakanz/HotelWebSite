import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

const Slider = props => {
  const images = props.data;
  console.log('sa', images);
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
    <div className="max-w h-[625px] w-full m-auto relative group">
      <div
        style={{
          backgroundImage: `url(${images[currentIndex].path})`,
        }}
        className="w-full h-full bg-center bg-cover duration-600"></div>
      <div
        className={`flex justify-evenly items-center w-full  absolute text-2xl bottom-[0%] -translate-x-0 pl-4 pt-4 pb-4 rounded-b-2xl ${
          images[currentIndex].title
            ? 'bg-gray-900 opacity-60 hover:opacity-80'
            : ''
        }`}>
        <div className="absolute left-5 text-2xl rounded-full bg-black/20 text-white hover:text-orange-600 cursor-pointer">
          <BsChevronCompactLeft size={50} onClick={decreaseIndex} />
        </div>
        <div className="absolute right-5 text-2xl rounded-full bg-black/20 text-white hover:text-orange-600 cursor-pointer">
          <BsChevronCompactRight size={50} onClick={increaseIndex} />
        </div>
        <div>
          {images[currentIndex].title && (
            <p className="text-white">{images[currentIndex].title}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
