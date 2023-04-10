import React from 'react';
import "./JobFeature.css"
import { BeakerIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobFeature = ({feature}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements} = feature;
    return (
        <div className='feature p-3 border rounded'>
            <img src={company_logo} alt="" />
            <h1>{job_title}</h1>
            <h4>{company_name}</h4>
            <div className='flex'>
                <p className='rounded border border-2 border-cyan-400 p-1 me-3'>{remote_or_onsite}</p>
                <p className='rounded border border-2 border-cyan-400 p-1'>{fulltime_or_parttime}</p>
            </div>
            <div className='grid grid-cols-2'>
                <p><MapPinIcon className="h-6 w-6 text-cyan-500" />{location}</p>
                <p><span><CurrencyDollarIcon className="h-6 w-6 text-cyan-500" />{salary}</span></p>
            </div>
            <Link><button className='bg-cyan-500 text-white p-1 rounded'>View Details</button></Link>
        </div>
    );
};

export default JobFeature;