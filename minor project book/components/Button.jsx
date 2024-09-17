
import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="px-12 pt-2 pb-4 rounded-xl border-black border-solid bg-zinc-300 border-[3px] max-md:px-5">
      {text}
    </button>
  );
};

export default Button;