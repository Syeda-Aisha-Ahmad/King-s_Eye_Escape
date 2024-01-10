import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';

import Bookings from './Bookings.js';
import AxeSVG from './AxeSVG.js';
import tempdata from './tempdata.js';
import Continue from '../BookNow/Alt.js';

import Calendar from 'react-calendar';
import Axios from 'axios';
// import headers from '../ResovaKey.js';

const Main = () => {

  const [value, setValue] = useState(new Date())
  const [bookingDate, setBookingDate] = useState(new Date((new Date()).getTime() - ((new Date()).getTimezoneOffset()) * 60 * 1000).toISOString().split('T')[0])
  const [data, setData] = useState(tempdata)

  const { scrollYProgress } = useViewportScroll()
  const spinFactor = useTransform(scrollYProgress, [0, 1], [0, 720])
  const forwardFactor = useTransform(scrollYProgress, [0, 1], [-150, 150])

  const [display, setDisplay] = useState()
  const [style, setStyle] = useState({ opacity: 1, visibility: "visible" })

  function onChange(nextValue) {
    let yourDate = nextValue
    let offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset * 60 * 1000))
    setValue(nextValue)
    setBookingDate(yourDate.toISOString().split('T')[0])
  }

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

  useEffect(() => {
    getCalendar()
  }, [bookingDate])

  // function getCalendar() {
  //   Axios.post(`/schedule`, {params: {start_date: bookingDate, end_date: bookingDate, "item_ids[0]": 1, "item_ids[1]": 2, "item_ids[2]": 3}, headers: headers})
  //   .then(res => {
  //     setData(res['data'][bookingDate]['items'])
  //   })
  //   .catch((err) => console.log(err))
  // }


  function getCalendar() {
    Axios.post(`/schedule`, { params: { start_date: bookingDate, end_date: bookingDate, "item_ids[0]": 1, "item_ids[1]": 2, "item_ids[2]": 3 } })
      .then(res => {
        setData(res['data'][bookingDate]['items'])
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="grid grid-cols-1 bg-black gap-4 md:grid-cols-2">
      <Helmet>
        <title>Schedule</title>
        <meta name="description" content="Check for availabilities to find the best time that works for you" />
      </Helmet>
      <div className="col-span-1 w-screen h-auto flex flex-col justify-center items-center md:w-2/4 md:fixed md:my-8 md:mx-3 xl:w-1/4 xl:mx-32">
        <h1 className="bg-black text-center text-white text-3xl py-3" style={{ textShadow: "0 0 20px white" }}>Schedule</h1>
        <Calendar
          onChange={onChange}
          value={value}
          minDate={new Date}
        />
        <motion.div style={{ marginTop: '25px', x: forwardFactor, rotate: spinFactor }}>
          <AxeSVG />
        </motion.div>
        <Link to='/resova'>
          <div className="hidden md:flex place-content-center py-3">
            <div className="bg-green-500 px-6 py-2 mb-5 w-40 text-center self-center rounded-full border text-white transform md:scale-150">Reserve Slot</div>
          </div>
        </Link>
        <Link to='/resova'>
          <Continue />
        </Link>
      </div>
      <Bookings data={data} />
    </div>
  );
};

export default Main;