import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
function App() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
 
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri","Sat","Sun"],
      datasets: [
        {
          label: "Minutes",
          data: [30, 40, 28, 50, 41,21,14],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Time Spent",
        },
      },
    });
  }, []);
 
  return (
    <div className="App">
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}
 
export default App;