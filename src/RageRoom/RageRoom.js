import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import img from '../../build/rageroom.jpg';
import rage1 from '../../build/rage1.jpg';
import rage2 from '../../build/rage2.jpg'
import rage3 from '../../build/rage3.jpg'
import { motion } from 'framer-motion'
import BookNow from '../BookNow/Main';

const RageRoom = () => {

    useEffect(() => {
        document.getElementById("root").scrollIntoView();
    }, []);

    return (

        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
        >

            <Helmet>
                <title>Rage Room</title>
                <meta name="description" content="Kick back and rel-AX here at our Ax throwing lounge.  Expert Coaching Available. Safety Lessons and training included." />

            </Helmet>


            <div>
                <div>
                    <h1 className="text-white  text-center text-3xl md:text-5xl mt-0 pb-2 pt-5 font-semibold">Our <span className='text-blue-500'>Rage Room</span></h1>
                    <div className="border-gray-200  border-b-4 w-9/12 md:w-7/12 lg:w-40 pt-3 mb-5 self-center xl:w-5/12 xl:mb-6 mx-auto" />
                    <p className="w-11/12 md:w-2/5 px-3 md:mb-5 text-white text-center text-base md:text-xl md:leading-relaxed mx-auto mb-5">Are you looking for a unique and exhilarating way to let off some steam? Look no further!
                    </p>
                    <div className='mt-2 mx-auto text-center mb-5 md:mb-16'>
                        <Link className='text-center mt-2 mb-10' to="/resova">
                            <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                        </Link>
                    </div>
                </div>

                <div className='pb-3 md:pb-10 bg-black px-3'>
                    <div className=" bg-black ">

                        {/* Large device */}
                        <div className='hidden md:flex flex-col-reverse lg:flex-row mx-5 gap-5 mt-5 md:mt-20 lg:mt-7'>


                            <div className='lg:w-6/12 flex lg:flex-row mx-auto items-start '>
                                <div className='mx-auto text-center'>
                                    <p className="text-white md:px-5 text-base md:text-xl leading-relaxed mb-3">Welcome to the Mental Breakdown: A King's Eye Rage Room experience. Equipped with safety gear and your weapon of choice, come let out your frustrations by smashing and breaking a variety of items. Our rage room provides a cathartic and exhilarating release for anyone seeking a unique and therapeutic outlet. Let the Breakdown begin!
                                    </p>

                                    <p className="text-white md:px-5 lg:pt-5 text-xl leading-relaxed mb-3 font-bold">What is a Rage Room?</p>

                                    <p className="text-white md:px-5 text-base md:text-xl leading-relaxed mb-3 ">A Rage Room is a specially designed space where you can throw, bash, smash, strike, and break your way to stress-freedom. It's the ultimate relief of letting go, having fun, and smashing things without any consequences.</p>

                                    <p className="text-white md:px-5 lg:pt-5 text-xl leading-relaxed mb-3 font-bold">Why Choose King’s Eye Escape’s Rage Room?</p>

                                    <p className="text-white md:px-5 text-base md:text-xl leading-relaxed mb-7 ">Safe Environment: Our Rage Room is equipped with safety gear and monitored by trained staff to ensure a secure experience.</p>

                                    <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
                                        <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                                    </Link>

                                    {/* <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-10 mb-10 md:mb-0 w-full'>

                                        <div className='border-2 border-blue-500 text-white rounded-xl text-base md:text-xl text-center py-5 px-4'>
                                            <h3 className='text-xl md:text-2xl mb-4 font-semibold'>Customizable Packages</h3>
                                            <p>Choose from a variety of packages that suit your preferences and budget.</p>
                                        </div>

                                        <div className='border-2 border-blue-500 text-white rounded-xl text-base md:text-xl text-center py-5 px-4'>
                                            <h3 className='text-xl md:text-2xl mb-4 font-semibold'>Solo or Group Sessions</h3>
                                            <p>Whether you want some alone time to release stress or prefer a group activity, we've got you covered.
                                            </p>
                                        </div>

                                        <div className='border-2 border-blue-500 text-white rounded-xl text-base md:text-xl text-center py-5 px-4'>
                                            <h3 className='text-xl md:text-2xl mb-4 font-semibold'>Wide Range of Smashable Items</h3>
                                            <p>From glass bottles and ceramics to furniture and select items you may want to bring yourself, there will be an array of objects to smash and obliterate.</p>
                                        </div>

                                        <div className='border-2 border-blue-500 text-white rounded-xl text-base md:text-xl text-center py-5 px-4'>
                                            <h3 className='text-xl md:text-2xl mb-4 font-semibold'>Variety of Weapon Choices</h3>
                                            <p>We have variety of weapon choices. Such as Sledgehammers, Golf Clubs, Iron Poles, Bats, etc.</p>
                                        </div>
                                    </div> */}
                                </div>


                            </div>


                            <div className='lg:w-6/12'>
                                <img src={img} alt="/" className="object-contain border-0 lg:overflow-hidden text-center mx-auto flex justify-center gap-20 w-9/12" />
                            </div>
                        </div>



                        {/* Small Device */}

                        <div className='flex flex-col-reverse md:hidden lg:flex-row mx-5 gap-5 mt-5 md:mt-20 lg:mt-7'>


                            <div className='flex lg:flex-row mx-auto items-center lg:w-6/12'>
                                <div className='mx-auto text-center'>
                                    <p className="text-white md:px-5 lg:pt-10 text-base md:text-xl leading-relaxed mb-4 ">Welcome to the Mental Breakdown: A King's Eye Rage Room experience. Equipped with safety gear and your weapon of choice, come let out your frustrations by smashing and breaking a variety of items. Our rage room provides a cathartic and exhilarating release for anyone seeking a unique and therapeutic outlet. Let the Breakdown begin!
                                    </p>

                                    <div className='mt-5 mb-5 text-center'>
                                        <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
                                            <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                                        </Link>
                                    </div>

                                    <div className='mt-10'>
                                        <img src={rage1} alt="" />
                                    </div>

                                    <p className="text-white md:px-5 lg:pt-5 text-xl leading-relaxed mb-3 font-bold mt-5">What is a Rage Room?</p>

                                    <p className="text-white md:px-5 text-base md:text-xl leading-relaxed mb-4">A Rage Room is a specially designed space where you can throw, bash, smash, strike, and break your way to stress-freedom. It's the ultimate relief of letting go, having fun, and smashing things without any consequences.</p>

                                    <div className='mt-5 mb-10'>
                                        <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
                                            <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                                        </Link>
                                    </div>

                                    <img src={rage2} alt="" />

                                    <p className="text-white mt-5 md:px-5 lg:pt-5 text-xl leading-relaxed mb-3 font-bold">Why Choose King’s Eye Escape’s Rage Room?</p>

                                    <p className="text-white md:px-5 text-base md:text-xl leading-relaxed mb-4">Safe Environment: Our Rage Room is equipped with safety gear and monitored by trained staff to ensure a secure experience.</p>

                                    <div className='mt-5 mb-10'>
                                        <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
                                            <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                                        </Link>
                                    </div>
                                </div>


                            </div>


                            <div className='lg:w-6/12'>
                                <img src={img} alt="/" className="object-contain border-0 lg:overflow-hidden text-center mx-auto flex justify-center gap-20" />
                            </div>
                        </div>
                    </div>

                </div>


                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 md:px-20 mt-10 md:mt-10 mb-10 md:mb-0'>

                    <div className='border-2 border-blue-500 text-white rounded-xl text-base md:text-xl text-center py-5 px-4'>
                        <h3 className='text-2xl md:text-2xl mb-4 font-semibold'>Customizable Packages</h3>
                        <p>Choose from a variety of packages that suit your preferences and budget.</p>
                    </div>

                    <div className='border-2 border-blue-500 text-white rounded-xl text-base md:text-xl text-center py-5 px-4'>
                        <h3 className='text-2xl md:text-2xl mb-4 font-semibold'>Solo or Group Sessions</h3>
                        <p>Whether you want some alone time to release stress or prefer a group activity, we've got you covered.
                        </p>
                    </div>

                    <div className='border-2 border-blue-500 text-white rounded-xl text-base md:text-xl text-center py-5 px-4'>
                        <h3 className='text-2xl md:text-2xl mb-4 font-semibold'>Wide Range of Smashable Items</h3>
                        <p>From glass bottles and ceramics to furniture and select items you may want to bring yourself, there will be an array of objects to smash and obliterate.</p>
                    </div>

                    <div className='border-2 border-blue-500 text-white rounded-xl text-base md:text-xl text-center py-5 px-4'>
                        <h3 className='text-2xl md:text-2xl mb-4 font-semibold'>Variety of Weapon Choices</h3>
                        <p>We have variety of weapon choices. Such as Sledgehammers, Golf Clubs, Iron Poles, Bats, etc.</p>
                    </div>
                </div>
                <div className='mt-5 mb-10 text-center'>
                    <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
                        <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                    </Link>
                </div>
            </div>
            <Link to='/resova'>
                <BookNow />
            </Link>
        </motion.div>


    );
};

export default RageRoom;