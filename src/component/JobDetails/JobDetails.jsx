import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();
    const getFeatures = useLoaderData();
    const features = getFeatures.jobs;
    const data = features.find((feature) => feature.id === parseInt(id));
    const { company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = data;

    // const jobDetails = useLoaderData();
    console.log(data);
    return (
        <div className='mx-20'>
            <div>
                <h1 className='text-4xl font-bold text-center p-4 md:p-9'>Job Details</h1>
            </div>
            <div class="grid grid-cols-2">
                <div class="col-span-1">Column 1</div>
                <div class="col-span-2">Column 2</div>
            </div>

        </div>
    );
};

export default JobDetails;