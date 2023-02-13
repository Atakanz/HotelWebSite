import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import TopBar from './components/topBar/topBar';
import Home from './pages/home/home';
import HotelDetail from './pages/hotelDetail/hotelDetail';
import HotelList from './pages/hotelList/hotelList.js';
import Contacts from './pages/contacts/contacts.js';
import Footer from './components/footer/footer';
import './index.css';

const AppLayout = () => (
  <>
    <TopBar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'hotellist',
        element: <HotelList />,
      },
      {
        path: 'hoteldetail',
        element: <HotelDetail />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
