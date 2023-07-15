import React from 'react';
import * as Fa from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex bg-sky-600 w-full grid min-[280px]:grid-cols-2 md:grid-cols-3 py-8 items-center">
      <div className="flex flex-col items-center m-auto justify-center">
        <div className="flex flex-row items-center justify-center">
          <Fa.FaPhone className="text-orange-500 mr-3" size={25} />
          <p className="text-white">444AAAA</p>
        </div>
        <div className="flex flex-row mt-3 items-center">
          <Fa.FaMailBulk className="text-orange-500 mr-3" size={25} />
          <p className="text-white">info@holiday.com</p>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <div>
            <Fa.FaInstagram className="text-orange-500" size={25} />
          </div>
          <div>
            <Fa.FaLinkedin className="text-orange-500 mx-3" size={25} />
          </div>
          <div>
            <Fa.FaTwitter className="text-orange-500" size={25} />
          </div>
        </div>
      </div>
      <div className="min-[280px]:hidden md:block">
        <p className="text-justify text-white">
          Lorem ipsum dolor sit amet. Qui rerum quos est voluptas voluptatem aut
          galisum dignissimos. Hic accusantium explicabo sed unde cupiditate ea
          sint totam sit molestiae consequatur et optio quas cum quos eius aut
          consequatur itaque. Qui doloribus dolore sit explicabo impedit aut
          molestiae voluptatibus!
        </p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-center">Copyright © 2023 Holiday</p>
        <div className="flex flex-row mt-3">
          <img
            src="https://img.icons8.com/color/48/000000/bank-card-back-side.png"
            width={25}
            height={25}
          />
          <img
            src="https://img.icons8.com/color/48/000000/mastercard.png"
            width={25}
            height={25}
            className="mx-3"
          />
          <img
            src="https://img.icons8.com/color/48/000000/paypal.png"
            width={25}
            height={25}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
