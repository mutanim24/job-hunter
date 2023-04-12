import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'



const AppliedJobDetails = ({ job }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, salary, location } = job;
    return (
        <div className='mx-20'>
            <div className='grid grid-cols-4 border p-8 rounded my-5'>
                <img className='m-auto bg-gray-50' src={company_logo} alt="" />
                <div className='col-span-2 space-y-3'>
                    <h2 className='text-2xl font-semibold'>{job_title}</h2>
                    <p>{company_name}</p>
                    <div className='flex text-cyan-600 justify-center md:justify-start'>
                        <p className='rounded border border-2 border-cyan-600 p-1 px-3 me-3'>{remote_or_onsite}</p>
                        <p className='rounded border border-2 border-cyan-600 p-1 px-3'>{fulltime_or_parttime}</p>
                    </div>
                    <div className='flex items-center gap-4 my-4 justify-center md:justify-start'>
                        <p><MapPinIcon className="h-6 w-6 text-cyan-600 inline-flex" /> {location}</p>
                        <p><span><CurrencyDollarIcon className="h-6 w-6 text-cyan-600 inline-flex" /> Salary: {salary}</span></p>
                    </div>
                </div>
                <div className='m-auto'>
                    <button className='bg-cyan-600 text-white p-2 px-3 rounded'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobDetails;