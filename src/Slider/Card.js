import React from 'react';
import YelpReviews from './YelpReviews';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';


function Card(props) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5])
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
      clamp: false,
  })


  function handleDragEnd(event, info) {
      if (info.offset.x < -100) {
          props.setExitX(-250)
          if (props.index  > 0 ) {
            props.setIndex(props.index - 1)
          } else {
            props.setIndex(7)
          }
      }
      if (info.offset.x > 100) {
          props.setExitX(250)
          if (props.index  < 7 ) {
            props.setIndex(props.index + 1)
          } else {
            props.setIndex(0)
          }
      }
  }

  return (
      <motion.div
          className="w-full h-full absolute top-0"
          style={{
              x: x,
              y: y,
              rotate: rotate,
              cursor: "grab",
          }}
          whileTap={{ cursor: "grabbing" }}
          drag={props.drag}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          onDragEnd={handleDragEnd}
          initial={props.initial}
          animate={props.animate}
          transition={props.transition}
          exit={{
              x: props.exitX,
              opacity: 0,
              scale: 0.5,
              transition: { duration: 0.2 },
          }}
      >
          <motion.div
              className="w-full h-full flex flex-col justify-start items-start overflow-hidden border-gray-400 p-2 shadow-2xl"
              style={{
                  backgroundColor: "rgb(34,31,32)",
                  borderRadius: 30,
                  scale: scale,
              }}
          >
            <img src={`${props.index}.jpeg`} className="select-none w-auto h-2/5 pointer-events-none px-3 rounded-lg z-10" />
            <h1 className="select-none text-center text-white bold text-2xl px-3 py-3 pointer-events-none">{YelpReviews[props.index].name}</h1>
            <p className="select-none h-20 text-center text-justify text-white px-3 pointer-events-none">{YelpReviews[props.index].post}</p>
            <a href="https://m.yelp.com/biz/kings-eye-escape-westminster">
              <img src="yelp.jpg" className="absolute top-10 right-3 h-12 w-auto" />
            </a>
          </motion.div>
      </motion.div>
  )
}

export default function CardSlider(props) {
  const [index, setIndex] = React.useState(0)
  const [exitX, setExitX] = React.useState("100%")

  return (
      <div style={{height: "500px"}} className="bg-Directions flex w-screen justify-center items-center md:hidden">
          <motion.div className="w-9/12 h-4/5 relative"
          >
              <AnimatePresence initial={false}>
                  <Card
                      key={index + 1}
                      initial={{ scale: 0, xy: 150, opacity: 0 }}
                      animate={{ scale: 0.75, y: 100, opacity: 0.5 }}
                      transition={{
                          scale: { duration: 0.2 },
                          opacity: { duration: 0.4 },
                      }}
                      index={index + 1}
                      setIndex={setIndex}
                  />
                  <Card
                      key={index}
                      animate={{ scale: 1, y: 0, opacity: 1 }}
                      transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          opacity: { duration: 0.2 },
                      }}
                      exitX={exitX}
                      setExitX={setExitX}
                      index={index}
                      setIndex={setIndex}
                      drag
                  />
              </AnimatePresence>
          </motion.div>
      </div>
  )
}