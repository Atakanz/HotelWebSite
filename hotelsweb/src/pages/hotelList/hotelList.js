import React from 'react';
import BookingForm from '../../components/bookingForm/bookingForm';
import HotelListSection from '../../components/hotelsListSection/hotelListSection';

const HotelList = () => {
  return (
    <>
      <div>
        <div
          className="w-full h-[400px] bg-cover min-[250px]:hidden sm:block"
          style={{
            backgroundImage: `url(${require('../../assets/contents/happyFamily.jpg')})`,
          }}></div>
        <BookingForm />
        <HotelListSection />
      </div>
    </>
  );
};

export default HotelList;
