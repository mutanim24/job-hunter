import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import JobFeature from '../JobFeature/JobFeature';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [jobFeatures, setJobFeatures] = useState([])
    const [seeAllJob, setSeeAllJob] = useState(false);

    const handleViewDetails = (id) => {
        navigate(`/jobdetails/${id}`);
    };

    useEffect(() => {
        fetch("category.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    useEffect(() => {
        fetch("job-features.json")
            .then(res => res.json())
            .then(data => setJobFeatures(data.jobs))
    }, [])
    return (
        <div className='mx-20'>
            <div>
                <Banner></Banner>
            </div>
            <div className='my-16'>
                <div className="text-center">
                    <h1 className='text-4xl md:text-5xl font-bold'>Job Category List</h1>
                    <p className='my-8 md:my-9'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-4 gap-5'>
                    {
                        categories.map((category, index) => <JobCategory
                            key={index}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </div>
            <div className=''>
                <div className="text-center">
                    <h1 className='text-4xl md:text-5xl font-bold'>Featured Jobs</h1>
                    <p className='my-8 md:my-9'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 mb-6'>
                    {
                        jobFeatures.slice(0, seeAllJob ? 6 : 4).map(feature => <JobFeature
                            key={feature.id}
                            handleViewDetails={handleViewDetails}
                            feature={feature}
                        ></JobFeature>)
                    }

                </div>
                <div className='text-center'>
                    {
                        !seeAllJob && <button onClick={() => setSeeAllJob(true)} className='bg-cyan-600 text-white p-2 px-3 rounded my-8'>See All Job</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;