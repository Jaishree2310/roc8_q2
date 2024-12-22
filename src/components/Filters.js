// import React from 'react';

// const Filters = ({ onFilterChange }) => {
//   return (
//     <div className="filters">
//       <label>
//         Age Group:
//         <select onChange={(e) => onFilterChange('ageGroup', e.target.value)}>
//           <option value="">All</option>
//           <option value="15-25">15-25</option>
//           <option value=">25">25+</option>
//         </select>
//       </label>
//       <label>
//         Gender:
//         <select onChange={(e) => onFilterChange('gender', e.target.value)}>
//           <option value="">All</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </label>
//     </div>
//   );
// };

// export default Filters;










import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilterChange = () => {
    // Trigger the parent filter change function with all values
    onFilterChange({ ageGroup, gender, startDate, endDate });
  };

  return (
    <div className="filters">
      <label>
        Age Group:
        <select 
          value={ageGroup} 
          onChange={(e) => { setAgeGroup(e.target.value); handleFilterChange(); }}>
          <option value="">All</option>
          <option value="15-25">15-25</option>
          <option value=">25">25+</option>
        </select>
      </label>

      <label>
        Gender:
        <select 
          value={gender} 
          onChange={(e) => { setGender(e.target.value); handleFilterChange(); }}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label>
        Start Date:
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => { setStartDate(e.target.value); handleFilterChange(); }} 
        />
      </label>

      <label>
        End Date:
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => { setEndDate(e.target.value); handleFilterChange(); }} 
        />
      </label>
    </div>
  );
};

export default Filters;
