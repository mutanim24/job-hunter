import React from 'react';

const JobCategory = ({category}) => {
    const {image, jobAvailable, jobCategory} = category;
    return (
        <div className='border p-6 bg-gray-50 rounded'>
            <img src={image} alt="" />
            <h2 className='text-2xl font-semibold mt-5 mb-4'>{jobCategory}</h2>
            <p>{jobAvailable} Job Available</p>
        </div>
    );
};

export default JobCategory;