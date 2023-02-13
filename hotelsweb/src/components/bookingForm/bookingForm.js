import React, {useState} from 'react';
import {cities} from '../../data/cities';
import * as Fa from 'react-icons/fa';

const BookingForm = props => {
  const [city, setCity] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);

  const increaseAdult = () => {
    setAdult(adult + 1);
  };
  const increaseChild = () => {
    setChild(child + 1);
  };
  const decreaseAdult = () => {
    if (adult !== 0) {
      setAdult(adult - 1);
    }
  };
  const decreaseChild = () => {
    if (child !== 0) {
      setChild(child - 1);
    }
  };

  const selectCity = city => {
    return (
      <option>
        <p>{city.name}</p>
      </option>
    );
  };
  return (
    <>
      <div className="bookingForm">
        <div className="formUnit">
          <div>
            <label className="formDivider-${props.path}">Giriş Tarihi</label>
          </div>
          <input
            className="selectDate"
            type="date"
            name="checkInDate"
            onChange={setCheckInDate}
          />
        </div>
        <div className="formUnit">
          <div>
            <label className="formDivider">Çıkış Tarihi</label>
          </div>
          <input
            className="selectDate"
            type="date"
            name="checkOutDate"
            onChange={setCheckOutDate}
          />
        </div>
        <div className="formUnit">
          <div>
            <label className="formDivider">Şehir</label>
          </div>
          <select className="selectCity">{cities.map(selectCity)}</select>
        </div>
        <div className="formUnit">
          <label className="formDivider">Kişi sayısı</label>

          <div className="adultChildSelection">
            <div>
              <Fa.FaMinusSquare
                onClick={decreaseAdult}
                className="minusPlusButtons"
              />
            </div>
            <text className="mr-1 border border-stone-300 px-1">
              {adult} YETİŞKİN
            </text>
            <div>
              <Fa.FaPlusSquare
                onClick={increaseAdult}
                className="minusPlusButtons"
              />
            </div>
          </div>
          <div className="adultChildSelection mt-1">
            <Fa.FaMinusSquare
              onClick={decreaseChild}
              className="minusPlusButtons"
            />
            <text className="mr-1 border border-stone-300 px-1">
              {' '}
              {child} ÇOCUK
            </text>

            <Fa.FaPlusSquare
              onClick={increaseChild}
              className="minusPlusButtons"
            />
          </div>
        </div>
        <div className="flex min-[280px]:col-span-2 md:col-span-1 justify-center">
          <button className="defaultButton formButton">
            {<Fa.FaArrowRight className="sm:mr-2" />}
            Listele
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
