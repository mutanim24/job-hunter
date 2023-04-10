import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import JobFeature from '../JobFeature/JobFeature';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [jobFeatures, setJobFeatures] = useState([])
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
        <div className='mx-12'>
            <div>
                <Banner></Banner>
            </div>
            <div className='text-center my-16'>
                <h1 className='text-5xl font-semibold'>Job Category List</h1>
                <p className='my-9'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-4 gap-2 text-center'>
                    {
                        categories.map((category, index) => <JobCategory
                            key={category.index}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </div>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold'>Featured Jobs</h1>
                <p className='my-9'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 gap-6'>
                    {
                        jobFeatures.map(feature => <JobFeature
                            key={feature.id}
                            feature={feature}
                        ></JobFeature>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;