import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BookNow from '../BookNow/Main';

const FAQ = () => {

    useEffect(() => {
        document.getElementById("root").scrollIntoView();
    }, []);

    return (

        <>
            <Helmet>
                <title>FAQ</title>
                <meta name="description" content="Kick back and rel-AX here at our Ax throwing lounge.  Expert Coaching Available. Safety Lessons and training included." />

            </Helmet>


            <div>
                <div className='text-white w-11/12 mx-auto'>
                    <div className='text-center my-16'>
                        <h1 className='text-3xl lg:text-5xl mb-5 md:mb-7 font-semibold'>Frequently <span className='text-blue-500'>Asked Questions</span></h1>
                        <div className="border-gray-100 border-b-4 w-9/12 md:w-7/12 lg:w-40 mb-5 self-center xl:w-5/12 xl:mb-6 mx-auto" />
                        <p className='text-base md:text-xl lg:text-xl'>Momma always said “Don’t be afraid to ask”. So get askin’!</p>
                    </div>

                    <div>
                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>What is there to do at King’s Eye?</h2>
                            <p className='text-base md:text-xl lg:text-xl'>You come to King’s Eye to HAVE AN AMAZING TIME. We have Axe Throwing, Escape Rooms, and a RAGE ROOM. Grab the nearest people to you and head on by!</p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>Do we get grouped with strangers?</h2>
                            <p className='text-base md:text-xl lg:text-xl'>Not unless you invited randos to join you! Our experiences are completely private.</p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>Do you host for large groups or corporate events?</h2>
                            <p className='text-base md:text-xl lg:text-xl'>Absolutely! We’ve hosted dozens of fun events over the years! We can set up details and schedule slots over the phone or via email! Just reach out to us and we’ll even recommend the best catering nearby! </p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>Is this a good place to have my party?</h2>
                            <p className='text-base md:text-xl lg:text-xl'>Bachelor/Bachelorette, Birthday, Wedding, Costume, Coming out.. Whatever it is, we got you covered! You’re welcome to bring cake and snacks too!
                            </p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>How much is it to play?</h2>
                            <p className='text-base md:text-xl lg:text-xl'>Our tickets range from $30-$50, depending on how many people there are (more people = lower price). We also do special discounted rates for community groups like sports teams, girl scouts and boy scouts, school and daycare faculty, support groups, and clubs!
                            </p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>How early should I arrive?</h2>
                            <p className='text-base md:text-xl lg:text-xl'>Please try to be in the building within 10 minutes of your reservation in order to sign waivers and use facilities!
                            </p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>What if I arrive past my scheduled time?
                            </h2>
                            <p className='text-base md:text-xl lg:text-xl'>If we have a group immediately after yours, we’ll do our best to make sure you maximize the time you can get without sacrificing any of theirs. Otherwise we’re pretty chill about it. No refunds are given if you can’t make an appointment because we would lose out on the earnings of that timeslot.

                            </p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>How long do I have to escape?
                            </h2>
                            <p className='text-base md:text-xl lg:text-xl'>You’re here for a good time, not a long time! So about an hour or so..
                            </p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>Can I add to the reservation if more people want to join?
                            </h2>
                            <p className='text-base md:text-xl lg:text-xl'>Yep! We recommend you book the minimum amount you know will come for sure, and we can accept payment for the rest on site! Cash, Venmo, Zelle, Apple Pay, it’s all good!
                            </p>
                        </div>

                        <div className='my-10 text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl mb-3 text-blue-500'>How many total people can I bring?
                            </h2>
                            <p className='text-base md:text-xl lg:text-xl'>It depends! Our axe throwing lounge can fit up to 10, The Harvest Escape Room can fit up to 10, The Xtraction Escape Room can fit 7, and The Mental Breakdown Rage Room can fit 6
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/resova'>
                <BookNow />
            </Link>
        </>


    );
};

export default FAQ;