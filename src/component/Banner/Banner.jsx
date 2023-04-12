import React from 'react';
import bannerImg from '../../../public/assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div class="banner flex flex-col md:flex-row items-center">
            <div class="text-center md:text-left md:w-6/12">
                <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
                    One Step Closer To Your <br class="hidden lg:block" /><span class="text-cyan-500">Dream Job</span>
                </h1>
                <p class="text-sm md:text-base lg:text-lg mb-8 md:mb-12">
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button class="text-white text-lg rounded-lg bg-gradient-to-r from-cyan-600 to-purple-500 p-2 px-4">
                    Get Started
                </button>
            </div>
            <img class="w-full md:w-6/12" src={bannerImg} alt="" />
        </div>

    );
};

export default Banner;