import React from 'react';
import "./JobFeature.css"
import { BeakerIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobFeature = ({feature}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements} = feature;
    return (
        <div className='feature p-5 border rounded'>
            <img src={company_logo} alt="" />
            <h1 className='text-2xl font-semibold mt-5'>{job_title}</h1>
            <h4 className='mb-3'>{company_name}</h4>
            <div className='flex text-cyan-600'>
                <p className='rounded border border-2 border-cyan-600 p-1 me-3'>{remote_or_onsite}</p>
                <p className='rounded border border-2 border-cyan-600 p-1'>{fulltime_or_parttime}</p>
            </div>
            <div className='flex gap-4 my-4'>
                <p><MapPinIcon className="h-6 w-6 text-cyan-600 inline-flex" />{location}</p>
                <p><span><CurrencyDollarIcon className="h-6 w-6 text-cyan-600 inline-flex" />Salary: {salary}</span></p>
            </div>
            <Link to={``}><button className='bg-cyan-600 text-white p-1 px-2 rounded'>View Details</button></Link>
        </div>
    );
};

export default JobFeature;