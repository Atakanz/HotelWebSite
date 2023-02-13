import React from 'react';
import Slider from '../../components/slide/slider';
import BookingForm from '../../components/bookingForm/bookingForm';
import {slides} from '../../data/slideImages';
import RoomTypes from '../../components/roomTypes/roomTypes';

const Home = () => {
  return (
    <>
      <div className="sm:mx-auto">
        <Slider data={slides} />
        <BookingForm />
        <RoomTypes />
      </div>
    </>
  );
};

export default Home;
