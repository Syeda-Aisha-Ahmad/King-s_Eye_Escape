import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import EscapeRoom from '../EscapeRooms/EscapeRoom';
import BookNow from '../BookNow/Main';
import CovidList from './CovidList';
import Card from '../Slider/Card';
import AxeThrowing from './axeThrowing';

import bannerImg from '../../build/10630f44942c07c10045eb41cb7565f8.jpeg'
import './Main.css';
import RageRoom from './RageRoom';

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
    body: `A mysterious figure linked to violent uprisings across the nation has captured a member of your Special Ops Unit. Now you must find and safely extract your fellow agent before their villanous plans play out. Will your operation be successful or will you end up in The Aftermath?`,
    players: "2-7 (3-5 recommended)",
    time: "60 Minutes",
    difficulty: "Difficulty: 4 out of 5",
    genre: "Rescue Mission"
  }
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
        <title>King's Eye Escape - Orange County Escape Room</title>
        <meta name="description" content="Orange County's Newest Spot for Adrenaline-Pumping Fun! Escape rooms and Axe Throwing All-In-One Private Facility! Find yourself fighting to survive in a post-apocalyptic fantasy world." />
        <meta name="keywords" content="Escape room Orange County, Escape Rooms Orange County, Axe Throwing Orange County, Ax Throwing Orange County, Escape room OC, Escape Rooms OC, Axe Throwing OC, Ax Throwing OC, Escape room Westminster, Escape Rooms Westminster, Axe Throwing Westminster, Ax Throwing Westminster, Team Building, Family Fun, Socal" />
      </Helmet>
      <div className="bg-black flex flex-col xl:h-full">

        <div className="w-full bg-black flex flex-col justify-center pt-14 pb-10 md:pb-16 background-style">
          <h1 className="text-white text-center font-semibold text-3xl md:text-5xl xl:text-6xl leading-loose xl:leading-relaxed">
            <Link to={"/escape_rooms"}>Escape Rooms | </Link>
            <Link to={"/axe_lounge"}>Axe Throwing | </Link>
            <Link to={"/rage_room"}>Rage Rooms</Link>


          </h1>
          {/* <div className="border-gray-100 border-b-4 w-9/12 md:w-7/12 lg:w-40 py-2 lg:py-0 md:mb-2 self-center xl:w-2/4 xl:mb-2" /> */}
          <p className='px-5 md:px-10 text-base md:text-xl lg:pt-5 md:py-3 text-white md:w-10/12 text-center mx-auto leading-relaxed hidden md:grid'>King's Eye Escape is your one stop shop for entertainment! Be the hero in one of our 5-star rated escape rooms! Learn to throw safely and effectively in our private indoor axe throwing lounge! Smash and bash your way to good mental health in our rage room experience!
          </p>

          <p className='px-5 md:px-10 text-base md:text-xl pt-5 pb-2 md:py-3 text-white md:w-10/12 text-center mx-auto leading-relaxed grid md:hidden lg:hidden'>King's Eye Escape is your one stop shop for entertainment! Be the hero in one of our 5-star rated escape rooms! Learn to throw safely and effectively in our private indoor axe throwing lounge! Smash and bash your way to good mental health in our rage room experience!
          </p>


          <Link className='text-center mt-3' to="/resova">
            <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
          </Link>

        </div>


        <h1 className="text-white md:pt-12 text-center bg-black text-3xl md:text-5xl xl:text-6xl xl:leading-relaxed font-semibold">Our <span className='text-blue-500'>Escape Rooms</span></h1>
        <div className="bg-black border-b-4 w-40 pt-3 md:py-3 self-center xl:w-2/4 xl:mb-6" />
        <div className="flex flex-col bg-black xl:flex-row">
          {EscapeRooms.map((room, index) => {
            return (
              <EscapeRoom room={room} key={index} />
            )
          })}
        </div>
      </div>

      <AxeThrowing />
      <RageRoom />


      <div className="text-center text-white bg-black flex justify-center">

      </div>
      <Card />


      <Link to='/resova'>
        <BookNow />
      </Link>
    </motion.div >
  )
};

export default Main;