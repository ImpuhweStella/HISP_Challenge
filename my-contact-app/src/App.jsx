import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import DataDisplay from './components/DataDisplay';
import { Bar } from 'react-chartjs-2';

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
      <Bar
        data={{
          labels: data.map((user) => user.name),
          datasets: [{
            label: 'User IDs',
            data: data.map((user) => user.id),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        }}
      />
    </div>
  );
};

export default App;
