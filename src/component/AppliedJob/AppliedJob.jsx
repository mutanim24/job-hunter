import React from 'react';
import backgroundBanner from "../../assets/All Images/Vector-1.png"

const AppliedJob = () => {
    return (
        <div>
            <div style={{backgroundImage: `url(${backgroundBanner})`}}>
                <h1 className='text-4xl font-bold text-center p-9'>Applied Job</h1>
            </div>
        </div>
    );
};

export default AppliedJob;