import React from 'react';
import BookNowSVG from './BookNowSVG.js';
import './BookNow.css';

const BookNow = () => {
  return (
    <div className="md:hidden">
      <div className="fixed  z-40 bottom-10 right-5 w-32 h-10 px-3 py-2 bookNowButton text-center rounded-lg flex justify-center items-center text-white text-lg">
        Book Now
      </div>
    </div>
  );
};

export default BookNow;