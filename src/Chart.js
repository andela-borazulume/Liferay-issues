import React from 'react';

const setUpChart = (data) => {

  let ctx = document.getElementById('myChart');
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        "closed",
        "open"
      ],
      datasets: [
        {
          data: [data.closed, data.open],
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

const Chart = ({ data }) => {
  if(data === null) {
    return;
  }
  console.log(data)
  // setUpChart(data)
  return (
    <canvas id='myChart'></canvas>
  );
};

export default Chart;
