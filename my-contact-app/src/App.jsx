import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import DataDisplay from './components/DataDisplay';
import Chart from 'chart.js';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Header />
      <DataDisplay data={data} />
      <Chart data={data} />
    </div>
  );
};

export default App;
//  // Sample data for demonstration
//  const chartData = [
//   { label: 'A', value: 10 },
//   { label: 'B', value: 20 },
//   { label: 'C', value: 15 },
// ];

// const contactData = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
// ];

// return (
//   <div>
//     <Header />
//     <ChartComponent data={chartData} />
//     <DataDisplay data={contactData} />
//   </div>
