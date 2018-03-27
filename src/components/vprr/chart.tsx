import * as React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [0, 3, 10, 13, 14, 20, 24, 25, 25.5, 26.4, 27.8, 29.5, 29.8, 30, 33.7, 38.3, 39.3, 43, 44.5, 45.4, 46.2,
    57.1, 58.3, 65.6, 68.4, 69.2, 74.2, 75.7, 78],
  datasets: [
    {
      fill: true,
      lineTension: 0.2,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [250, 158, 200, 200, 175, 200, 240, 256, 220, 226, 272, 281, 255, 268, 287, 390, 332, 388, 434, 402, 355,
        291, 304, 289, 245, 406, 408, 292, 290, 262],
    },
  ],
};

const options = {
    responsive: true,
    title: {
        display: false,
    },
    legend: {
        display: false,
    },
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0,
        },
    },
    fullWidth: true,
};

export const LC = () => {
    return (
        <div className="chart-container">
            <Line
                data={data}
                options={options}
            />
        </div>
    );
}