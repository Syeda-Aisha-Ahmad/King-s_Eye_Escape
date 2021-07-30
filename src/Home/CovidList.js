import React from 'react';
import CovidListItems from './CovidListItems.js';

const CovidList = () => {
  return (
    <>
      {List.map((res, index) => {
        return (
          <CovidListItems res={res} key={index}/>
        )
      })}
    </>
  );
};

const List = [
  {
    header: "Only allow small group sizes (Less than 10) to participate in our experiences."
  },
  {
    header: "Maintain a period of at least 45 minutes between bookings for each game."
  },
  {
    header: "Only allow for one group at a time in our lobby."
  },
  {
    header: "Thoroughly sanitize between every group."
  },
  {
    header: "Only private groups (Family and Friends only, no mixing of strangers) allowed to book."
  },
  {
    header: "Maintain a comprehensie Contact Tracing log."
  },
  {
    header: "Social Distance between Staff and Patrons"
  },
  {
    header: "Stock Hand Sanitizer, Anti-bacterial wipes, Masks"
  },
];

export default CovidList;