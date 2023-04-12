import React, { useEffect, useState } from 'react';
import backgroundBanner from "../../assets/All Images/Vector-1.png"
import { getShoppingCart } from '../../Utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
    // step 1
    // const [jobFeatures, setJobFeatures] = useState([]);
    // useEffect(() => {
    //     fetch("job-features.json")
    //         .then(res => res.json())
    //         .then(data => setJobFeatures(data.jobs))
    // }, []);

    // step 2
    // const getAllJob = useLoaderData();
    // const allJob = getAllJob.jobs;
    // console.log(allJob)

    // step 3
    const savedAppliedJob = useLoaderData();
    const [appliedJobArray, setAppliedJobArray] = useState(savedAppliedJob)
    // console.log(savedAppliedJob);

   

    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center p-7'>Applied Job</h1>
            </div>
            <div>
                {
                    console.log(appliedJobArray)
                }
            </div>
        </div>
    );
};

export default AppliedJob;