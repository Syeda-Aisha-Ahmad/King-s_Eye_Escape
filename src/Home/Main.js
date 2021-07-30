import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import EscapeRoom from '../EscapeRooms/EscapeRoom';
import BookNow from '../BookNow/Main';
import CovidList from './CovidList';
import Card from '../Slider/Card';

const EscapeRooms = [
  {
    img: "TheHarvest.jpeg",
    title: "The Harvest",
    body: `An emergent disease dubbed "The Illness" has launched the world into chaos. In order to increase your chances of survival, you joined an elite team of looters. You heard rumors of a big score and followed them to a warehouse deep inside Scavenger City.  Come find out what it really means to SURVIVE!`
  },
  {
    img: "TheXtraction.jpeg",
    title: "The X-traction",
    body: `A mysterious figure linked to violent uprisings across the nation has captured a member of your Special Ops Unit. Now you must find and safely extract your fellow agent before their villanous plans play out. Will your operation be successful or will you end up in The Aftermath?`
  }
];

const Main = () => {

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, []);

  useEffect(() => {
    gtag('js', new Date());
    gtag('config', 'UA-159548226-1', {
      'page_title' : 'Directions',
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
        <title>King's Eye Escape - Westminster/Orange County</title>
        <meta name="description" content="Orange County's Newest Spot for Adrenaline-Pumping Fun! Escape rooms and Axe Throwing All-In-One Private Facility! Find yourself fighting to survive in a post-apocalyptic fantasy world." />
        <meta name="keywords" content="Escape room Orange County, Escape Rooms Orange County, Axe Throwing Orange County, Ax Throwing Orange County, Escape room OC, Escape Rooms OC, Axe Throwing OC, Ax Throwing OC, Escape room Westminster, Escape Rooms Westminster, Axe Throwing Westminster, Ax Throwing Westminster, Team Building, Family Fun, Socal" />
      </Helmet>
      <div className="bg-black flex flex-col xl:h-full">
        <div className="w-full bg-white py-3 flex flex-col justify-center">
          <h1 className="text-black text-center text-2xl md:text-4xl xl:text-6xl xl:leading-relaxed">Do you HAVE what it takes?</h1>
          <div className="border-black border-b-4 w-40 py-3 self-center xl:w-2/4 xl:mb-6" />
          <p className='px-10 text-sm py-3 text-gray-600 md:w-3/4 self-center'>Take on Orange County's most challenging and engaging escape rooms. Jump into an epic post-apocalyptic game in our highly rated series, Loot Wars: The Harvest. The adventure doesn't stop there, learn about the events leading up to The Harvest in Loot Wars: The Extraction.  Our thrilling experiences don't stop at escape rooms.
          We also provide expert coaching for Axe Throwing inside a Private Lounge, only for you and the people you know!
          Find out why people keep coming to us to have the most fun in Westminster!</p>
        </div>
        <h1 className="text-white pt-3 text-center bg-black text-2xl md:text-4xl xl:text-6xl xl:leading-relaxed">Our Escape Rooms</h1>
        <div className="bg-black border-b-4 w-40 py-3 self-center xl:w-2/4 xl:mb-6" />
        <div className="flex flex-col bg-black xl:flex-row">
          ${EscapeRooms.map((room, index) => {
            return (
                <EscapeRoom room={room} key={index}/>
            )
          })}
        </div>
      </div>
      <div className="text-center text-white bg-black flex justify-center">
        <h1 className="text-white text-center text-2xl w-3/4 mb-2 md:hidden">
          Check out Why People <a href="https://m.yelp.com/biz/kings-eye-escape-westminster" className="text-red-500 underline bold">
            LOVE
          </a> Us!!!
        </h1>
      </div>
      <Card />
      <h1 className="text-white text-center bg-black text-2xl underline md:text-4xl xl:text-6xl xl:py-10">Our Covid Guidelines</h1>
      <CovidList />
      <Link to='/book_now'>
        <BookNow />
      </Link>
    </motion.div>
  )
};

export default Main;