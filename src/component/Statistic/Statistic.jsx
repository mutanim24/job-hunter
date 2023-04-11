// import React from 'react';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

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
        <div>
            <PieChart width={800} height={400}>
                <Pie data={marks} dataKey="mark" fill="#8884d8" />
                <Tooltip ></Tooltip>
                <Sector></Sector>
                {/* <Pie data={marks} dataKey="assignment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label /> */}
            </PieChart>
        </div>
    );
};

export default Statistic;