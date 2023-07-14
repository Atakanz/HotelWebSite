import React from 'react';
import HotelUnits from '../hotelUnits/hotelUnits';
import {hotels} from '../../data/hotels';

function HotelListSection() {
  const hotelItems = hotels.map((hotel, index) => (
    <div key={index} className="col-span-1">
      <HotelUnits hotel={hotel} />
    </div>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
      {hotelItems}
    </div>
  );
}

export default HotelListSection;
