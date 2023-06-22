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
      type: "radar",
      data: data,
      options: {
        scales: {
          r: {
            grid: {
              display: true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          line: {
            borderWidth: 3,
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

export default RadarChart;
