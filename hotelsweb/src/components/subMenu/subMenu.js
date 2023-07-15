import React from 'react';
import {NavLink} from 'react-router-dom';

const SubMenu = ({item}) => {
  return (
    <>
      <NavLink to={item.path}>
        <div className="sidebar-title flex min-[250px]:py-6 min-[250px]:bg-blue-50 md:bg-transparent min-[250px]:border md:border-none min-[250px]:border-blue-100 min-[250px]:justify-center md:justify-none">
          <p className="min-[250px]:text-stone-700 md:text-white">
            {item.title}
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default SubMenu;
