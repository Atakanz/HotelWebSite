import React from 'react';
import HotelUnits from '../hotelUnits/hotelUnits';
import {hotels} from '../../data/hotels';

function HotelListSection() {
  const hotelLists = hotels.map((hotels, index) => (
    <li key={index}>
      <HotelUnits hotel={hotels} />
    </li>
  ));
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[280px]:grid-col-1 ">
      {hotelLists}
    </div>
  );
}

export default HotelListSection;
