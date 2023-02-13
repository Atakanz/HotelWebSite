import React, {useEffect, useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

function Carousel({
  children: images,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
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
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(increaseIndex, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        {images}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={decreaseIndex}
          className="p-1 rounded-full shadow bg-white-80  text-black-800">
          <BsChevronCompactLeft size={40} className="hover:text-orange-600" />
        </button>
        <button
          onClick={increaseIndex}
          className="p-1 rounded-full shadow bg-white-80 text-black-800">
          <BsChevronCompactRight size={40} className="hover:text-orange-600" />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                currentIndex === i ? 'p-2' : 'bg-opacity-50'
              }`}></div>
          ))}
        </div>
        <div
          className={`flex justify-evenly items-center w-full absolute text-2xl bottom-[0%] -translate-x-0 pt-4 pb-4 rounded-b-2xl ${
            images[currentIndex].title
              ? 'bg-gray-900 opacity-60 hover:opacity-80'
              : ''
          }`}></div>
        <div>
          {images[currentIndex].title && (
            <p className="text-white">{images[currentIndex].title}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
