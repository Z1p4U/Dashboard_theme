import React, { useEffect, useRef } from "react";
import { Button, rem, Menu, UnstyledButton, Pagination } from "@mantine/core";
import { MdOutlineDateRange } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { FiRefreshCcw } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPeople, BsThreeDots, BsFillSquareFill } from "react-icons/bs";
import BarChart from "../components/AnalyticsPageComponents/BarChart";
import RadioChart from "../components/AnalyticsPageComponents/RadarChart";
import MapComponent from "../components/AnalyticsPageComponents/MapComponent";
import DonutChart from "../components/AnalyticsPageComponents/DonutChart";
import SortableTable from "../components/AnalyticsPageComponents/SortableTable";
import WorldMap from "../components/AnalyticsPageComponents/WorldMap";

const Analytics = () => {
  const barChartData = {
    labels: [
      "Jan",
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
      "Dec",
    ],

    datasets: [
      {
        label: "Desktop",
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        backgroundColor: "#1659c7",
        borderWidth: 0,
        radius: 3,
      },
      {
        label: "Mobile",
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        backgroundColor: "#84aef2",
        borderWidth: 0,
        radius: 3,
      },
    ],
  };

  const RadioChartData = {
    labels: ["Technology", "Sports", "Media", "Gaming", "Art"],

    datasets: [
      {
        label: "Interests",
        data: [70, 53, 82, 60, 33],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const DonutChartData = {
    labels: ["Direct", "Affiliate", "E-Mail", "Others"],
    datasets: [
      {
        // label: "Direct",
        data: [2602, 1253, 541, 1465],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
          "#adb5bd",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <div className=" px-10 py-10   bg-primaryLight w-full overflow-x-hidden">
        {/* Title Path */}

        <div className=" flex justify-between mb-4 items-center align-middle">
          <p className=" block text-[#495057] text-xs md:text-lg font-bold">
            Analytics
          </p>
          <div className=" flex items-center gap-3">
            <Menu
              withArrow
              arrowPosition="center"
              transitionProps={{ transition: "scale", duration: 500 }}
              shadow="md"
              width={200}
            >
              <Menu.Target>
                <Button
                  size="sm"
                  variant="subtle"
                  color="dark"
                  className=" w-30 text-sm shadow rounded"
                  leftIcon={<MdOutlineDateRange size={15} />}
                  rightIcon={<FaChevronDown size={9} />}
                >
                  Today
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Settings</Menu.Label>
                <Menu.Item>Action</Menu.Item>
                <Menu.Item>Another Action</Menu.Item>
                <Menu.Item>Something else here</Menu.Item>

                <Menu.Divider />

                <Menu.Label>Separated link</Menu.Label>
              </Menu.Dropdown>
            </Menu>

            <Button
              styles={(theme) => ({
                root: {
                  backgroundColor: "#00acee",
                  border: 0,
                  width: rem(50),
                  height: rem(32),
                  "&:not([data-disabled])": theme.fn.hover({
                    backgroundColor: theme.fn.darken("#00acee", 0.05),
                  }),
                },
                fontWeight: "bold",
              })}
              className=" text-white bg-blue-500"
            >
              <CiFilter size={30} className=" font-bold " />
            </Button>

            <Button
              styles={(theme) => ({
                root: {
                  backgroundColor: "#00acee",
                  border: 0,
                  width: rem(50),
                  height: rem(32),
                  "&:not([data-disabled])": theme.fn.hover({
                    backgroundColor: theme.fn.darken("#00acee", 0.05),
                  }),
                },
              })}
              className=" text-white bg-blue-500"
            >
              <FiRefreshCcw size={30} className=" font-bold" />
            </Button>
          </div>
        </div>

        {/* Top */}
        <div className="grid grid-cols-7 gap-6 mb-6">
          <div className=" col-start-1 col-span-7 lg:col-start-1 lg:col-span-3 grid grid-rows-2 gap-6">
            <div className=" row-start-1 row-span-1 grid grid-cols-4 gap-6">
              <div className=" col-start-1 col-span-1 md:col-span-2 lg:col-span-4 bg-[#e0eafc] h-[161px] xl:col-span-2 rounded shadow ">
                <div className="grid grid-cols-1  md:grid-cols-2 h-[161px]">
                  <div className=" col-start-1 col-span-1 m-1 p-4">
                    <p className=" text-blue-500 text-sm font-bold">
                      Welcome Back, Chris!
                    </p>
                    <p className=" text-blue-500 text-xs font-medium">
                      AppStack Dashboard
                    </p>
                  </div>

                  <div className=" col-start-2 col-span-1 self-end">
                    <img
                      className=" w-[135px] h-[127px]"
                      src="https://appstack.bootlab.io/img/illustrations/searching.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="block lg:hidden xl:block col-start-3 col-span-2 h-[161px] rounded shadow p-5">
                <div className=" grid grid-cols-5">
                  <p className=" text-md font-semibold col-start-1 col-span-4">
                    Bounce
                  </p>
                  <div className=" w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full col-start-5 col-span-1">
                    <FiArrowUpRight />
                  </div>
                </div>
                <p className=" text-2xl font-bold mt-1 mb-6 inline-block">
                  2.364
                </p>
                <div className=" flex items-center align-middle gap-3">
                  <div>
                    <span
                      style={{ fontSize: "10px" }}
                      className=" text-green-500 bg-green-100 px-2 py-1 w-6 font-bold rounded"
                    >
                      +3.65%
                    </span>
                  </div>
                  <p className=" text-slate-400 text-sm font-normal">
                    Since last week
                  </p>
                </div>
              </div>
            </div>

            <div className=" row-start-2 row-span-1 grid grid-cols-4 gap-6">
              <div className="col-start-1 col-span-2 lg:col-span-4 xl:col-span-2 h-[161px] rounded shadow p-5">
                <div className=" grid grid-cols-5">
                  <p className=" text-md font-semibold col-start-1 col-span-4">
                    Real-Time
                  </p>
                  <div className=" w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full col-start-5 col-span-1">
                    <AiOutlineClockCircle />
                  </div>
                </div>
                <p className=" text-2xl font-bold mt-1 mb-6 inline-block">
                  1.856
                </p>
                <div className=" flex items-center align-middle gap-3">
                  <div>
                    <span
                      style={{ fontSize: "10px" }}
                      className=" text-green-500 bg-green-100 px-2 py-1 w-6 font-bold rounded"
                    >
                      +2.25%
                    </span>
                  </div>
                  <p className=" text-slate-400 text-sm font-normal">
                    Since last week
                  </p>
                </div>
              </div>

              <div className="block lg:hidden xl:block col-start-3 col-span-2 h-[161px] rounded shadow p-5">
                <div className=" grid grid-cols-5">
                  <p className=" text-md font-semibold col-start-1 col-span-4">
                    Visitors
                  </p>
                  <div className=" w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full col-start-5 col-span-1">
                    <BsPeople />
                  </div>
                </div>
                <p className=" text-2xl font-bold mt-1 mb-6 inline-block">
                  17.212
                </p>
                <div className=" flex items-center align-middle gap-3">
                  <div>
                    <span
                      style={{ fontSize: "10px" }}
                      className=" text-red-500 bg-red-100 px-2 py-1 w-6 font-bold rounded"
                    >
                      -1.25%
                    </span>
                  </div>
                  <p className=" text-slate-400 text-sm font-normal">
                    Since last week
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-start-1 col-span-7 lg:col-start-4 lg:col-span-4 rounded shadow ">
            <div className=" px-5 py-4 flex justify-between align-middle items-center">
              <p className=" font-semibold">Real-Time</p>
              <Menu
                withArrow
                position="bottom-end"
                arrowPosition="side"
                transitionProps={{ transition: "scale", duration: 500 }}
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <UnstyledButton
                    size="sm"
                    variant="subtle"
                    color="dark"
                    className=" w-30 text-sm "
                  >
                    <BsThreeDots />
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Action</Menu.Item>
                  <Menu.Item>Another Action</Menu.Item>
                  <Menu.Item>Something else here</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
            <div className=" p-2 h-[295px] bg-transparent">
              {/* <MapComponent /> */}
              <WorldMap />
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className=" grid grid-cols-3 gap-6 mb-6">
          <div className=" col-start-1 col-span-3 lg:col-span-1 shadow rounded">
            <div className=" px-5 py-4 flex justify-between align-middle items-center">
              <p className=" font-semibold">Languages</p>
              <Menu
                withArrow
                position="bottom-end"
                arrowPosition="side"
                transitionProps={{ transition: "scale", duration: 500 }}
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <UnstyledButton
                    size="sm"
                    variant="subtle"
                    color="dark"
                    className=" w-30 text-sm "
                  >
                    <BsThreeDots />
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Action</Menu.Item>
                  <Menu.Item>Another Action</Menu.Item>
                  <Menu.Item>Something else here</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

            <div className="">
              <table className="min-w-full divide-y divide-gray-200 text-[#6C757D]">
                <thead>
                  <tr className="">
                    <th className="py-3 ps-5 pe-3">Language</th>
                    <th className="py-3 px-3 text-end">User</th>
                    <th className="py-3 px-3 hidden xl:table-cell w-3/4">
                      User%
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-transparent divide-y divide-gray-200">
                  <tr className="bg-gray-100">
                    <td className="py-3 ps-5 pe-3">en-us</td>
                    <td className="py-3 px-3 text-end text-sm">735</td>
                    <td className="py-3 px-3 hidden xl:table-cell">
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div
                          className="h-4 bg-blue-500 rounded-s"
                          style={{ width: `43%` }}
                        >
                          <p className=" flex text-xs text-white justify-center items-center align-middle">
                            43%
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className=" ">
                    <td className="py-3 ps-5 pe-3">en-gb</td>
                    <td className="py-3 px-3 text-end text-sm">223</td>
                    <td className="py-3 px-3 hidden xl:table-cell">
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div
                          className="h-4 bg-blue-500 rounded-s"
                          style={{ width: `27%` }}
                        >
                          <p className=" flex text-xs text-white justify-center items-center align-middle">
                            27%
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="py-3 ps-5 pe-3">fr-fr</td>
                    <td className="py-3 px-3 text-end text-sm">181</td>
                    <td className="py-3 px-3 hidden xl:table-cell">
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div
                          className="h-4 bg-blue-500 rounded-s"
                          style={{ width: `22%` }}
                        >
                          <p className=" flex text-xs text-white justify-center items-center align-middle">
                            22%
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="">
                    <td className="py-3 ps-5 pe-3">es-es</td>
                    <td className="py-3 px-3 text-end text-sm">132</td>
                    <td className="py-3 px-3 hidden xl:table-cell">
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div
                          className="h-4 bg-blue-500 rounded-s"
                          style={{ width: `16%` }}
                        >
                          <p className=" flex text-xs text-white justify-center items-center align-middle">
                            16%
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="py-3 ps-5 pe-3">de-de</td>
                    <td className="py-3 px-3 text-end text-sm">118</td>
                    <td className="py-3 px-3 hidden xl:table-cell">
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div
                          className="h-4 bg-blue-500 rounded-s"
                          style={{ width: `15%` }}
                        >
                          <p className=" flex text-xs text-white justify-center items-center align-middle">
                            15%
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="">
                    <td className="py-3 ps-5 pe-3">ru-ru</td>
                    <td className="py-3 px-3 text-end text-sm">98</td>
                    <td className="py-3 px-3 hidden xl:table-cell">
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div
                          className="h-4 bg-blue-500 rounded-s"
                          style={{ width: `13%` }}
                        >
                          <p className=" flex text-xs text-white justify-center items-center align-middle">
                            13%
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className=" col-start-1 col-span-3 lg:col-start-2 lg:col-span-1 shadow rounded">
            <div className=" px-5 py-4 flex justify-between align-middle items-center">
              <p className=" font-semibold">Mobile / Desktop</p>
              <Menu
                withArrow
                position="bottom-end"
                arrowPosition="side"
                transitionProps={{ transition: "scale", duration: 500 }}
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <UnstyledButton
                    size="sm"
                    variant="subtle"
                    color="dark"
                    className=" w-30 text-sm "
                  >
                    <BsThreeDots />
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Action</Menu.Item>
                  <Menu.Item>Another Action</Menu.Item>
                  <Menu.Item>Something else here</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

            <div className=" p-5">
              <BarChart data={barChartData} />
            </div>
          </div>

          <div className=" col-start-1 col-span-3 lg:col-start-3 lg:col-span-1 shadow rounded">
            <div className=" px-5 py-4 flex justify-between align-middle items-center">
              <p className=" font-semibold">Interests</p>
              <Menu
                withArrow
                position="bottom-end"
                arrowPosition="side"
                transitionProps={{ transition: "scale", duration: 500 }}
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <UnstyledButton
                    size="sm"
                    variant="subtle"
                    color="dark"
                    className=" w-30 text-sm "
                  >
                    <BsThreeDots />
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Action</Menu.Item>
                  <Menu.Item>Another Action</Menu.Item>
                  <Menu.Item>Something else here</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

            <div className=" p-5">
              <RadioChart data={RadioChartData} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className=" grid grid-cols-3 gap-6 mb-40">
          <div className=" col-start-1 col-span-3 lg:col-span-1 shadow rounded">
            <div className=" px-5 py-4 flex justify-between align-middle items-center">
              <p className=" font-semibold">Source / Medium</p>
              <Menu
                withArrow
                position="bottom-end"
                arrowPosition="side"
                transitionProps={{ transition: "scale", duration: 500 }}
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <UnstyledButton
                    size="sm"
                    variant="subtle"
                    color="dark"
                    className=" w-30 text-sm "
                  >
                    <BsThreeDots />
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Action</Menu.Item>
                  <Menu.Item>Another Action</Menu.Item>
                  <Menu.Item>Something else here</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

            <div>
              <div className=" p-5">
                <div className=" h-[150px] flex justify-center py-3">
                  <DonutChart data={DonutChartData} />
                </div>

                <div className="">
                  <table className="min-w-full divide-y divide-gray-200 text-[#6C757D]">
                    <thead>
                      <tr className="">
                        <th className="py-3 px-3 text-start">Source</th>
                        <th className="py-3 px-3 text-end">Revenue</th>
                        <th className="py-3 px-3 text-end">Value</th>
                      </tr>
                    </thead>

                    <tbody className="bg-transparent divide-y divide-gray-200">
                      <tr className=" ">
                        <td className="py-3 px-3 flex justify-start gap-1 align-middle items-center">
                          <BsFillSquareFill className=" text-blue-500" />
                          <p className=" text-sm">Direct</p>
                        </td>
                        <td className="py-3 px-3 text-end text-sm">$ 2602</td>
                        <td className="py-3 px-3 text-end text-sm text-green-500">
                          {" "}
                          +43%
                        </td>
                      </tr>

                      <tr className=" ">
                        <td className="py-3 px-3 flex justify-start gap-1 align-middle items-center">
                          <BsFillSquareFill className=" text-yellow-500" />
                          <p className=" text-sm">Affiliate</p>
                        </td>
                        <td className="py-3 px-3 text-end text-sm">$ 1253</td>
                        <td className="py-3 px-3 text-end text-sm text-green-500">
                          {" "}
                          +13%
                        </td>
                      </tr>

                      <tr className=" ">
                        <td className="py-3 px-3 flex justify-start gap-1 align-middle items-center">
                          <BsFillSquareFill className=" text-red-500" />
                          <p className=" text-sm">E-mail</p>
                        </td>
                        <td className="py-3 px-3 text-end text-sm">$ 541</td>
                        <td className="py-3 px-3 text-end text-sm text-green-500">
                          {" "}
                          +24%
                        </td>
                      </tr>

                      <tr className=" ">
                        <td className="py-3 px-3 flex justify-start gap-1 align-middle items-center">
                          <BsFillSquareFill className=" text-blue-500" />
                          <p className=" text-sm">Direct</p>
                        </td>
                        <td className="py-3 px-3 text-end text-sm">$ 1465</td>
                        <td className="py-3 px-3 text-end text-sm text-green-500">
                          {" "}
                          +11%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-start-1 col-span-3 lg:col-start-2 lg:col-span-2 rounded shadow">
            <div className=" px-5 py-4 flex justify-between align-middle items-center">
              <p className=" font-semibold">Traffic</p>
              <Menu
                withArrow
                position="bottom-end"
                arrowPosition="side"
                transitionProps={{ transition: "scale", duration: 500 }}
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <UnstyledButton
                    size="sm"
                    variant="subtle"
                    color="dark"
                    className=" w-30 text-sm "
                  >
                    <BsThreeDots />
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Action</Menu.Item>
                  <Menu.Item>Another Action</Menu.Item>
                  <Menu.Item>Something else here</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

            <div className="">
              {/* <table className="min-w-full divide-y divide-gray-200 text-[#6C757D]">
                <thead>
                  <tr className="">
                    <th className="py-3 px-3 text-start">Source</th>
                    <th className="py-3 px-3 hidden xl:table-cell text-end">
                      Users
                    </th>
                    <th className="py-3 px-3 hidden xl:table-cell text-end">
                      Sessions
                    </th>
                    <th className="py-3 px-3 hidden xl:table-cell text-end">
                      Bounce Rate
                    </th>
                    <th className="py-3 px-3 hidden xl:table-cell text-end">
                      Avg. Session Duration
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-transparent divide-y divide-gray-200">
                  <tr className=" bg-gray-100">
                    <td className=" ps-5 py-3 pe-3 ">Google</td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      1023
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      1265
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end text-green-500">
                      27.23%
                    </td>
                    <td className="py-3 ps-3 pe-5 hidden xl:table-cell text-end">
                      00:06:25
                    </td>
                  </tr>

                  <tr className="">
                    <td className=" ps-5 py-3 pe-3 ">Direct</td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      872
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      1077
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end text-green-500">
                      32.70%
                    </td>
                    <td className="py-3 ps-3 pe-5 hidden xl:table-cell text-end">
                      00:09:18
                    </td>
                  </tr>

                  <tr className=" bg-gray-100">
                    <td className=" ps-5 py-3 pe-3 ">Facebook</td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      812
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      1003
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end text-green-500">
                      24.83%
                    </td>
                    <td className="py-3 ps-3 pe-5 hidden xl:table-cell text-end">
                      00:05:56
                    </td>
                  </tr>

                  <tr className="">
                    <td className=" ps-5 py-3 pe-3 ">GitHub</td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      713
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      881
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end text-green-500">
                      38.09%
                    </td>
                    <td className="py-3 ps-3 pe-5 hidden xl:table-cell text-end">
                      00:06:19
                    </td>
                  </tr>

                  <tr className=" bg-gray-100">
                    <td className=" ps-5 py-3 pe-3 ">DuckDuckGo</td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      693
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      856
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end text-green-500">
                      37.36%
                    </td>
                    <td className="py-3 ps-3 pe-5 hidden xl:table-cell text-end">
                      00:09:12
                    </td>
                  </tr>

                  <tr className="">
                    <td className=" ps-5 py-3 pe-3 ">Pinterest</td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      623
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      770
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end text-red-500">
                      52.81%
                    </td>
                    <td className="py-3 ps-3 pe-5 hidden xl:table-cell text-end">
                      00:03:10
                    </td>
                  </tr>

                  <tr className=" bg-gray-100">
                    <td className=" ps-5 py-3 pe-3 ">Bing</td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      504
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      623
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end text-green-500">
                      66.76%
                    </td>
                    <td className="py-3 ps-3 pe-5 hidden xl:table-cell text-end">
                      00:04:42
                    </td>
                  </tr>

                  <tr className=" ">
                    <td className=" ps-5 py-3 pe-3 ">Twitter</td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      462
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end">
                      571
                    </td>
                    <td className="py-3 px-3 hidden xl:table-cell text-end text-green-500">
                      31.53%
                    </td>
                    <td className="py-3 ps-3 pe-5 hidden xl:table-cell text-end">
                      00:08:05
                    </td>
                  </tr>
                </tbody>
              </table> */}
              <SortableTable />
            </div>

            <div className=" grid grid-cols-12">
              <div className=" col-start-1 col-span-12 md:col-span-5 py-4 px-5 text-sm font-semibold text-[#6C757d]">
                Showing 1 to 8 of 8 entries
              </div>

              <div className=" col-start-1 col-span-12 md:col-start-6 md:col-span-7 px-5 flex align-middle items-center justify-center md:justify-end">
                <Pagination total={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
