import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-8 ">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Amrit Gurung. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;