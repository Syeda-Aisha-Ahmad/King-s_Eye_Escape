import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import EscapeRoom from './EscapeRoom';
import BookNow from '../BookNow/Main';

const EscapeRooms = [
  {
    img: "TheHarvest.jpeg",
    title: "The Harvest",
    body: `An emergent disease dubbed "The Illness" has launched the world into chaos. In order to increase your chances of survival, you joined an elite team of looters. You heard rumors of a big score and followed them to a warehouse deep inside Scavenger City.  Come find out what it really means to SURVIVE!`,
    players: "2-10 (4-6 recommended)",
    time: "60 Minutes",
    difficulty: "Difficulty: 5 out of 5",
    genre: "Post Apocalyptic / Survival"
  },
  {
    img: "TheXtraction.jpeg",
    title: "The Xtraction",
    body: `A mysterious figure linked to violent uprisings across the nation has captured a member of your Special Ops Unit. Now you must find and safely extract your fellow agent before their villainous plans play out. Will your operation be successful or will you end up in The Aftermath?`,
    players: "2-7 (3-5 recommended)",
    time: "60 Minutes",
    difficulty: "Difficulty: 4 out of 5",
    genre: "Rescue Mission"
  },
];

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
        <title>Escape Rooms</title>
        <meta name="description" content="Find yourself fighting to survive in a post-apocalyptic fantasy world" />
      </Helmet>
      <div className="bg-black flex flex-col xl:h-full">
        <h1 className="text-white text-center font-semibold bg-black mt-10 text-3xl md:text-4xl xl:text-6xl">Our <span className='text-blue-500'>Escape Rooms</span></h1>
        <div className="bg-black border-b-4 w-40 pt-2 pb-3 mb-5 self-center xl:w-2/4 xl:mb-6" />
        <div className="flex flex-col bg-black xl:flex-row">
          {EscapeRooms.map((room, index) => {
            return (
              <EscapeRoom room={room} key={index} />
            )
          })}
        </div>
      </div>
      <Link to='/resova'>
        <BookNow />
      </Link>
    </motion.div>
  )
};

export default Main;