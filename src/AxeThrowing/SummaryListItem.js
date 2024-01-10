import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

export default function SummaryListItem({ res }) {
  return (
    <div className="col-span-4 grid grid-flow-cols grid-cols-8 mb-7 md:mb-0" >
      <div className="col-start-1 col-span-1 flex justify-center items-center">
        <FontAwesomeIcon icon={faCrosshairs} size='1x' style={{ color: 'white', marginBottom: '25px', marginTop: '25px' }} />
      </div>
      <p className="col-start-2 col-span-7 flex justify-start items-center text-white md:text-xl">{res.header}</p>
    </div>
  )
}