import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './component/top/Top';
import PieChart from './component/CostCalculator/chart/Chart';
//import TimelineTracking from './component/CostCalculator/timeline/Timeline';
import Timeline from './component/CostCalculator/timeline/Timeline';
import TimelineTracking from './component/CostCalculator/timeline/Timeline';

function App() {
  return (
    <div>
      <Top/>
      <PieChart/>
      <TimelineTracking/>
    </div>
  );
}

export default App;
