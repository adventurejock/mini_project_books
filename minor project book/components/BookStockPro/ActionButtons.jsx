import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-9 self-end mt-16 mr-16 max-w-full text-4xl font-semibold text-center text-white whitespace-nowrap w-[857px] max-md:mt-10 max-md:mr-2.5">
      <button className="grow px-16 py-5 bg-amber-900 border-2 border-amber-900 border-solid rounded-[30px] w-fit max-md:px-5">
        Cancel
      </button>
      <button className="grow px-16 py-5 bg-amber-900 border-2 border-amber-900 border-solid rounded-[30px] w-fit max-md:px-5">
        Confirm
      </button>
    </div>
  );
};

export default ActionButtons;