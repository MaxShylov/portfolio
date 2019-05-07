import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';


import { Title } from '../../../ControlModule';


const CHART_DATA = {
  labels: [
    'JavaScript / React / Redux / Jquery',
    'Node.js / Express.js / MongoDB',
    'GraphQL / AJAX / REST / JSON / Web Socket',
    'HTML5 / CSS3 / Sass',
    'Enzyme, Jest',
    'GitHub / GitLab / Bitbucket',
    'Photoshop / Illustrator / Sketch',
    'Angular / Vue / React Native'
  ],
  datasets: [
    {
      label: 'level',
      backgroundColor: [
        '#4F87EC',
        '#CB4F40',
        '#EBB53E',
        '#479A5F',
        '#9F51B6',
        '#4AAABE',
        '#EF7850',
        '#9F9C3D'
      ],
      borderWidth: 1,
      data: [10, 5, 8.3, 9.7, 6, 8, 9.7, 3]
    }
  ]
};

const CHART_OPTIONS = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      ticks: {
        min: 0,
        max: 10
      }
    }]
  }
};


export function TechnicalSkills() {
  return (
    <div className="TechnicalSkills">
      <Title>Technical Skills</Title>

      <HorizontalBar
        data={CHART_DATA}
        options={CHART_OPTIONS}
      />
    </div>
  );
}
