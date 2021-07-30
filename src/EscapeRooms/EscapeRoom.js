import React from 'react';
import { Link } from 'react-router-dom';

import BrainSVG from './BrainSVG';
import ToxicSVG from './ToxicSVG';

const EscapeRoom = ({room}) => {
  return (
    <div className="grid grid-cols-1">
      <img src={room.img} alt="/" className="object-contain p-3" />
      <h1 className="antialiased text-white text-2xl p-2 md:text-4xl">{room.title}</h1>
      <p className="antialiased text-white p-2 text-left md:text-2xl">{room.body}</p>
      <div className="flex flex-col bg-black p-1">
        <div className="flex flex-row py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
        <p className="antialiased text-white text-sm ml-5 pb-2 md:text-2xl">{room.players}</p>
        </div>
        <div className="flex flex-row py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="antialiased text-white text-sm ml-5 pb-2 md:text-2xl">{room.time}</p>
        </div>
        <div className="flex flex-row py-2">
        <BrainSVG />
        <p className="antialiased text-white text-sm ml-5 pb-2 md:text-2xl">{room.difficulty}</p>
        </div>
        <div className="flex flex-row py-2">
        <ToxicSVG />
        <p className="antialiased text-white text-sm ml-5 pb-2 md:text-2xl">{room.genre}</p>
        </div>
      </div>
      <Link to='/book_now'>
        <div className="flex place-content-center py-3">
          <div className="bg-blue-500 px-6 py-2 mb-5 w-40 text-center self-center rounded-full border text-white transform md:scale-150">Book Now</div>
        </div>
      </Link>
    </div>
  )
};

export default EscapeRoom;