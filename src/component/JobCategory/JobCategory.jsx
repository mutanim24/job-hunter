import React from 'react';

const JobCategory = ({category}) => {
    const {image, jobAvailable, jobCategory} = category;
    return (
        <div className='mx-auto border p-10'>
            <img src={image} alt="" />
            <h2 className='text-2xl font-semibold'>{jobCategory}</h2>
            <p>{jobAvailable} Job Available</p>
        </div>
    );
};

export default JobCategory;