import React from 'react';
import logo from "/img/logo/logo-letters.svg";
import { FaSquareFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="w-full py-8 px-2 mt-auto">
      <div className="py-6 flex flex-col md:flex-row items-center justify-center md:justify-between text-center gap-y-6 gap-x-12">
        <img src={logo} alt="Logo DH Technology" className="w-60 mb-4 md:mb-0" />

        <div className="flex flex-row md:flex-row gap-x-4 md:gap-x-8">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram style={{ fontSize: '24px' }} />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok style={{ fontSize: '24px' }} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube style={{ fontSize: '24px' }} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaSquareFacebook style={{ fontSize: '24px' }} />
          </a>
        </div>

        <ul className="flex flex-col md:flex-row items-center gap-y-2 gap-x-8">
          <li style={{ cursor: 'pointer' }}>About Us</li>
          <li style={{ cursor: 'pointer' }}>License</li>
          <li style={{ cursor: 'pointer' }}>Contribute</li>
          <li style={{ cursor: 'pointer' }}>Contact Us</li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row justify-between border-t-2 border-red-600 mt-2 pt-2">
        <span className="mb-2 md:mb-0">© 2023 DH Technology All Rights Reserved</span>
        <span>Fake 123, Buenos Aires, Argentina.</span>
      </div>
    </footer>
  );
};

export default Footer;
