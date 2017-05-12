import React from 'react';
import Chart from 'chart.js';

export const setUpChart = (stateData) => {
  console.log(stateData, 'hello miss ssiiiii')

  let ctx = document.getElementById('mychart');
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        "closed",
        "open"
      ],
      datasets: [
        {
          data: [stateData.closed, stateData.open],
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }]
    }
  });
}

const showChart = (props) => {
  console.log('got here?')
  // console.log(props, 'properties')
  // if (props.data === null) {
  //   return;
  // }
  // console.log(props, 'hello miss miss miss')
  // setUpChart()
  return (
    <div />
  );
};

export default showChart;
