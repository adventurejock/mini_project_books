import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-start w-full text-center max-w-[1124px] max-md:max-w-full">
      <div className="flex gap-10 self-start text-4xl font-semibold text-black">
        <div className="flex shrink-0 rounded-full bg-zinc-300 h-[84px] w-[84px]" />
        <div className="flex-auto self-end mt-12 max-md:mt-10">
          Book Stock Pro
          <br />
          <br />
        </div>
      </div>
      <nav className="flex gap-10 self-end mt-14 text-3xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        <a href="#home">Home</a>
        <a href="#campaign" className="basis-auto">Campaign</a>
        <a href="#report">Report</a>
      </nav>
    </header>
  );
};

export default Header;