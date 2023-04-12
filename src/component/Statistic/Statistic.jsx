// import React from 'react';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const marks = [
        { assignment: "ass-1", mark: 60 },
        { assignment: "ass-2", mark: 60 },
        { assignment: "ass-3", mark: 58 },
        { assignment: "ass-4", mark: 54 },
        { assignment: "ass-5", mark: 58 },
        { assignment: "ass-6", mark: 60 }
    ];
    return (
        <div className='my-20'>
            <AreaChart
                width={1000}
                height={300}
                data={marks}
               
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#00ACC1," fill="#00ACC1," />
            </AreaChart>
        </div>
    );
};

export default Statistic;