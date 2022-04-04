import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Sat',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Sun',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mon',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Tue',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Wed',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Thi',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Fri',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <h3>Day Wise Sell</h3>
             <LineChart width={500} height={400} data={data}>
            <Line dataKey={'uv'}></Line>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </LineChart>
        </div>
    );
};

export default MyLineChart;