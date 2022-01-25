import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faMobileAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Details = ({ details }) => {
  return (
    <div className="flex flex-col">
      <div className="self-start flex flex-row justify-start content-center pl-5 ">
        <FontAwesomeIcon className="bg-blue-400 rounded-full hover:bg-blue-600" icon={faStopwatch} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '30px', height: '30px' , padding: "5px"}} />
        <div className="flex flex-col justify-center content-center self-center">
          <p className="text-white px-5" >Open 7 days a week</p>
          <p className="text-white px-5" >Mon - Thur 2:00PM to 10:30PM</p>
          <p className="text-white px-5" >Fri - Sun 11:00AM to 12:45AM(Next Day)</p>
        </div>
      </div>
      <a href="tel:+1-714-379-5889" className="self-start flex flex-row justify-start content-center pl-5 ">
        <FontAwesomeIcon className="bg-blue-400 rounded-full hover:bg-blue-600" icon={faMobileAlt} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '30px', height: '30px' , padding: "5px"}} />
        <p className="text-white self-center px-5" >(714) 379-5889</p>
      </a>
      <a href="https://www.google.com/maps/place/King's+Eye+Escape/@33.7602943,-118.0105672,17z/data=!4m5!3m4!1s0x80dd29bc2f8c39a9:0x5fec90b71b27fafe!8m2!3d33.760483!4d-118.010439" className="self-start flex flex-row justify-start content-center pl-5 ">
        <FontAwesomeIcon className="bg-blue-400 rounded-full hover:bg-blue-600" icon={faMapMarkerAlt} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '30px', height: '30px' , padding: "5px"}} />
        <p className="text-white self-center px-5" >6731 Westminster Blvd. Ste. 105 Westminster, CA 92683</p>
      </a>
      <a href="mailto: service@kingseyeescape.com" className="self-start flex flex-row justify-start content-center pl-5 ">
        <FontAwesomeIcon className="bg-blue-400 rounded-full hover:bg-blue-600" icon={faEnvelope} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '30px', height: '30px' , padding: "5px"}} />
        <p className="text-white self-center px-5" >service@kingseyeescape.com</p>
      </a>
    </div>
  );
};

export default Details;