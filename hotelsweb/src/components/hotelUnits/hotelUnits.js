import React from 'react';
import {Link} from 'react-router-dom';
import * as Fa from 'react-icons/fa';

const HotelUnits = ({hotel}) => {
  const stars = [...Array(hotel.numberOfStars)].map(function (line, i) {
    return (
      <div key={i}>
        <Fa.FaStar size={10} className="text-orange-600" />
      </div>
    );
  });

  return (
    <Link to={hotel.id} state={{from: hotel}}>
      <div className="h-96 bg-sky-100 rounded-2xl">
        <div
          className="h-60 w-full rounded-t-2xl bg-cover"
          style={{
            backgroundImage: `url(${hotel.mainPhoto})`,
          }}
        />
        <div className="flex flex-col ml-2">
          <text className="font-bold text-lg">{hotel.name}</text>
          <div className="flex flex-row">{stars}</div>
          <text className="text-base">{hotel.city}</text>
          <text>{hotel.advantages[0]}</text>
          <text
            className={`font-bold  ${
              hotel.discounted ? 'line-through text-sm' : 'text-lg'
            }`}>
            {hotel.price}
          </text>
          <text className="font-bold text-lg text-orange-600">
            {hotel.discounted}
          </text>
        </div>
      </div>
    </Link>
  );
};

export default HotelUnits;
