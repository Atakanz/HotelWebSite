import React from 'react';
import topBarData from './topBarData';
import SubMenu from '../subMenu/subMenu';

const TopBar = () => {
  return (
    <>
      <div className="md:h-24 sm:h-36 bg-sky-800 flex md:items-end min-[280px]:items-center">
        <div className="flex md:flex-row w-full md:justify-evenly min-[250px]:flex-col min-[250px]:items-center md:px-4 md:pb-2 min-[250px]:space-y-4 md:space-y-0 min-[250px]:space-y-4 py-4">
          {topBarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TopBar;
