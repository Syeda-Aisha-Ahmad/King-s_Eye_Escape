import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import YelpReviews from './YelpReviews.js';
import './Card.css';
import "swiper/css";
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Card = () => {
    return (
        <div style={{ height: "750px" }} className="bg-card w-screen justify-center items-center pb-10 md:hidden">
            <h1 className="text-white  text-center font-semibold text-3xl md:text-5xl xl:text-6xl xl:leading-relaxed pt-5">See Our<a className='text-blue-500' href="https://m.yelp.com/biz/kings-eye-escape-westminster"> Reviews</a></h1>
            <div className="border-gray-100 border-b-4 w-9/12 md:w-7/12 lg:w-40 py-3 md:mb-5 self-center xl:w-2/4 xl:mb-6 mx-auto" />
            <p className='text-xl text-center mt-5 font-semibold text-gray-200'><span className='text-blue-500 '>Swipe</span> To See More...</p>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                style={{
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                }}
                modules={[Pagination]}
            >

                {YelpReviews.map((info, index) => {
                    return (


                        <SwiperSlide key={index}>
                            <div key={index} className={`py-5 px-5 w-11/12 mx-auto mb-4 text-center md:text-left relative`}>
                                <div className='mr-4 bg-gray-900 py-5 pc-4 rounded-xl mt-5'>
                                    <div className='review-img '>
                                        <img src={require(`../../build/${index}.jpeg`).default} alt="Yelp Image" className="select-none w-52 pointer-events-none px-5 rounded-xl  z-10" />
                                    </div>
                                    <div className=''>
                                        <h3 className='text-2xl font-bold mb-5 mt-2 ml-5 text-white'>{info.name}</h3>
                                        <p className='px-2 text-sstyle'>{info.post}</p>
                                    </div>
                                </div>
                                <a href="https://m.yelp.com/biz/kings-eye-escape-westminster">
                                    <img src="yelp.png" className="absolute top-10 right-10 h-12 w-auto" />
                                </a>
                            </div>
                        </SwiperSlide>

                    )
                })}
            </Swiper>
        </div >
    )
}

export default Card;


