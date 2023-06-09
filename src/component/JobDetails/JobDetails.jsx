import React, { useState } from 'react';
import "./JobDetails.css"
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import Banner1 from "../../../public/assets/All Images/Vector-1.png";
import Banner from "../../../public/assets/All Images/Vector.png";


const JobDetails = () => {
    const [addedApplied, setAddedApplied] = useState([]);
    const { id } = useParams();
    const getFeatures = useLoaderData();
    const features = getFeatures.jobs;
    const data = features.find((feature) => feature.id === parseInt(id));
    const { company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = data;

    // const jobDetails = useLoaderData();
    // console.log(data);


    const handleApplied = (data) => {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        // Check if the job already exists in localStorage
        const jobExists = jobs.some((job) => job.id === data.id);
        if (!jobExists) {
            jobs.push(data);
            localStorage.setItem("jobs", JSON.stringify(jobs));
        }
    }

    return (
        <div className='mx-20'>
            <div className='w-full flex justify-between items-center mb-8'>
                <img src={Banner} className='' />
                <h1 className='text-[32px] font-bold'>Job Details</h1>
                <img src={Banner1} className='' />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className='col-span-2 space-y-4 p-4'>
                    <p><span className='font-bold'>Job Description: </span>{job_description}</p>
                    <p><span className='font-bold'>Job Responsibility: </span>{job_responsibility}</p>
                    <p><span className='font-bold'>Educational Requirements: </span><br />{educational_requirements}</p>
                    <p><span className='font-bold'>Experiences: </span><br />{experiences}</p>
                </div>
                <div>
                    <div className='rounded bg-gray-50 space-y-3 p-8'>
                        <h2 className='font-bold text-2xl'>Job Details</h2>
                        <hr />
                        <p>
                            <CurrencyDollarIcon className="h-5 w-5 text-cyan-600 inline-flex" /> <span className='font-semibold'>Salary: </span> {salary}
                        </p>
                        <p>
                            <BriefcaseIcon className="h-5 w-5 text-cyan-600 inline-flex" /> <span className='font-semibold'>Job Title: </span> {job_title}
                        </p>
                        <h2 className='text-1xl font-bold'>Contact Information</h2>
                        <hr />
                        <p>
                            <PhoneIcon className="h-5 w-5 text-cyan-600 inline-flex" /> <span className='font-semibold'>Phone: </span> {contact_information.phone}
                        </p>
                        <p>
                            <EnvelopeIcon className="h-5 w-5 text-cyan-600 inline-flex" /> <span className='font-semibold'>Email: </span> {contact_information.email}
                        </p>
                        <p>
                            <MapPinIcon className="h-5 w-5 text-cyan-600 inline-flex" /> <span className='font-semibold'>Address: </span> {location}
                        </p>
                    </div>
                    <button onClick={() => handleApplied(data)} className='w-full text-white bg-cyan-600 hover:bg-cyan-800 p-2 rounded my-8'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;