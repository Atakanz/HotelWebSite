import React from 'react';
import {NavLink} from 'react-router-dom';

const SubMenu = ({item}) => {
  return (
    <>
      <NavLink to={item.path}>
        <div className="sidebar-title">
          <p className="text-white">{item.title}</p>
        </div>
      </NavLink>
    </>
  );
};

export default SubMenu;
