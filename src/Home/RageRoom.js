import React from 'react';
import rage from '../../build/rageroom.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

const RageRoom = () => {

    const AxeThrowingInfo = [
        "Ages 18+",
        "Tiered Pricing for 1-6 Players (10 items each)",
        "Additional Breakables for sale on site",
        // "Variety of Weapons, Golf Clubs, Iron Poles, Bats, etc.",
        "Weapons and Gear provided on site!",
        "Bring Your Own Breakables",
        "NO food items, light bulbs, wet/unclean objects",
        "NO aerosol cans, paint cans, or electronics",
        "No outside weapons allowed",
        "Walk-ins Welcome (when available)"
    ]
    return (
        <div>
            <div className='pb-10 bg-black px-3 lg:hidden'>
                <div className=" bg-black ">
                    <h1 className="text-white lg:pt-0 text-center bg-black text-3xl md:text-5xl xl:text-6xl xl:leading-relaxed mt-8 md:mt-0 font-semibold">Our <span className='text-blue-500'>Rage Room</span></h1>
                    <div className="bg-black border-b-4 w-40 pb-3 self-center mx-auto xl:w-2/4 xl:mb-6" />
                    <img src={rage} alt="/" className="md:object-contain my-5 border-0 lg:overflow-hidden text-center mx-auto flex justify-center img-height" />

                    <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row w-full mx-auto items-center'>
                        <div className=' mx-auto text-center'>
                            <p className=" text-gray-200 px-2 w-11/12 mx-auto lg:px-20 lg:pt-10 md:text-2xl mb-5 ">Our rage room provides a cathartic and exhilarating release for anyone seeking a unique and therapeutic outlet. The Room is equipped with safety gear and monitored by trained staff to ensure a secure experience.
                            </p>

                            {AxeThrowingInfo.map((info, index) => {
                                return (
                                    <div className=" mb-5 md:mb-7 text-center">

                                        <p className="inline-block text-gray-200 mx-3 md:text-2xl">
                                            <FontAwesomeIcon icon={faCrosshairs} size='1x' style={{ color: 'white' }} className="mr-4" />
                                            {info}
                                        </p>
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





            <div className='pb-10 bg-black px-3 hidden lg:grid'>
                <div className=" bg-black ">
                    <h1 className="text-white lg:pt-6 text-center bg-black text-3xl md:text-5xl xl:text-6xl xl:leading-relaxed mt-0 font-semibold">Our <span className='text-blue-500'>Rage Room</span></h1>
                    <div className="bg-black border-b-4 w-40 py-3 self-center mx-auto xl:w-2/4 xl:mb-6" />

                    <div className='flex flex-row mx-5 gap-5 mt-7'>
                        <div className='w-6/12'>
                            <img src={rage} alt="/" className="object-contain border-0 lg:overflow-hidden text-center mx-auto flex justify-center w-10/12 gap-20" />
                        </div>

                        <div className='flex lg:flex-row mx-auto items-center w-6/12'>
                            <div className='mx-auto text-center'>
                                <p className=" text-gray-200 px-5 lg:pt-10 text-base md:text-xl leading-relaxed mb-5 ">Our rage room provides a cathartic and exhilarating release for anyone seeking a unique and therapeutic outlet. The Room is equipped with safety gear and monitored by trained staff to ensure a secure experience.</p>

                                {AxeThrowingInfo.map((info, index) => {
                                    return (
                                        <div className=" mb-5 md:mb-7 text-center">
                                            <FontAwesomeIcon icon={faCrosshairs} size='1x' style={{ color: 'white' }} />
                                            <p className="inline-block text-gray-200 mx-3 text-base md:text-xl leading-relaxed">{info}</p>
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

export default RageRoom;