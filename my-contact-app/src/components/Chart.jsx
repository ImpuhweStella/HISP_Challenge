
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js'; 

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data.length) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(item => item.label),
          datasets: [{
            label: 'Data',
            data: data.map(item => item.value),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        }
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
