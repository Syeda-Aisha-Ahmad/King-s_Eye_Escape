import React, { useState } from 'react';
import Availability from './Availability.js';
import { motion } from 'framer-motion';

const Booking = (props) => {
  const ImageLink = ["TheXtraction.jpeg", "TheHarvest.jpeg", "AxeLounge2.jpg"];
  const Title = ["The X-Traction", "The Harvest", "Axe Throwing Lounge"];


  return (
    <div className="flex flex-col justify-center items-center md:ml-10">
      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="antialiased text-white text-center text-3xl py-2" style={{textShadow: "0 0 20px white"}} >{Title[props.data.item_id - 1]}</h1>
        <img className="object-contain py-2" src={ImageLink[props.data.item_id - 1]} alt="Escape Room Poster"/>
        <div className="grid grid-cols-2 bg-gray-700 gap-2 w-11/12 rounded-md" >
          {props.data.instances.map((res, index) => {
            if (res.type === "available" && res.in_past === false) {
              return (
                <Availability key={index} res={res} />
              )
            } else {
              return (
                <motion.div className="col-span-1 m-3 bg-red-600 shadow-xl text-center text-white text-xl py-2 rounded-lg" style={{boxShadow: "2px 2px 10px black"}} key={index}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >Sold Out</motion.div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Booking;