import React from 'react';
import { Link } from 'react-router-dom';
import AxeThrowing from '../Home/axeThrowing';

import BrainSVG from './BrainSVG';
import ToxicSVG from './ToxicSVG';

const EscapeRoom = ({ room }) => {
  return (
    <div >
      <div className="grid grid-cols-1 text-center">
        <img src={room.img} alt="/" className="object-contain p-3 lg:h-96 mx-auto text-center " />
        <h1 className="antialiased text-white text-2xl p-2 font-semibold md:text-3xl">{room.title}</h1>
        <p className="antialiased p-2 md:text-xl px-12 leading-relaxed text-gray-200">{room.body}</p>
        <div className="flex flex-col bg-black p-1 ">
          <div className="flex flex-row py-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <p className="antialiased text-gray-200 text-base ml-3 pb-2 md:text-xl">{room.players}</p>
          </div>
          <div className="flex flex-row py-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="antialiased text-gray-200 text-base ml-3 pb-2 md:text-xl">{room.time}</p>
          </div>
          <div className="flex flex-row py-2 justify-center">
            <BrainSVG />
            <p className="antialiased text-gray-200 text-base ml-3 pb-2 md:text-xl">{room.difficulty}</p>
          </div>
          <div className="flex flex-row py-2 justify-center">
            <ToxicSVG />
            <p className="antialiased text-gray-200 text-base ml-3 pb-2 md:text-xl">{room.genre}</p>
          </div>
        </div>

        <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
          <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
        </Link>
      </div>

    </div>
  )
};

export default EscapeRoom;