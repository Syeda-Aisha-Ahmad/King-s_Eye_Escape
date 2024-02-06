import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import EscapeRoom from './EscapeRoom';
import BookNow from '../BookNow/Main';
import './Main.css'

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

        <div className="w-full bg-black flex flex-col justify-center pt-14 pb-10 md:pb-16 background-style-escape">
          <h1 className="text-white text-center font-semibold text-3xl md:text-5xl xl:text-6xl xl:leading-relaxed">What is an <span className='text-blue-500'>Escape Room?</span></h1>
          <div className="border-gray-100 border-b-4 w-9/12 md:w-7/12 lg:w-40 py-2 lg:py-0 md:mb-2 self-center xl:w-2/4 xl:mb-2" />
          <p className='px-5 md:px-10 text-base md:text-xl lg:pt-5 md:py-3 text-white md:w-10/12 text-center mx-auto leading-relaxed hidden md:grid'>Escape rooms are real-life adventures where you and your crew must investigate your surroundings, follow clues, crack codes, solve puzzles, and overcome your challenges. Think of it like a live-action video game, but the clock's ticking (60 minutes).

            Ready for a heart-pounding, adrenaline-fueled experience? Team up with friends, family, or co-workers, and immerse yourself in a 60-minute challenge that leads to unlimited possibilities. Can you beat the clock and emerge victorious? Let the escapades begin!
          </p>

          <p className='px-5 md:px-10 text-base md:text-xl pt-5 pb-2 md:py-3 text-white md:w-10/12 text-center mx-auto leading-relaxed grid md:hidden lg:hidden'>Escape rooms are real-life adventures where you and your crew must investigate your surroundings, follow clues, crack codes, solve puzzles, and overcome your challenges.

            Ready for a heart-pounding, adrenaline-fueled experience? Immerse yourself in a 60-minute challenge with friends, family or co-workers. Click to book your adventure!
          </p>


          <Link className='text-center mt-3' to="/resova">
            <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
          </Link>

        </div>


        <h1 className="text-white md:pt-12 text-center bg-black text-3xl md:text-5xl xl:text-5xl xl:leading-relaxed font-semibold">Our Escape Rooms</h1>
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