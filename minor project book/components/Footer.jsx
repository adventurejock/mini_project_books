import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-start px-6 mt-10 w-full text-3xl max-md:px-5 max-md:max-w-full">
      <div className="flex shrink-0 self-stretch h-1.5 bg-black max-md:max-w-full" />
      <nav>
        <h3 className="mt-4 ml-4 text-sky-500 max-md:ml-2.5">Useful Links</h3>
      </nav>
      <div className="mt-4 ml-4 text-black max-md:ml-2.5">Contact Us</div>
      <div className="mt-4 ml-4 text-black max-md:ml-2.5">
        Email: xyz@gmail.com
      </div>
    </footer>
  );
};

export default Footer;