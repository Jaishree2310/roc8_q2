// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

// const BarChartComponent = ({ data, onBarClick }) => {
//     const transformedData = data.flatMap(item => [
//         { feature: 'A', timeSpent: parseInt(item.A) },
//         { feature: 'B', timeSpent: parseInt(item.B) },
//         { feature: 'C', timeSpent: parseInt(item.C) },
//         { feature: 'D', timeSpent: parseInt(item.D) },
//         { feature: 'E', timeSpent: parseInt(item.E) },
//         { feature: 'F', timeSpent: parseInt(item.F) },
//       ]);
//       console.log(transformedData[1])
      
//   return (
//     <BarChart width={1500} height={300} data={transformedData}>
//       <XAxis dataKey="feature" />
//       <YAxis />
//       <Tooltip />
//       <Bar dataKey="timeSpent" fill="#8884d8" onClick={onBarClick} />
//     </BarChart>
//   );
// };

// export default BarChartComponent;








import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const BarChartComponent = ({ data, onBarClick }) => {
  // Aggregate the data for distinct features
  const aggregatedData = data.reduce((acc, item) => {
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach((feature) => {
      if (item[feature]) {
        // Check if feature already exists in accumulator
        const existingFeature = acc.find((entry) => entry.feature === feature);
        if (existingFeature) {
          existingFeature.timeSpent += parseInt(item[feature], 10); // Aggregate timeSpent
        } else {
          acc.push({ feature, timeSpent: parseInt(item[feature], 10) }); // Initialize if not found
        }
      }
    });
    return acc;
  }, []);

  return (
    <BarChart width={800} height={400} data={aggregatedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="feature" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="timeSpent" fill="#8884d8" onClick={onBarClick} />
    </BarChart>
  );
};

export default BarChartComponent;
