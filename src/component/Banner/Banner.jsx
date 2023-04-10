import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='banner flex items-center'>
            <div>
                <h1 className='text-7xl font-bold'>One Step Closer To Your <br /><span className='text-cyan-500'>Dream Job </span></h1>
                <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='text-white text-2xl rounded bg-gradient-to-r from-cyan-600 to-purple-500 p-1'>Get Start</button>
            </div>
            <img className='' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;