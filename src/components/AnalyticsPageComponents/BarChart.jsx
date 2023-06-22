import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            grid: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        barThickness: 7,
        maxBarThickness: 40,
        elements: {
          bar: {
            borderRadius: 10,
          },
        },
      },
    });
  }, [data]);

  return (
    <canvas
      ref={chartRef}
      style={{ width: `290px`, height: "290px" }}
      className=" w-[300px] h-[407px]"
    />
  );
};

export default BarChart;
