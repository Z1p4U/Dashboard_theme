import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { Bar } from "react-chartjs-2";

const Barchart = () => {
  const data = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],

    datasets: [
      {
        label: "This year earning",
        data: [6500, 4000, 5500, 6200, 4500, 5500, 7000, 5000, 5200, 4000],
        backgroundColor: "#3498db",
      },
      {
        label: "Last year earning",
        data: [6200, 2500, 4800, 5000, 4500, 4000, 6000, 4000, 42000, 3500],
        backgroundColor: "gray",
      },
    ],
  };

  const options = {
    responsive: true,

    scales: {
      y: {
        min: 2000,
        height: "100vh",
        max: 8000,
        stepSize: 1,
      },
    },
  };
  console.log(data);
  return (
    <div
      className=" w-[100%]  h-[50vh]  mt-[40px]"
      //   className=" w-f100vhull mt-[50px]"
    >
      {" "}
      <Bar data={data} className="" options={options} />{" "}
    </div>
  );
};

export default Barchart;
