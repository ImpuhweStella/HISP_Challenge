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
