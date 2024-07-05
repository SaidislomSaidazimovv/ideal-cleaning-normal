import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Index = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
    </div>
  );
};

export default Index;
