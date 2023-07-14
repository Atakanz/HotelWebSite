import React from 'react';
import {NavLink} from 'react-router-dom';

const SubMenu = ({item}) => {
  return (
    <>
      <NavLink to={item.path}>
        <div className="sidebar-title relative">
          <p className="text-white">{item.title}</p>
          <div className="hover-animation"></div>
        </div>
      </NavLink>
    </>
  );
};

export default SubMenu;
