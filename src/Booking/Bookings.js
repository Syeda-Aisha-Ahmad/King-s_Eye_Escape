import React from 'react';
import Booking from './Booking.js';


const Bookings = (props) => {

  return (
    <div className="col-span-1 w-screen h-auto md:col-start-2 md:w-3/4">
      {props.data.map((res, index) => {
          return (
            <Booking key={index} data={res}/>
          )
      })}
    </div>
  );
};

export default Bookings;