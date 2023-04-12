import React, { useEffect, useState } from 'react';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails';
import Banner1 from "../../../public/assets/All Images/Vector-1.png";
import Banner from "../../../public/assets/All Images/Vector.png";

const AppliedJob = () => {
    // const [selectedButton, setSelectedButton] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("All");

    useEffect(() => {
        const jobsData = JSON.parse(localStorage.getItem("jobs")) || [];
        setJobs(jobsData);
        setFilteredJobs(jobsData); // set all jobs as default filtered jobs
    }, []);

    const handleRemote = () => {
        const remoteJob = jobs.filter(jb => jb.remote_or_onsite === "Remote");
        setFilteredJobs(remoteJob);
        setSelectedFilter("Remote"); // update selected filter state
    }

    const handleOnsite = () => {
        const onsiteJob = jobs.filter(jb => jb.remote_or_onsite === "Onsite");
        setFilteredJobs(onsiteJob);
        setSelectedFilter("Onsite"); // update selected filter state
    }

    const handleAll = () => {
        setFilteredJobs(jobs);
        setSelectedFilter("All"); // update selected filter state
    }

    return (
        <div className=''>
            <div className='w-full flex justify-between items-center mb-8'>
                <img src={Banner} className='' />
                <h1 className='text-[32px] font-bold'>Applied Jobs</h1>
                <img src={Banner1} className='' />
            </div>
            <div className='my-10'>
                <div className='text-center space-x-4'>
                    <button onClick={handleAll} className='bg-cyan-600 p-2 px-3 text-white font-semibold rounded text-center'>All</button>
                    <button onClick={handleRemote} className='bg-cyan-600 p-2 px-3 text-white font-semibold rounded text-center'>Remote</button>
                    <button onClick={handleOnsite} className='bg-cyan-600 p-2 px-3 text-white font-semibold rounded text-center'>Onsite</button>
                </div>
                {
                    filteredJobs.map(job => <AppliedJobDetails
                        key={job.key}
                        job={job}
                    ></AppliedJobDetails>)
                }
                {
                    jobs.length < 1 ? <h2 className='p-28 text-2xl text-center font-semibold'>Not Job Applied Yet!!</h2> : ""
                }
            </div>
        </div>
    );
};

export default AppliedJob;