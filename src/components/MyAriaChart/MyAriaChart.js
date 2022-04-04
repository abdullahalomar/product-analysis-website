import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const MyAriaChart = () => {
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
          name: 'Jun',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <h3>Investment vs Revenue</h3>
             <AreaChart width={500} height={500} data={data}>
            <Area dataKey={'pv'}></Area>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
       </AreaChart>
       </div>
    );
};

export default MyAriaChart;