import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <h3>Investment vs Revenue</h3>
             <BarChart width={500} height={400} data={data}>
            <Bar dataKey={'uv'} fill="#8884d8"></Bar>
            <Bar dataKey={'pv'} fill="#82ca9d"></Bar>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
       </BarChart>
       </div>
    );
};

export default MyBarChart;