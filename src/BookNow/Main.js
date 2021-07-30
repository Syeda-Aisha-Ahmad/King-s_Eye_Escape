import React from 'react';
import BookNowSVG from './BookNowSVG.js';

const BookNow = () => {
  return (
    <div className="md:hidden">
      <div style={{boxShadow: "2px 2px 10px white"}} className="fixed z-40 bottom-10 right-14 w-32 h-10 px-3 py-2 bg-blue-500 rounded-lg flex justify-center items-center text-white text-lg">
        Book Now
      </div>
      <div style={{boxShadow: "2px 2px 10px white"}} className="fixed z-40 bottom-10 right-4 w-10 h-10 rounded-full bg-blue-500 z-20 flex justify-center items-center">
        <BookNowSVG />
      </div>
    </div>
  );
};

export default BookNow;