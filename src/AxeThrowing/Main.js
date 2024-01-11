import React, { useEffect } from 'react';
import SafetyList from './SafetyList.js';
import SummaryList from './SummaryList.js';
import Footer from '../Footer/Main';
import BookNow from '../BookNow/Main';

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
        <title>Axe Lounge</title>
        <meta name="description" content="Kick back and rel-AX here at our Ax throwing lounge.  Expert Coaching Available. Safety Lessons and training included." />

      </Helmet>
      <div className="flex flex-col justify-center items-center bg-AxeLoungeWallpaper bg-center bg-cover bg-repeat-y pb-10">
        <h1 className="text-white text-center text-3xl font-semibold md:text-5xl mt-2 lg:px-5 pt-5">Indoor <span className='text-blue-500'>Axe Throwing</span> Lounge</h1>
        <div className="border-gray-100 border-b-4 w-9/12 md:w-7/12 lg:w-40 pt-2 pb-3 mb-5 self-center xl:w-7/12 xl:mb-6 mx-auto" />
        <p className="w-11/12 md:w-3/5 px-3 md:mb-16 text-white text-center text-base md:text-xl md:leading-relaxed">Here at King's Eye Escape, our love language is definitely AXe of Service! So come kick back and  relAX in our latest AXperience! Join us today for a fantAXtic time!</p>
        <div className="xl:flex xl:flex-row xl:justify-center">
          <img src="AxeLounge2.jpg" alt="/" className="w-screen my-5 xl:w-5/12 xl:mx-10" />
          <div className="flex flex-col xl:mr-10">
            <p className="px-3 mb-3 text-white text-base md:text-xl xl:mt-10 text-center xl:leading-relaxed">
              Enjoy our AXE-tremely personal and AXE-ceptional service in our private indoor lounge! Learn how to throw various weapons safely from our IntellAXEuals! Stop being BOARD and come out and AXually have a good time! You probably won’t mAX out your credit card because that would be unAXEceptable!
            </p>
            {AxeThrowing.map((info, index) => {
              return (
                <div className=" my-5 text-center">
                  <FontAwesomeIcon icon={faCrosshairs} size='1x' style={{ color: 'white' }} />
                  <p className="inline-block text-white mx-3 text-base md:text-xl">{info}</p>
                </div>
              )
            })}

            <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
              <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-4 bg-black">
        <h1 className="col-span-4 text-white text-center text-3xl my-3">Safety Rules</h1>
        <div className="col-start-2 col-span-2 border-b-4 my-2 border-gray-400" />
        <p className="col-span-4 px-3 mb-3 text-white text-justify text-base md:text-xl md:px-12 md:lead-relaxed">
          Safety is first in mind with everything we do at King’s Eye. Please carefully read and understand everything below in order to have a safe and enjoyable Axe Throwing experience. Please be aware that any violation of our safety policies or other unsafe behavior by any member of your group may result in you being unable to participate in your event, and/or removal from the premises. Your event fee will not be refunded.
        </p>
        <SafetyList />
      </div>
      <div className=' mx-auto text-center flex flex-row justify-center'>
        <Link className='text-center mt-2 mb-10' to="/resova">
          <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
        </Link>
      </div>
      <div className="grid grid-flow-row grid-cols-4 bg-black">
        <h1 className="col-span-4 text-white text-center text-3xl my-3">Summary</h1>
        <SummaryList />
      </div>
      <div className=' mx-auto text-center flex justify-center'>
        <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
          <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
        </Link>
      </div>
      <Link to='/resova'>
        <BookNow />
      </Link>
    </motion.div>
  );
};

const AxeThrowing = [
  "Ages 8+ (with supervision)",
  "Up to 10 participants",
  "$50pp/1hr for 2 players",
  "$40pp/1hr for 3+ players",
  "Safety training included",
  "Walk-ins welcome(with availability)"
]

export default Main;