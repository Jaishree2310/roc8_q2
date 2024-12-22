import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const LineChartComponent = ({ data }) => {
    // console.log(data)
    const transformedData = data.map(item => ({
        
        date: item.Day,  // Use the 'Day' field as the date
        timeSpent: parseInt(item.A)  // You can choose any field (A, B, etc.) for the timeSpent
      }));
  return (
    <LineChart width={800} height={400} data={transformedData}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="timeSpent" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartComponent;










