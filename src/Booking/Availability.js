import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Availability = (props) => {

  return (
      <motion.div className="col-span-1 m-3 text-center text-white text-xl py-2 rounded-lg" style={{ backgroundColor: "rgb(49, 121, 204)", boxShadow: "2px 2px 10px black" }}
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
        <Link to="/resova">
          {props.res.start_time_alt}
        </Link>
      </motion.div>
  );
};

export default Availability;