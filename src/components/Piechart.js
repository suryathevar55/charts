import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart(){
  const [chartData, setChartData] = useState({
    datasets: [],
  });
 
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
    setChartData({
      labels: [
        'Inactive user',
        'Active User'
      ],
      datasets: [{
        label: ['Active User'],
        data: [66,340],
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
          text: "Registered User",
        },
      },
    });
  }, []);
 
  return (
    <div className="App">
      <Pie options={chartOptions} data={chartData} />
    </div>
  );
}
export default Piechart;