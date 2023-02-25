import { Chart as ChartJS, Title,LineElement,PointElement,ArcElement, Tooltip, Legend, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend,
    PointElement,
    LinearScale,
    LineElement,Title,
    );

    function LineChart() {
        const [data, setData]= useState({
          labels:["Jan","Feb", "March", "April", "May", "June", "July", "August"],
          datasets:[
            {
              label:"Growth of User",
              data:[10, 20, 30, 42, 51, 82, 31],
              backgroundColor:'yellow',
              borderColor:'green',
              tension:0.4,
              fill:true,
              pointStyle:'rect',
              pointBorderColor:'blue',
              pointBackgroundColor:'#fff',
              showLine:true
            }
          ]
        })
        
        return (
          <div className="App" style={{width:'800px', height:'800px'}}>
            <Line data={data}></Line>
          </div>
        );
      }
      
      export default LineChart;