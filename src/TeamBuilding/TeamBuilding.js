import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import img1 from '../../build/o (1).jpg'
import img2 from '../../build/o (3).jpg'
import './TeamBuilding.css';

import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import star from '../../build/star.png';
import BookNow from '../BookNow/Main';
import profile1 from '../../build/profile1.png'
import profile2 from '../../build/profile2.png'
import profile3 from '../../build/profile3.png'
import profile4 from '../../build/profile4.png'
import arrow1 from '../../build/left-arrow.png'
import arrow2 from '../../build/right-arrow.png'

const TeamBuilding = () => {

    const reviews = [

        {
            profile: `${profile3}`,
            name: "Christine M.",
            text: "Great times! We did the escape room and axe throwing... definitely bring someone who is good at puzzles! Mark the owner put a lot of thought into it. Our group who celebrated my son's 19th birthday were well taken care of. Highly recommend!",
            images: [
                "https://s3-media0.fl.yelpcdn.com/bphoto/EnPk_XRAr0AztEOVnquliQ/o.jpg",
                "https://s3-media0.fl.yelpcdn.com/bphoto/tT4zYoqKOj2mOV7uYBr1Ng/o.jpg"
            ]
        },

        {
            profile: `${profile1}`,
            name: "Jenn H.",
            text: "My girl scouts wanted to do a local escape room. They are 13/14 yrs old and had a blast! They did the Harvest room and loved solving the puzzles. The staff are very friendly and accommodating. The scouts had so much fun interacting with the staff. Highly recommend. Thank you for fiving our troop a great experience!"
        },

        {
            profile: `${profile2}`,
            name: "Sarah G.",
            text: "Came here with my work for a team building/ bonding experience and I just want to give a shout-out to the AMAZING staff that hosted us today! Not only was this a cool and fun place but most of us have never been axe throwing or have done an escape room and I have to say as fun as it was I felt that the employees really made it a memorable experience for us. Our axe throwing teacher was AWESOME he was very knowledgeable and extremely helpful and made it really fun(even though I didn't want to do it in the beginning)! And the staff all around 10/10. This staff is great at what they do. Thanks guys for your hospitality and making this a great experience for us first timers! Next time we're ready to take on some zombies:) "
        },



        {
            profile: `${profile4}`,
            name: "LT Ibeere",
            text: "Mark and his team went above and beyond to ensure our corporate fun day was terrific. We spent four hours at his facility axe throwing and trying to master both escape rooms. His hospitality and kindness are refreshing. I highly recommend this place for corporate team building or a fun night out with friends."
        }


    ];

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        document.getElementById("root").scrollIntoView();
    }, []);

    const buttonHandler = () => {
        setClicked(true);
    }
    const buttonHandlerClose = () => {
        setClicked(false);
    }
    return (

        <>
            <Helmet>
                <title>Team Building</title>
                <meta name="description" content="Kick back and rel-AX here at our Ax throwing lounge.  Expert Coaching Available. Safety Lessons and training included." />

            </Helmet>


            <div>
                <div className='text-white bg-indigo-800 teambuilding-background pb-10 pt-20 lg:pb-28 lg:pt-36 text-center'>
                    <h2 className='text-3xl md:text-5xl mb-1 text-white font-semibold'>Team <span className='text-blue-500'>Building</span></h2>
                    <div className="border-gray-200 border-b-4 w-5/12 md:w-5/12 lg:w-32 pt-2 md:py-3 md:mb-5 self-center xl:w-1/4 xl:mb-6 mx-auto" />
                    <p className='text-base md:text-xl mt-2 mb-5 leading-relaxeds w-11/12 md:w-7/12 mx-auto'>Perfect for Birthday Parties, Corporate Team Building Events, Bachelor and Bachelorette Parties, and Family Outings!</p>
                    <Link className='text-center mt-5 mb-10 lg:my-7' to="/resova">
                        <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                    </Link>
                </div>

                <div className='text-gray-200 mt-7 w-11/12 lg:w-7/12 mx-auto text-center text-base md:text-xl leading-relaxeds'>
                    King’s Eye Escape is your one stop shop for corporate events and team building! Test your synergy with thought-provoking simulations and find out your team’s strengths in our highly rated escape games! Pit teams together for a fun competition in our Axe Throwing Lounge! Let your members enjoy bashing and breaking things together in our Rage Room Experience!
                </div>


                <div className='flex flex-col lg:gap-10 lg:flex-row items-center mt-7 md:mt-16 lg:w-9/12 mx-3 lg:mx-auto'>
                    <div className='w-full lg:w-1/2 mx-auto '>
                        <img src={img1} className="" alt="" />
                    </div>

                    <div className='text-base md:text-xl leading-relaxeds mt-5 lg:mt-0 text-white w-full lg:w-1/2 text-center lg:text-left mx-auto'>
                        <h2 className='text-2xl lg:text-3xl font-semibold mb-4'>Escape to Bond at King’s Eye</h2>

                        <p className='mb-5 text-gray-200'>Here at King’s Eye, we’ve developed the best combination of activities for people to really bond and connect with one another! We also understand that people bond best when food is involved, so we put together a list of the best catering you can get nearby!
                        </p>

                        <p className='text-gray-200'>
                            We can accommodate up to 30 people at once, and even more if you’re open to splitting into separate blocks!
                        </p>
                    </div>
                </div>

                <div className='flex flex-col-reverse lg:flex-row items-center lg:w-9/12 mx-3 lg:mx-auto mt-8 lg:mt-20 mb-10 lg:gap-10'>

                    <div className='text-base md:text-xl leading-relaxeds lg:w-1/2 text-center lg:text-left pb-1'>
                        <h1 className='text-2xl text-white lg:text-3xl font-semibold mb-4'>Special Discounts on Large Group Adventures</h1>
                        <p className='text-gray-200'>Large group event tickets are $30 a ticket but are discounted even further if you’re reserving multiple experiences for your team! For example, if your team of 16 wants to participate in what we call a Back2Back, 8 people would participate in Axe Throwing and 8 people would do an escape room, then swap to the other activity afterward! This would be 32 total tickets at a discounted rate!
                        </p>
                    </div>

                    <div className='lg:w-1/2 mx-auto mb-5 lg:mb-10'>
                        <img src={img2} className="" alt="" />
                    </div>
                </div>



                <div className='lg:w-9/12 mx-auto mt-5 mb-10 px-5 '>

                    <div className='mt-5'>
                        <h1 className="text-white md:pt-12 text-center text-3xl md:text-4xl xl:leading-relaxed mb-2 font-semibold">See Our Reviews</h1>
                        <div className="border-b-2 w-40 pt-2 self-center mb-5 xl:w-2/4 xl:mb-6 mx-auto " />
                    </div>


                    {/* 1 */}

                    <div className='flex items-start'>
                        <button className="hidden md:grid arrow-right arrow arrow-style">
                            <img src={arrow1} alt="" />
                        </button>
                        <Swiper
                            autoplay={{ delay: 3000 }}
                            pagination={{
                                clickable: true,
                            }}
                            autoHeight={true}
                            navigation={{
                                nextEl: ".arrow-left",
                                prevEl: ".arrow-right"
                            }}

                            style={{
                                "--swiper-pagination-bullet-inactive-color": "#fff",
                            }}
                            modules={[Pagination, Navigation]}
                        >

                            {reviews.map((info, index) => {
                                return (

                                    <SwiperSlide key={index}>
                                        <div key={index} className={`py-5 px-5 w-11/12 mx-auto text-justify md:text-left`}>
                                            <div className='mb-4 flex items-start justify-between'>
                                                <div className=''>
                                                    <div className='flex justify-between items-center gap-2 mr-4'>
                                                        <div>
                                                            <img src={info.profile} className="rounded-full" alt="" />
                                                        </div>
                                                        <h3 className='text-2xl font-bold mb-2 mt-2 text-white'>{info.name}</h3>
                                                    </div>
                                                    <div className='flex items-center gap-2 mt-3'>
                                                        <img className='' src={star} alt="" />
                                                        <img className='' src={star} alt="" />
                                                        <img className='' src={star} alt="" />
                                                        <img className='' src={star} alt="" />
                                                        <img className='' src={star} alt="" />
                                                    </div>
                                                </div>
                                                <div className='absolute absolute-style md:hidden'>
                                                    <a href="https://m.yelp.com/biz/kings-eye-escape-westminster">
                                                        <img src="yelp.png" className="h-10 w-auto" />
                                                    </a>
                                                </div>

                                                <div className='absolute hidden md:grid right-14'>
                                                    <a href="https://m.yelp.com/biz/kings-eye-escape-westminster">
                                                        <img src="yelp.png" className="h-10 w-auto" />
                                                    </a>
                                                </div>
                                            </div>



                                            <div className='text-xl mb-10'>
                                                <p className='p-text-sstyle text-white'>{info.text}</p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 pl-5">
                                                    {info?.images?.map((img, imgIndex) => (
                                                        <img key={imgIndex} className="h-auto" src={img} alt={`Review Image ${imgIndex + 1}`} />
                                                    ))}
                                                </div>
                                            </div>


                                            {/* <div className="mt-5 text-blue-500 font-semibold mb-5">
                                            <button button onClick={() => setClicked(!clicked)}>
                                                {clicked ? 'Show Less...' : 'Show More...'}
                                            </button>
                                        </div> */}
                                        </div>
                                    </SwiperSlide>

                                )
                            })}
                        </Swiper>

                        <button className="hidden md:grid arrow-left arrow arrow-style">
                            <img src={arrow2} alt="" />
                        </button>
                    </div>



                    <div className='text-center mb-10 md:my-20 mt-10'>
                        <h2 className='text-3xl md:text-4xl mb-1 text-white font-semibold'>Team Building Hours</h2>
                        <div className="border-gray-100 border-b-2 w-9/12 md:w-7/12 lg:w-20 py-3 mb-5 self-center xl:w-1/4 xl:mb-6 mx-auto" />
                        <p className='text-base md:text-xl mb-2 text-gray-200'>We’re open 7 days a week from <span className='text-blue-500'>9:00am to Midnight</span></p>
                        <p className='text-base md:text-xl text-gray-200'>Also we can host parties anytime in between!</p>
                    </div>
                </div>

            </div>
            <Link to='/resova'>
                <BookNow />
            </Link>
        </>


    );
};

export default TeamBuilding;