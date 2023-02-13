import React from 'react';
import RoomUnits from '../roomUnits/roomUnits';
import {roomsData} from '../../data/rooms';

function RoomTypes() {
  const roomLists = roomsData.map((rooms, index) => (
    <li className="sm:grid-rows-3 mb-6" key={index}>
      <RoomUnits name={rooms.title} path={rooms.path} />
    </li>
  ));
  return <div className="grid md:grid-cols-3 pb-5">{roomLists}</div>;
}

export default RoomTypes;
