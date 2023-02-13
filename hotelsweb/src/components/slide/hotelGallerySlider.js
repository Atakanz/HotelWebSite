import React from 'react';
import Carousel from '../carousel/carousel';

const HotelGallery = props => {
  const images = props.data;
  return (
    <div className="max-[768px]:w-full lg:w-1/2 h-full">
      <Carousel data={images}>
        {images.map(i => (
          <img src={i.path} className="object-cover" />
        ))}
      </Carousel>
    </div>
  );
};

export default HotelGallery;
