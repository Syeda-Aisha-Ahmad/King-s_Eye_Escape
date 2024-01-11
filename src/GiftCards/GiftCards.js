import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BookNow from '../BookNow/Main';
import giftCard from '../../build/giftcards.png';
import './GiftCards.css';
import logo from '../../build/Logo.png';

const GiftCards = () => {
    useEffect(() => {
        document.getElementById("root").scrollIntoView();
    }, []);
    return (
        <div className='section-margin'>
            <div>
                <Helmet>
                    <title>Gift Certificates</title>
                    <meta name="description" content="Kick back and rel-AX here at our Ax throwing lounge.  Expert Coaching Available. Safety Lessons and training included." />

                </Helmet>
                <h1 className='text-3xl font-semibold pt-5 text-center lg:hidden'><span className='text-blue-500'>Gift</span> <span className='text-white'>Certificates</span></h1>

                {/* large devices */}
                <div className='hidden lg:flex xl:flex items-start '>
                    <div className='w-6/12 mx-auto relative'>
                        <div className='height relative'>
                            <img src={giftCard} className="img-size" alt="" />
                            <p className='card-text'>
                                <img src={logo} className="img-width" alt="" />
                                <p className=' text-center texts'>Gift Certificates</p>
                            </p>
                        </div>
                    </div>

                    <div className='w-6/12  py-20 text-lg text-gray-200'>
                        <h1 className='text-3xl font-semibold left-texts'><span className='text-blue-500 mb-5'>Gift</span> Certificates</h1>
                        <p className='pt-5 w-11/12'>
                            Looking for a sensational gift for any occasion? Whether it's for a birthday, or for somebody who needs cheering up, or to reward someone for a job well done, or to gift your family a ton of fun.. King's Eye Certificates are where it's at!
                        </p>
                        <div className='mt-5 mb-10 w-full'>
                            <Link className=' mt-2 mb-10 lg:my-7' to="/resova">
                                <button className='text-white font-bold myButton w-full mx-auto'>BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>



                {/* small devices */}
                <div className='flex lg:hidden flex-col lg:flex-row items-start'>
                    <div className='lg:w-6/12 mx-auto relative'>
                        <div className='lg:height relative'>
                            <img src={giftCard} className="img-size-small lg:img-size" alt="" />
                            <p className='card-text-small lg:card-text'>
                                <img src={logo} className="img-width-small lg:img-width" alt="" />
                                <p className=' text-center text-small lg:text'>Gift Certificates</p>
                            </p>
                        </div>
                    </div>

                    <div className='lg:w-6/12 px-5 lg:px-0 py-0 lg:py-20 text-lg text-gray-200'>
                        <h1 className='text-3xl font-semibold pt-5 hidden lg:grid'><span className='text-blue-500'>Gift</span> Certificates</h1>
                        <p className='lg:pt-5 w-full text-center lg:text-left md:w-10/12 mx-auto lg:w-11/12'>
                            Looking for a sensational gift for any occasion? Whether it's for a birthday, or for somebody who needs cheering up, or to reward someone for a job well done, or to gift your family a ton of fun.. King's Eye Certificates are where it's at!
                        </p>
                        <div className='mt-5 mb-10 w-full text-center lg:text-left'>
                            <Link className=' mt-2 mb-10 lg:my-7' to="/resova">
                                <button className='text-white font-bold myButton w-full mx-auto'>BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <Link to='/resova'>
                    <BookNow />
                </Link>

            </div>
        </div>
    );
};

export default GiftCards;