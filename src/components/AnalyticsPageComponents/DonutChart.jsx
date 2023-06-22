import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const RadarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutout: "75%",
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, [data]);

  return (
    <canvas
      ref={chartRef}
      style={{ width: "[100px]", height: 150 }}
      className=" w-[320px] h-[150px]"
      height={150}
    />
  );
};

export default RadarChart;
