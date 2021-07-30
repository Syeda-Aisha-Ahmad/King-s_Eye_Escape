import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
  return (
    <>
      <a href="https://www.facebook.com/KingsEyeEscapeRoom" className="flex flex-col items-center mx-3 my-2">
        <FontAwesomeIcon className="bg-blue-500 rounded-full animate-pulse" icon={faFacebookF} size='1x'style={{ color: 'white', marginBottom: '15px', marginTop: '25px', width: '70px', height: '70px', padding: "5px" }} />
        <div className="text-white my-3 md:text-xl">
          Facebook
        </div>
        <div className="text-blue-400 my-3 md:text-xl">
          Like Us
        </div>
      </a>
      <a href="https://www.instagram.com/KingsEyeEscape"className="flex flex-col items-center mx-3 my-2">
        <FontAwesomeIcon className="bg-blue-500 rounded-full animate-pulse" icon={faInstagram} size='1x'style={{ color: 'white', marginBottom: '15px', marginTop: '25px', width: '70px', height: '70px', padding: "5px" }} />
        <div className="text-white my-3 md:text-xl">
          Instagram
        </div>
        <div className="text-blue-400 my-3 md:text-xl">
          Follow Us
        </div>
      </a>
      <a href="https://www.yelp.com/biz/kings-eye-escape-westminster"className="flex flex-col items-center mx-3 my-2">
        <FontAwesomeIcon className="bg-blue-500 rounded-full animate-pulse" icon={faYelp} size='1x'style={{ color: 'white', marginBottom: '15px', marginTop: '25px', width: '70px', height: '70px', padding: "5px" }} />
        <div className="text-white my-3 md:text-xl">
          Yelp
        </div>
        <div className="text-blue-400 my-3 md:text-xl">
          Review Us
        </div>
      </a>
    </>
  );
};

export default SocialMedia;