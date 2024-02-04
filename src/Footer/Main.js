import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../build/Logo.png'
import GoogleMapModule from '../Directions/GoogleMapModule';
import img from '../../build/map.png';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);

const Main = () => {

  return (
    <>
      <div className="bottom-0 w-full pt-10 pb-5 px-10 md:px-10 bg-gray-900 z-10 relative md:mt-10">
        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-12 mb-20'>
          <div className='flex flex-col'>
            <h3 className='text-white text-xl font-semibold'>ADDRESS</h3>
            <img src={logo} className="w-10/12" alt="" />
            <div className='text-gray-200 text-lg'>
              <p>6731 Westminster Blvd. Ste. 105 Westminster, CA 92683</p>
              <a href="tel:(714) 379-5889 ">
                <p><span className='font-semibold'>Phone:</span> (714) 379-5889</p>
              </a>
              <a href="service@kingseyeescape.com">
                <p><span className='font-semibold'>Email:</span> service@kingseyeescape.com</p>
              </a>
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-white text-xl font-semibold'>LOCATION</h3>
            <a href="https://www.google.com/maps/place/King's+Eye+Escape/@33.7602943,-118.0105672,17z/data=!4m5!3m4!1s0x80dd29bc2f8c39a9:0x5fec90b71b27fafe!8m2!3d33.760483!4d-118.010439" target={"_blank"}>
              <div className='w-full mt-7'>

                <img src={img} alt="" />

                {/* Here You have to remove the comment to see the map */}

                {/* <MapWithAMarker
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              /> */}
                {/* <GoogleMapModule /> */}
              </div>
            </a>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-white text-xl font-semibold mb-5'>ADVENTURES</h3>
            <div className='text-gray-200 text-lg flex flex-col gap-5'>

              <Link className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' to="/escape_rooms">
                The Harvest
              </Link>

              <Link className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' to="/escape_rooms">
                The Xtraction
              </Link>

              <Link className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' to="/axe_lounge">
                Axe Throwing Lounge
              </Link>

              <Link className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' to="/rage_room">
                Rage Room
              </Link>

              <Link className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' to="/gift_certificates">
                Gift Certificates
              </Link>
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-white text-xl font-semibold mb-5'>SOCIAL</h3>
            <div className='text-gray-200 text-lg flex flex-col gap-5'>
              <a className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' href="https://www.facebook.com/KingsEyeEscapeRoom">Facebook</a>
              <a className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' href="https://www.instagram.com/KingsEyeEscape">Instagram</a>
              <a className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' href="https://www.yelp.com/biz/kings-eye-escape-and-axe-westminster-6">Yelp</a>
              <a className='hover:text-gray-400 transition-all delay-100 pb-2 border-b hover:border-gray-400 text-base md:text-lg' href="https://www.tiktok.com/@kingseyeescape?_t=8ivDkwAP5EU&_r=1">Tiktok</a>
            </div>
          </div>
        </footer>
        <p className="text-white text-center">
          Copyright © 2024 KingsEyeEscape. All rights reserved.
        </p>
      </div>
    </>
  );
};


export default Main;