import React from 'react';
import * as Fa from 'react-icons/fa';

function ContactInfo() {
  return (
    <div className="flex flex-col px-5 items-center justify-center">
      <h2 className="mb-8">İLETİŞİM</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center">
          <Fa.FaPhone size={30} className="mr-5" />
          <p>444AAAA</p>
        </div>
        <div className="flex flex-row items-center">
          <Fa.FaMailBulk size={30} className="mr-5" />
          <p>info@holiday.com</p>
        </div>
        <div className="flex flex-row items-center">
          <Fa.FaInstagram size={30} className="mr-5" />
          <p>@holidaytour</p>
        </div>
        <div className="flex flex-row items-center">
          <Fa.FaLinkedin size={30} className="mr-5" />
          <p>/Holidaytour</p>
        </div>
        <div className="flex flex-row items-center">
          <Fa.FaTwitter size={30} className="mr-5" />
          <p>@Holidaytour</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
