import React, { useEffect, useState } from 'react';
import backgroundBanner from "../../assets/All Images/Vector-1.png"
import { getShoppingCart } from '../../Utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails';
import Banner1 from "../../assets/All Images/Vector-1.png"
import Banner from "../../assets/All Images/Vector.png"

const AppliedJob = () => {
    // step 1
    // const [jobFeatures, setJobFeatures] = useState([]);
    // useEffect(() => {
    //     fetch("job-features.json")
    //         .then(res => res.json())
    //         .then(data => setJobFeatures(data.jobs))
    // }, []);

    // const storedJob = getShoppingCart();
    // for(const id in storedJob){
    //     const storedJobDetails = jobFeatures.find(job => job.id === id)
    //     console.log(storedJobDetails)
    // }

    // step 2
    // const getAllJob = useLoaderData();
    // const allJob = getAllJob.jobs;
    // console.log(allJob)

    // step 3
    // const savedAppliedJob = useLoaderData();
    // const [appliedJobArray, setAppliedJobArray] = useState(savedAppliedJob)
    // console.log(savedAppliedJob);

    // const [jobs, setJobs] = useState([]);
    // useEffect(() => {
    //     const jobsData = JSON.parse(localStorage.getItem("jobs")) || [];
    //     setJobs(jobsData);
    // }, []);

    const [selectedButton, setSelectedButton] = useState(null);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const jobsData = JSON.parse(localStorage.getItem("jobs")) || [];
        setJobs(jobsData);
    }, []);
    
    return (
        <div className=''>
            <div className='w-full flex justify-between items-center mb-8'>
                <img src={Banner} className='' />
                <h1 className='text-[32px] font-bold'>Applied Jobs</h1>
                <img src={Banner1} className='' />
            </div>
            <div className='my-10'>
                <div>
                    <button className='bg-cyan-600 p-2 px-3'>Remote</button>
                </div>
                {
                    jobs.map(job => <AppliedJobDetails
                        key={job.key}
                        job={job}
                    ></AppliedJobDetails>)
                }
                {
                    jobs.length < 1 ? <h2 className='p-28 text-4xl text-center font-bold'>Not Job Applied Yet!!</h2> : ""
                }
            </div>
        </div>
    );
};

export default AppliedJob;