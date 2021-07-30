import React from 'react';
import ContinueSVG from './ContinueSVG.js';

const Continue = () => {
  return (
    <div className="md:hidden">
      <div style={{boxShadow: "2px 2px 10px white"}} className="fixed z-40 bottom-10 right-14 w-32 h-10 px-3 py-2 bg-green-500 rounded-lg flex justify-center items-center text-white text-lg">
        Reserve Slot
      </div>
      <div style={{boxShadow: "2px 2px 10px white"}} className="fixed z-40 bottom-10 right-4 w-10 h-10 rounded-full bg-green-500 z-20 flex justify-center items-center">
        <ContinueSVG />
      </div>
    </div>
  );
};

export default Continue;