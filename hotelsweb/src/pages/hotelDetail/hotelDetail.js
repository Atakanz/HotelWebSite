import React from 'react';
import {useLocation} from 'react-router-dom';
import HotelGallery from '../../components/slide/hotelGallerySlider';
import * as Fa from 'react-icons/fa';

const HotelDetail = () => {
  const location = useLocation();
  const {state} = location;
  const hotel = state?.from;

  if (!hotel) {
    // Handle the case when hotel data is not available
    return null;
  }

  const stars = [...Array(hotel.numberOfStars)].map((line, i) => (
    <div key={i}>
      <Fa.FaStar size={10} className="text-orange-600" />
    </div>
  ));

  const qualifications = hotel.advantages.map((item, i) => (
    <div className="my-3 mx-1 flex justify-center" key={i}>
      <text className="text-base flex justify-center items-center border border-orange-600 rounded-xl p-2 min-w-full text-center">
        {item}
      </text>
    </div>
  ));

  return (
    <>
      <div className="grid lg:grid-cols-2 p-3 sm:grid-cols-1">
        <div className="rounded-2xl justify-center flex">
          <img
            className="bg-cover rounded-2xl"
            src={hotel.mainPhoto}
            alt="Hotel"
          />
        </div>
        <div className="flex flex-col p-4">
          <text className="font-bold text-2xl mb-2">{hotel.name}</text>
          <div className="flex flex-row mb-2">{stars}</div>
          <text className="text-base mb-3">{hotel.city}</text>
          <text className="text-base mb-3">{hotel.address1}</text>
          <text className="text-base mb-3 text-justify">
            {hotel.shortDescription}
          </text>
          <div className="flex flex-row grid lg:grid-cols-3 md:grid-cols-2">
            {qualifications}
          </div>
          <text
            className={`font-bold mt-3 ${
              hotel.discounted ? 'line-through text-sm' : 'text-lg'
            }`}>
            {hotel.price}
          </text>
          {hotel.discounted && (
            <text className="font-bold text-lg text-orange-600">
              {hotel.discounted}
            </text>
          )}
          <div className="flex justify-center mt-6">
            <button className="defaultButton rounded-xl">REZERVASYON</button>
          </div>
        </div>
        <div className="mb-8 mt-5 lg:col-span-2">
          <p className="flex justify-center text-4xl font-bold mb-5">Galeri</p>
          <div className="flex items-center justify-center">
            <HotelGallery data={hotel.gallery} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetail;
