
import React from 'react';
import Header from './Header';
import Button from './Button';
import WelcomeSection from './WelcomeSection';
import PartnerSection from './PartnerSection';
import Footer from './Footer';

const BookStockPro = () => {
  return (
    <div className="flex overflow-hidden flex-col py-5 bg-amber-200">
      <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full text-center max-w-[1347px] max-md:max-w-full">
          <Header title="Book Stock Pro" />
          <div className="flex gap-6 my-auto text-3xl font-bold text-black max-md:max-w-full">
            <Button text="Sign up" />
            <Button text="Login" />
          </div>
        </div>
        <div className="flex shrink-0 mt-5 h-1.5 bg-black max-md:max-w-full" />
        <main className="self-center mt-8 ml-2.5 w-full max-w-[1305px] max-md:max-w-full">
          <WelcomeSection />
        </main>
      </div>
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default BookStockPro;