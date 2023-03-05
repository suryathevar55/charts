import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dough_nut(){
  const [chartData, setChartData] = useState({
    datasets: [],
  });
 
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
    setChartData({
      labels: [
        'Filled',
        'Free Space'
      ],
      datasets: [{
        label: ['Filled','Free Space'],
        data: [312,200],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
      }]
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "right",
          //radius:50,
        },
        title: {
          display: true,
          text: "Storage",
        },
      },
    });
  }, []);
 
  return (
    <div className="App">
      <Doughnut options={chartOptions} data={chartData} />
    </div>
  );
}
export default Dough_nut;