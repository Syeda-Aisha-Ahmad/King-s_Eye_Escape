import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { motion, useCycle } from 'framer-motion';

const SafetyListItem = ({res}) => {

  const [show, setShow] = useState(false);
  const [x, cycleX] = useCycle(0, 90);
  const [y, cycleY] = useCycle(0, 1);
  const [display, cycleDisplay] = useCycle("hidden", "visible");

  const [forward, cycleForward] = useCycle(0, 70);
  const [spin, cycleSpin] = useCycle(0, 860);
  const [z, cycleZ] = useCycle(1, .25);

  const style = { color: 'white' };

  return (
    <div className="col-span-4" >
      <motion.div className="grid grid-flow-rows grid-cols-8" onTap={ () => {
          setShow(!show)
          cycleX()
          cycleY()
          cycleForward()
          cycleSpin()
          cycleZ()
          cycleDisplay()
        }}>
        <motion.div className="col-span-1 flex justify-center items-center" animate={{rotate: x}} >
          <FontAwesomeIcon icon={faChevronRight} size='1x' style={style} />
        </motion.div>
        <div className="col-span-4 col-start-2 flex justify-start items-center text-white md:text-xl w-max md:col-span-2" >
          <motion.div animate={{rotate: spin, x: forward, opacity: z}} transition={{duration: .5}}>
            {res.header}
          </motion.div>
          <FontAwesomeIcon className="col-span-1 col-start-6 md:col-start-4" icon={faBullseye} size='3x' style={{visibility: display, color: 'white', margin: '0px 15px 15px 15px'}}/>
        </div>
      </motion.div>
      <motion.div className="text-white text-justify px-3 md:px-12 md:text-xl md:leading-relaxed" animate={{opacity: y}}>
        {show && res.description}
      </motion.div>
    </div>
  );
};

export default SafetyListItem;