import React from 'react';
import BookingForm from '../../components/bookingForm/bookingForm';
import HotelListSection from '../../components/hotelsListSection/hotelListSection';

const HotelList = () => {
  return (
    <>
      <div>
        <div
          className="w-full min-[200]:h-[400px] h-[400px] bg-cover min-h-[150px]"
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
