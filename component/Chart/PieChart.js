import React from 'react';
import { Pie } from 'react-chartjs-2'; // Assuming you're using Chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ['Electronics', 'Fashion', 'Groceries', 'Sports'],
    datasets: [
      {
        label: 'Category Breakdown',
        data: [300, 500, 200, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Pie Chart - Sales by Category',
      },
    },
  };

  return (
    <div className="chart-container">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
