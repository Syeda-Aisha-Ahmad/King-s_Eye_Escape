// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import YelpReviews from "./YelpReviews";

// // import "./styles.css";

// console.log(YelpReviews)
// export default function ReviewCard() {
//     return (
//         <>
//             <Swiper className="mySwiper">

//                 {
//                     YelpReviews.map((info, i) => {
//                         <SwiperSlide>
//                             <div key={info.name} className="w-full h-full flex flex-col justify-start items-start overflow-hidden border-gray-400 px-2 pt-5 shadow-2xl "
//                                 style={{
//                                     backgroundColor: "#111827",
//                                     borderRadius: 30,
//                                     scale: scale,
//                                 }}>

//                                 {/* <img src={`${props.index}.jpeg`} alt="Yelp Image" className="select-none h-2/5 pointer-events-none px-3 rounded-xl w-auto z-10" /> */}
//                                 <h1 className="select-none text-center text-white bold text-2xl px-3 py-3 pointer-events-none">{info.name}</h1>
//                                 <p className="select-none h-20 text-center text-justify text-white px-3 pointer-events-none">{info.post}</p>
//                                 {/* <a href="https://m.yelp.com/biz/kings-eye-escape-westminster">
//                                     <img src="yelp.jpg" className="absolute top-10 right-10 h-12 w-auto" />
//                                 </a> */}
//                             </div>
//                         </SwiperSlide>
//                     })
//                 }



//                 {/* <SwiperSlide><div>
//                 </div></SwiperSlide> */}
//             </Swiper>
//         </>
//     );
// }
