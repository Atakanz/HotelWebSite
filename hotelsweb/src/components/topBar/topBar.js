import React, {useEffect, useState} from 'react';
import topBarData from './topBarData';
import SubMenu from '../subMenu/subMenu';
import Logo from '../../assets/brand-logo.png';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenu(false);
    }
    if (window.innerWidth <= 768) {
      setIsMenu(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="md:h-24 bg-sky-800 flex min-[200px]:items-center md:overflow-hidden relative">
      <div className="flex w-full pl-2 items-center">
        <div className="flex justify-between items-center w-full px-3">
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
          {isMenu && (
            <div
              className={`${
                !isMenuOpen && isMenu ? 'opacity-0 -translate-y-6' : ''
              } duration-300 mx-auto w-full top-[96px] absolute bottom-0 left-0 justify-center`}>
              {topBarData.map((item, index) => (
                <SubMenu item={item} key={index} open={isMenuOpen} />
              ))}
            </div>
          )}
          <img
            src={Logo}
            alt="Brand Logo"
            className="w-12 h-24 md:w-16 md:h-32"
          />
        </div>
        <div className="hidden md:flex w-full md:justify-evenly">
          {topBarData.map((item, index) => (
            <SubMenu item={item} key={index} open={isMenuOpen} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
