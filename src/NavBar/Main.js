import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Main = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [tab, setTab] = useState("hidden")

  const openTab = () => {
    if (isOpen) {
      setIsOpen(false)
      setTimeout(() => { setTab("hidden") }, 500)
    } else {
      setIsOpen(true)
      setTab("object-right-top absolute flex flex-col items-end pr-3")
    }
  }

  const variants = {
    open: { x: 0, scale: 1 },
    closed: { x: "200%", scale: 1 }
  }

  const variantsTabIcon = {
    open: { scale: 1 },
    closed: {}
  }

  const variantsFade = {
    open: { opacity: 1 },
    closed: {
      opacity: 0,
      applyAtEnd: {
        display: "hidden"
      }
    }
  }

  const BookNow = () => {
    return (
      <div className="md:hidden">
        <div style={{ boxShadow: "2px 2px 10px white" }} className="fixed z-40 bottom-10 right-14 w-32 h-10 px-3 py-2 bg-blue-500 rounded-lg flex justify-center items-center text-white text-lg">
          Book Now
        </div>
        <div style={{ boxShadow: "2px 2px 10px white" }} className="fixed bottom-10 right-4 w-10 h-10 rounded-full bg-blue-500 z-20 flex justify-center items-center">
          <BookNowSVG />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed md:fixed top-0 z-20 lg:hidden">
        <div className="flex flex-row bg-black justify-between items-center w-screen px-2">
          <Link to="/">
            <img className="w-52" src="./Logo.png" alt="King's Eye Logo" />
          </Link>
          <motion.div onClick={() => openTab()} animate={isOpen ? "open" : "closed"} variants={variantsTabIcon} transition={{ duration: .3 }} className="bg-blue-500 text-white m-5 w-10 h-10 flex rounded-full justify-center items-center lg:hidden iconButton text-center pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </motion.div>
        </div>

        <div className={tab} >
          <motion.div animate={isOpen ? "open" : "closed"} variants={variants} whileTap={{ scale: 1 }} transition={{ type: "spring", delay: .2, default: { duration: .5 } }} className="text-white text-xl py-2 px-10 w-screen bg-black bg-opacity-75">
            <a href="tel:+1-714-379-5889" >
              <span className='text-blue-500 font-semibold'>Call</span> Now
            </a>
          </motion.div>
          <Link to="/escape_rooms" onClick={() => openTab()}>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} whileTap={{ scale: 1 }} transition={{ type: "spring", delay: .2, default: { duration: .5 } }} className="text-white text-xl py-2 px-10 w-screen bg-black bg-opacity-75">
              <span className='text-blue-500 font-semibold'>Escape</span> Rooms
            </motion.div>
          </Link>
          <Link to="/axe_lounge" onClick={() => openTab()}>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} whileTap={{ scale: 1 }} transition={{ type: "spring", delay: .3, default: { duration: .5 } }} className="text-white text-xl py-2 px-10 w-screen bg-black bg-opacity-75">
              <span className='text-blue-500 font-semibold'>Axe</span> Lounge
            </motion.div>
          </Link>

          {/* <Link to="/directions" onClick={() => openTab()}>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} whileTap={{ scale: 1 }} transition={{ type: "spring", delay: .4, default: { duration: .5 } }} className="text-white text-xl py-2 px-10 w-screen bg-black bg-opacity-75">
              Directions
            </motion.div>
          </Link> */}

          <Link to="/rage_room" onClick={() => openTab()}>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} whileTap={{ scale: 1 }} transition={{ type: "spring", delay: .4, default: { duration: .5 } }} className="text-white text-xl py-2 px-10 w-screen bg-black bg-opacity-75">
              <span className='text-blue-500 font-semibold'>Rage</span> Room
            </motion.div>
          </Link>


          <Link to="/FAQ" onClick={() => openTab()}>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} whileTap={{ scale: 1 }} transition={{ type: "spring", delay: .3, default: { duration: .5 } }} className="text-white text-xl py-2 px-10 w-screen bg-black bg-opacity-75">
              <span className='text-blue-500 font-semibold'>FAQ</span>
            </motion.div>
          </Link>

          <Link to="/team-building" onClick={() => openTab()}>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} whileTap={{ scale: 1 }} transition={{ type: "spring", delay: .4, default: { duration: .5 } }} className="text-white text-xl py-2 px-10 w-screen bg-black bg-opacity-75">
              <span className='text-blue-500 font-semibold'>Team</span> Building
            </motion.div>
          </Link>
          <Link to="/resova" className='' onClick={() => openTab()}>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} whileTap={{ scale: 1 }} transition={{ type: "spring", delay: .5, default: { duration: .5 } }} className="text-white px-10  w-screen bg-black bg-opacity-75 py-3">
              <Link className='text-center text-white myButton mx-auto' to="/resova">
                BOOK NOW
              </Link>
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="hidden top-0 z-20 lg:block lg:fixed">
        <div className="flex flex-row bg-black justify-between items-center w-screen px-2">
          <Link to="/">
            <img className="w-52" src="./Logo.png" alt="King's Eye Logo" />
          </Link>

          <div className="hidden flex-row gap-5 justify-around justify-self-end items-center w-4/6 md:flex md:p-3 lg:w-8/12">
            <Link to="/escape_rooms">
              <div className="text-white hover:text-blue-400 transition-all delay-100">
                Escape Rooms
              </div>
            </Link>
            <Link to="/axe_lounge">
              <div className="text-white hover:text-blue-400 transition-all delay-100">
                Axe Lounge
              </div>
            </Link>
            <Link to="/rage_room">
              <div className="text-white hover:text-blue-400 transition-all delay-100">
                Rage Room
              </div>
            </Link>
            <Link to="/FAQ">
              <div className="text-white hover:text-blue-400 transition-all delay-100">
                FAQ
              </div>
            </Link>
            <Link to="/directions">
              <div className="text-white hover:text-blue-400 transition-all delay-100">
                Directions
              </div>
            </Link>

            <Link to="/team-building">
              <div className="text-white hover:text-blue-400 transition-all delay-100">
                Team Building
              </div>
            </Link>

            {/* new version */}
            <Link className='text-center' to="/resova">
              <button className='text-white font-bold navButton mx-auto'>BOOK NOW</button>
            </Link>



          </div>
        </div>
      </div>
      <div className="w-screen h-20 bg-black" />
    </>
  );
};

export default Main;