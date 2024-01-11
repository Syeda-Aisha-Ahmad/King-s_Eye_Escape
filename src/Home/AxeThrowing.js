import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../build/AxeLounge2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

const AxeThrowing = () => {

    const AxeThrowingInfo = [
        "Ages 8+ (with supervision)",
        "Up to 10 participants",
        "$50pp/1hr for 2 players",
        "$40pp/1hr for 3+ players",
        "Safety training included",
        "Walk-ins welcome (with availability)"
    ]

    return (

        <div>

            <div className=' gap-5 px-3 lg:hidden'>
                <div className=" bg-black ">
                    <h1 className="text-white text-center mt-3 md:mt-0 bg-black text-3xl md:text-5xl xl:text-6xl xl:leading-relaxed font-semibold">Our <span className='text-blue-500'>Axe Throwing</span> Lounge</h1>
                    <div className="bg-black border-b-4 w-40 py-2 mb-5 self-center mx-auto xl:w-2/4 xl:mb-6" />
                    <img src={img} alt="/" className="md:object-contain mb-5 border-0 text-center mx-auto flex justify-center img-height" />

                    <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row w-full mx-auto items-center mb-3'>
                        <div className=' mx-auto text-center text-gray-200'>
                            <p className=" text-white lg:px-20 lg:pt-10 md:text-2xl mb-5 px-2 w-11/12 lg:w-10/12 mx-auto">Enjoy our AXE-tremely personal and AXE-ceptional service in our private indoor lounge! Learn how to throw various weapons safely from our IntellAXEuals! Stop being BOARD and come out and AXually have a good time! You probably won’t mAX out your credit card because that would be unAXEceptable!</p>

                            {AxeThrowingInfo.map((info, index) => {
                                return (
                                    <div className=" mb-5 md:mb-7 text-center">
                                        <FontAwesomeIcon icon={faCrosshairs} size='1x' style={{ color: 'white' }} />
                                        <p className="inline-block text-gray-200 mx-3 md:text-2xl">{info}</p>
                                    </div>
                                )
                            })}

                            <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
                                <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                            </Link>
                        </div>


                    </div>
                </div>


            </div>

            <div className=' bg-black px-3 hidden lg:grid'>
                <div className=" bg-black ">
                    <h1 className="text-white lg:pt-6 text-center bg-black text-3xl md:text-5xl xl:text-6xl xl:leading-relaxed mt-0 font-semibold">Our <span className='text-blue-500'>Axe Throwing</span> Lounge</h1>
                    <div className="bg-black border-b-4 w-40 py-3 self-center mx-auto xl:w-2/4 xl:mb-6" />

                    <div className='flex flex-row-reverse mx-5 gap-5 mt-7'>

                        <div className='w-6/12'>
                            <img src={img} alt="/" className="object-contain border-0 lg:overflow-hidden text-center mx-auto flex justify-center w-10/12 gap-20" />
                        </div>

                        <div className='flex lg:flex-row mx-auto items-center w-6/12'>
                            <div className='mx-auto text-center'>
                                <p className=" text-gray-200 px-5 lg:pt-10 text-base leading-relaxed md:text-xl mb-5 ">Enjoy our AXE-tremely personal and AXE-ceptional service in our private indoor lounge! Learn how to throw various weapons safely from our IntellAXEuals! Stop being BOARD and come out and AXually have a good time! You probably won’t mAX out your credit card because that would be unAXEceptable!</p>

                                {AxeThrowingInfo.map((info, index) => {
                                    return (
                                        <div className=" mb-5 md:mb-7 text-center">
                                            <FontAwesomeIcon icon={faCrosshairs} size='1x' style={{ color: 'white' }} />
                                            <p className="inline-block text-gray-200 mx-3 text-base md:text-xl">{info}</p>
                                        </div>
                                    )
                                })}

                                <Link className='text-center mt-2 mb-10 lg:my-7' to="/resova">
                                    <button className='text-white font-bold myButton mx-auto'>BOOK NOW</button>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default AxeThrowing;