import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='banner grid md:grid-cols-2 gap-4 flex items-center'>
            <div className='text-center md:text-left'>
                <h1 className='text-5xl md:text-7xl font-bold'>One Step <br /> Closer To Your <br /><span className='text-cyan-500'>Dream Job </span></h1>
                <p className='my-5 me-12'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='text-white text-xl rounded bg-gradient-to-r from-cyan-600 to-purple-500 p-1 px-3'>Get Start</button>
            </div>
            <img className='' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;