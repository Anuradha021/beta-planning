import React from 'react';
import './Timeline.css';
import ColumnChart from '../../Charts/ColumnCharts';

const TimelineTracking = () => {
  const timelineData = [
    { name: 'Home Design & Approval', duration: 46, cost: '₹215,000' },
    { name: 'Excavation', duration: 14, cost: '₹105,750' },
    { name: 'Footing & Foundation', duration: 41, cost: '₹786,000' },
    { name: 'RCC Work - Columns & Slabs', duration: 17, cost: '₹525,000' },
    { name: 'Roof Slab', duration: 37, cost: '₹438,000' },
    { name: 'Brickwork and Plastering', duration: 20, cost: '₹85,500' },
    { name: 'Flooring & Tiling', duration: 25, cost: '₹380,000' },
    { name: 'Electric Wiring', duration: 14, cost: '₹105,750' },
    { name: 'Water Supply & Plumbing', duration: 10, cost: '₹50,000' },
  ];

  const totalDuration = 300; // Total number of days for the project.

  return (
    <ColumnChart />
  );
};

export default TimelineTracking;
