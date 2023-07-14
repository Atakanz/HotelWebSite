import React, {useState} from 'react';
import topBarData from './topBarData';
import SubMenu from '../subMenu/subMenu';
import Logo from '../../assets/brand-logo.png';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:h-24 bg-sky-800 flex md:items-center min-[280px]:items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full px-2">
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && (
            <div className="md:hidden">
              {topBarData.map((item, index) => (
                <SubMenu item={item} key={index} />
              ))}
            </div>
          )}
          <img
            src={Logo}
            alt="Brand Logo"
            className="w-24 h-24 md:w-36 md:h-36"
          />
        </div>
        <div className="hidden md:flex w-full md:justify-evenly">
          {topBarData.map((item, index) => (
            <SubMenu item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
