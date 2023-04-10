import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobDetails = useLoaderData();
    console.log(jobDetails);
    return (
        <div>
            job details
        </div>
    );
};

export default JobDetails;