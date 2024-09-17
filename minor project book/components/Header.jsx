
import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="flex gap-7 text-4xl font-semibold text-black">
      <div className="flex shrink-0 rounded-full bg-zinc-300 h-[84px] w-[84px]" />
      <h1 className="flex-auto my-auto">{title}</h1>
    </header>
  );
};

export default Header;