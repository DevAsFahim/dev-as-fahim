import React from 'react';
import profile from '../../assets/images/profile.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner relative w-full lg:w-[1070px] m-auto h-screen flex justify-center flex-col'>
            <p className='text-warning text-2xl font-bold mb-4'>Hi there, I am</p>
            <h1 className="md:text-7xl text-4xl font-bold text-slate-50 mb-5">A S Fahim.</h1>
            <h1 className="md:text-7xl text-4xl font-bold text-slate-500 mb-6">MERN Stack Developer.</h1>
            <p className="text-slate-500 md:w-1/2">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. I have good hand on backend also.</p>
            {/* <img src={profile} alt="" /> */}
        </div>
    );
};

export default Banner;