import React from 'react';
import Chart from 'chart.js';

const SetUpChart = (stateData) => {
  if(stateData !== null) {

  let total = stateData.closed + stateData.open;
  let closed = (stateData.closed/total)*100;
  let open = 100 - closed;

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
          data: [closed, open],
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          borderWidth: 2
        }]
    }
  });
  }
}

export default SetUpChart;
