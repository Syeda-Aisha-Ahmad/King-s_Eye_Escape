import React, { useEffect } from 'react';
import Details from './Details.js';
import GoogleMapModule from './GoogleMapModule.js';
import SocialMedia from './SocialMedia.js';
import BookNow from '../BookNow/Main';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './Directions.css';

const Main = () => {

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, []);

  useEffect(() => {
    gtag('js', new Date());
    gtag('config', 'UA-159548226-1', {
      'page_title': 'Directions',
      'page_path': '/directions'
    });
  }, [])

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Helmet>
        <title>Directions</title>
        <meta name="description" content="We’re conveniently located 5 mins off the 22 and 405 freeways in Westminster, Socal. Orange County's Premier axe lounge for private groups up to 8 participants" />
      </Helmet>
      <div className="flex flex-col justify-center items-center direction-style bg-center bg-cover bg-repeat-y md:h-full md:w-screen">
        <h1 className=" text-white text-center text-3xl mt-10 mb-3 md:text-5xl font-semibold">Come <span className='text-blue-500'>VISIT Us!</span></h1>
        <div className="border-gray-200 border-b-4 w-5/12 md:w-7/12 lg:w-32 mb-5 mt-2 self-center xl:w-5/12 xl:mb-6 mx-auto" />
        <ul className="list-disc list-inside px-3 md:w-3/4 md:mb-10 mt-5">
          <li className="text-white text base md:text-xl my-4 text-justify">King’s Eye Escape is located 2 minutes off the 405 and 5 minutes off the 22 in Westminster California.</li>
          <li className="text-white text base md:text-xl my-4 text-justify">We’re in Westminster Center, right next to the Regency Movie Theaters, Baskin Robbins, L*L Hawaiian BBQ, and Tisane Tea bar.</li>
          <li className="text-white text base md:text-xl my-4 text-justify">We’re 5 minutes away from the brand new Rodeo 39, an amazing indoor/outdoor dining facility that’s similar to Irvine Spectrum and Anaheim Packing District.</li>
          <li className="text-white text base md:text-xl my-4 text-justify">Call to Reserve Slot outside of Open Hours.</li>
        </ul>
        <div className="md:flex md:flex-col md:justify-center md:items-center md:w-screen">
          <Details />
          <GoogleMapModule />
        </div>
        <div className="flex flex-row justify-around h-full w-screen">
          <SocialMedia />
        </div>
      </div>
      <Link to='/resova'>
        <BookNow />
      </Link>
    </motion.div>
  );
};

export default Main;