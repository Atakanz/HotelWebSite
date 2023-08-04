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
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
      {hotelItems}
    </div>
  );
}

export default HotelListSection;
