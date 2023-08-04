# HotelWebSite

## Overview

This repository contains the source code for a Hotel Website built using React. It showcases various features and functionalities that are commonly found in hotel websites. The website is designed to be responsive, with a focus on providing a smooth user experience.

## Technology Stack

The project utilizes the following technologies and libraries:

- Testing Library: Used for testing components and ensuring their functionality.
- Tailwind CSS: Used for styling the components and creating a visually appealing design.
- React Browser Detector: Used for components which should be get different tailwind classes depending on browser type

## Key Features

- Responsive Design: The website is designed to adapt and display properly on different screen sizes and devices.
- Animations: Animated transitions are implemented on the navigation links to enhance the visual experience for users.
- Two Different Types of Photo Galleries: The website showcases two different styles of photo galleries for displaying hotel images.

## Notable Gains

- Auto Scroll to the Top of the Page: The website automatically scrolls to the top of the page whenever a navigation action is performed, ensuring a seamless user experience.

## Demo

You can visit the deployed version of the Hotel Website on [Netlify](https://hotelwebsitereact.netlify.app/).

## Example Data in `data/hotels.js`

The `data/hotels.js` file contains example data for hotel properties. Each hotel object includes details such as the hotel's name, address, location coordinates, short description, main photo, photo gallery, price, discounted price, star rating, and a list of advantages.

```javascript
{
  id: '0248058a-27e4-11e6-ace6-a9876eff01b3',
  type: 'hotel',
  name: 'Abant Doğa Köşkü Oteli',
  address1: 'Mehel Köyü Mevkii No:58, 14030 Merkez',
  city: 'Bolu',
  location: {
    latitude: 47.60985,
    longitude: -122.33475,
  },
  shortDescription: 'Lorem ipsum dolor sit amet...',
  mainPhoto: require('../assets/otels/abantDoğaKöşküOteli.jpeg'),
  gallery: [
    { path: require('../assets/facilities/tesis1.jpg') },
    { path: require('../assets/facilities/tesis2.jpg') },
    { path: require('../assets/facilities/tesis3.jpg') },
    { path: require('../assets/facilities/tesis4.jpg') },
    { path: require('../assets/facilities/tesis5.jpg') },
  ],
  price: '380₺',
  discounted: '320₺',
  numberOfStars: 3,
  advantages: [
    'Her şey dahil',
    'Yemek ve içki',
    'Çocuk havuzu',
    'Animasyon',
    'Oyun ve spor salonu',
  ],
}
```

This example demonstrates the structure of the data used for displaying hotel properties.

Feel free to explore the repository and the deployed website for more information.
