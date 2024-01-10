import React from 'react';
import ContinueSVG from './ContinueSVG.js';
import './BookNow.css';

const Continue = () => {
  return (
    <div className="md:hidden">
      <div className="fixed reserve-btn z-40 bottom-10 right-16 w-40 h-12 px-3 pt-2  bg-green-500 rounded-lg flex justify-center items-center text-white text-lg">
        Reserve Slot
      </div>
      <div className="fixed reserve-btn z-40 bottom-10 right-4 w-11 h-12 px-3 pt-2 rounded-full bg-green-500 flex justify-center items-center text-center pl-1">
        <ContinueSVG />
      </div>
    </div>
  );
};

export default Continue;