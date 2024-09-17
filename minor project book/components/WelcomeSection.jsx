jsx
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
        <div className="mt-7 text-4xl font-semibold text-center text-black border border-amber-900 border-solid max-md:mt-10 max-md:max-w-full">
          <h2 className="text-5xl text-amber-900">Welcome to BookStockPro!</h2>
          <p className="text-4xl">
            Manage your book inventory, track sales, monitor stock levels, and optimize your book sales effortlessly.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c89756f3f180cffd077872c286adbc0476afeab9a28f4b243535336b22881a28?placeholderIfAbsent=true&apiKey=a9c03e5a54cc4cac9f2ba6c60e9f6f3a" alt="Book inventory management illustration" className="object-contain grow w-full aspect-[1.4] max-md:mt-10 max-md:max-w-full" />
      </div>
    </section>
  );
};

export default WelcomeSection;