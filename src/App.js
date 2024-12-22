// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BarChartComponent from './components/BarChartComponent';
// import LineChartComponent from './components/LineChartComponent';
// import Filters from './components/Filters';
// import './styles.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [lineChartData, setLineChartData] = useState([]);
//   const [filters, setFilters] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/data').then((response) => {
//       setData(response.data);
//       setFilteredData(response.data);
    
//     });
//   }, []);

//   const handleFilterChange = (filter, value) => {
//     const updatedFilters = { ...filters, [filter]: value };
//     setFilters(updatedFilters);
    

//     axios.get('http://localhost:5000/api/data', { params: updatedFilters }).then((response) => {
//       setFilteredData(response.data);

//       }
//   )};

//   const handleBarClick = (data) => {
//     const feature = data.activeLabel;
//     const filtered = data.filter((item) => item.feature === feature);
//     setLineChartData(filtered);
//   };

//   return (
//     <div className="App">
//       <Filters onFilterChange={handleFilterChange} />
//       <BarChartComponent data={filteredData} onBarClick={handleBarClick} />
//       <LineChartComponent data={filteredData} />
//     </div>
//   );
// };

// export default App;


























import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';
import Filters from './components/Filters';
import './styles.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [filters, setFilters] = useState({
    ageGroup: '',
    gender: '',
    startDate: '',
    endDate: ''
  });

  // Fetch data when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/data').then((response) => {
      setData(response.data);
      setFilteredData(response.data); // Set initial data
    });
  }, []);

  // Handle filter change and make API request based on the filters
  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);

    // Filter the data according to the selected filters
    axios.get('http://localhost:5000/api/data', {
      params: updatedFilters // Send filters as query params
    }).then((response) => {
      setFilteredData(response.data);
    });
  };

  // Handle bar chart click to filter data for line chart
  const handleBarClick = (data) => {
    const feature = data.activeLabel;
    const filtered = filteredData.filter((item) => item.feature === feature);
    setLineChartData(filtered);
  };

  return (
    <div className="App">
      <Filters onFilterChange={handleFilterChange} />
      <BarChartComponent data={filteredData} onBarClick={handleBarClick} />
      <LineChartComponent data={filteredData} />
    </div>
  );
};

export default App;
