import React, {useEffect, useState} from 'react';
import topBarData from './topBarData';
import SubMenu from '../subMenu/subMenu';
import Logo from '../../assets/brand-logo.png';
import {useLocation} from 'react-router-dom';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {pathname} = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div>
      <div
        className={`${
          isMenuOpen ? '' : ''
        } md:py-4 bg-sky-600 flex md:overflow-hidden min-[250px]:py-2`}>
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
            <img
              src={Logo}
              alt="Brand Logo"
              className="w-[70px] h-[80px] md:w-[96px] md:h-[106px] ml-48"
            />
          </div>

          <div className="hidden md:flex w-full md:justify-evenly">
            {topBarData.map((item, index) => (
              <SubMenu item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <ul
        className={`${
          isMenuOpen ? 'h-60' : 'h-0 overflow-hidden opacity-0'
        } transition-all ease-in-out duration-300 w-full`}>
        {topBarData.map((item, index) => (
          <li className="md:ml-8 md:my-0 my-7">
            <a
              href={item.path}
              className="text-gray-800 hover:text-gray-400 duration-500">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;
