import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Barchart from './components/Barchart';
import Dough_nut from './components/Dough_nut';
import LineChart from './components/LineChart';
import Piechart from './components/Piechart';



function App(){
  return(
    <div className='Container'>
      <Barchart/>
      <Dough_nut/>
      <LineChart/>
      <Piechart/>
    </div>
  )
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals