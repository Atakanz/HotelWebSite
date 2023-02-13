import React from 'react';

const RoomUnits = ({name, path}) => {
  return (
    <>
      <img src={path} className="rounded-2xl bg-contain w-full h-full" />
      <div className="flex justify-center text-2xl mt-3">{name}</div>
    </>
  );
};

export default RoomUnits;
