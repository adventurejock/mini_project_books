import React from 'react';
import Header from './Header';
import BookList from './BookList';
import ActionButtons from './ActionButtons';

const BookStockPro = () => {
  return (
    <div className="flex overflow-hidden flex-col items-start px-6 pt-8 pb-16 bg-amber-200 max-md:px-5">
      <Header />
      <div className="flex shrink-0 self-stretch mt-6 h-1.5 bg-black max-md:max-w-full" />
      <h1 className="self-center mt-9 text-6xl font-semibold text-center text-amber-900 max-md:text-4xl">
        Confirmation
      </h1>
      <h2 className="mt-28 ml-36 text-5xl font-bold text-black max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
        Summary
      </h2>
      <BookList />
      <div className="self-center mt-8 ml-14 text-4xl text-black">
        Total Books: 25
      </div>
      <ActionButtons />
    </div>
  );
};

export default BookStockPro;