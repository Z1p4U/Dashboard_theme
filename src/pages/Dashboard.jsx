import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ComposedChart,
  Legend,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import { Button, Group, Menu, Table, Text, rem } from "@mantine/core";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { FiRefreshCcw } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { DatePicker } from "@mantine/dates";
import { DataTable } from "mantine-datatable";
import { FaChevronDown } from "react-icons/fa";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 2398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 2300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 2590,
    pv: 1300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 5490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 2300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 6490,
    pv: 4300,
    amt: 2100,
  },
];

const data01 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

const data02 = [
  { name: "Group A", value: 400 },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

const tablElements = [
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  {
    source: "Affiliate",
    revenue: "$ 1253",
    value: "+13%",
    color: "bg-yellow-500",
  },
  { source: " E-mail", revenue: "$ 541", value: "+24%", color: "bg-red-500" },
  { source: "Other", revenue: "$ 1465", value: "+11%", color: "bg-slate-700" },
];

const PAGE_SIZES = [10, 15, 20];

const Dashboard = () => {
  const sideSelector = useSelector((state) => state.side.side);
  const [date, setDate] = useState([]);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 2,
      name: "Project Fireball",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Cancelled",
      assignee: "Bertha Martin",
    },
    {
      id: 3,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 4,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "In progress",
      assignee: "Carl Jenkins",
    },
    {
      id: 5,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 6,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 7,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 8,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 9,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 10,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 11,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      id: 12,
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },

    // more records...
  ]);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(employees.slice(0, pageSize));

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(employees.slice(from, to));
  }, [page, pageSize]);

  const rows = tablElements.map((element, i) => {
    return (
      <tr key={i} className=" text-sm ">
        <td className=" text-slate-700 text-xs">
          <div className=" flex items-center gap-2">
            <div className={`${element.color}  w-3 h-3 rounded`}></div>
            <span>{element.source}</span>
          </div>
        </td>
        <td className=" text-slate-500 text-xs">{element.revenue}</td>
        <td className=" text-green-600 text-xs">{element.value}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="  px-10 pt-5 pb-40 md:pb-32 bg-primaryLight w-full  overflow-x-hidden">
        {/* <div className=" flex justify-between items-center">
          <p className=" block text-slate-600 text-xs md:text-lg h4 font-bold">
            Dashboard
          </p>
          <div className=" flex items-center gap-3">
            <Button
              size="sm"
              className=" w-30 text-black text-xs shadow rounded"
              leftIcon={<MdOutlineDateRange size={10} />}
              rightIcon={<AiOutlineArrowDown />}
            >
              Today
            </Button>
            <Button
              styles={(theme) => ({
                root: {
                  backgroundColor: "#00acee",
                  border: 0,
                  width: rem(50),
                  height: rem(32),
                  paddingLeft: rem(20),
                  paddingRight: rem(20),
                  fontSize: rem(50),
                  "&:not([data-disabled])": theme.fn.hover({
                    backgroundColor: theme.fn.darken("#00acee", 0.05),
                  }),
                },
              })}
              className=" text-white bg-blue-500"
            >
              <CiFilter size={30} />
            </Button>
            <Button
              styles={(theme) => ({
                root: {
                  backgroundColor: "#00acee",
                  border: 0,
                  width: rem(50),
                  height: rem(32),
                  paddingLeft: rem(20),
                  paddingRight: rem(20),
                  fontSize: rem(50),
                  "&:not([data-disabled])": theme.fn.hover({
                    backgroundColor: theme.fn.darken("#00acee", 0.05),
                  }),
                },
              })}
              className=" text-white bg-blue-500"
            >
              <FiRefreshCcw size={30} />
            </Button>
          </div>
        </div> */}

        <div className=" flex justify-between my-4 items-center align-middle">
          <p className="hidden sm:block text-[#495057] text-xs md:text-lg font-bold">
            Dashboard
          </p>
          <div className=" flex items-center align-middle gap-3">
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

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 pt-5">
          <div
            style={{ backgroundColor: "#e0eafc", height: "130.66px" }}
            className=" grid grid-cols-2 p-5 rounded relative shadow"
          >
            <div>
              <p className=" text-blue-500 text-sm font-bold">
                Welcome Back, Chris!
              </p>
              <p className=" text-blue-500 text-xs font-medium">
                AppStack Dashboard
              </p>
            </div>
            <div>
              <img
                width={150}
                height={100}
                className=" absolute bottom-0 right-0"
                src="https://appstack.bootlab.io/img/illustrations/customer-support.png"
                alt=""
              />
            </div>
          </div>

          <div
            style={{ height: "130.66px" }}
            className=" grid grid-cols-2 p-5 rounded shadow bg-white"
          >
            <div>
              <p className=" text-slate-600 text-md font-semibold">$ 24.300</p>
              <p className=" text-slate-500 text-xs font-medium py-2">
                Total Earnings
              </p>
              <div className=" flex items-center gap-3">
                <div>
                  <span
                    style={{ fontSize: "8px" }}
                    className=" text-green-500 bg-green-100 px-2 py-1 w-6 font-bold rounded"
                  >
                    +5.35%
                  </span>
                </div>
                <p className=" text-slate-400 text-xs font-normal">
                  Since last week
                </p>
              </div>
            </div>
            <div className=" flex justify-end">
              <div className=" w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                <LuDollarSign />
              </div>
            </div>
          </div>

          <div
            style={{ height: "130.66px" }}
            className=" grid grid-cols-2 p-5 rounded shadow bg-white"
          >
            <div>
              <p className=" text-slate-600 text-md font-semibold">43</p>
              <p className=" text-slate-500 text-xs font-medium py-2">
                Pending Orders
              </p>
              <div className=" flex items-center gap-3">
                <div>
                  <span
                    style={{ fontSize: "8px" }}
                    className=" text-red-500 bg-red-100 px-2 py-1 w-6 font-bold rounded"
                  >
                    -4.25%
                  </span>
                </div>
                <p className=" text-slate-400 text-xs font-normal">
                  Since last week
                </p>
              </div>
            </div>
            <div className=" flex justify-end">
              <div className=" w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                <FiShoppingBag />
              </div>
            </div>
          </div>

          <div
            style={{ height: "130.66px" }}
            className=" grid grid-cols-2 p-5 rounded shadow bg-white"
          >
            <div>
              <p className=" text-slate-600 text-md font-semibold">$ 18.700</p>
              <p className=" text-slate-500 text-xs font-medium py-2">
                Total Earnings
              </p>
              <div className=" flex items-center gap-3">
                <div>
                  <span
                    style={{ fontSize: "8px" }}
                    className=" text-green-500 bg-green-100 px-2 py-1 w-6 font-bold rounded"
                  >
                    +8.65%
                  </span>
                </div>
                <p className=" text-slate-400 text-xs font-normal">
                  Since last week
                </p>
              </div>
            </div>
            <div className=" flex justify-end">
              <div className=" w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                <LuDollarSign />
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <div
          style={{ height: "130.66px" }}
          className=" grid grid-cols-2 p-5 rounded shadow bg-white"
        >
          <div>
            <p className=" text-slate-600 text-md font-semibold">43</p>
            <p className=" text-slate-500 text-xs font-medium py-2">
              Pending Orders
            </p>
            <div className=" flex items-center gap-3">
              <div>
                <span
                  style={{ fontSize: "8px" }}
                  className=" text-red-500 bg-red-100 px-2 py-1 w-6 font-bold rounded"
                >
                  -4.25%
                </span>
              </div>
              <p className=" text-slate-400 text-xs font-normal">
                Since last week
              </p>
            </div>
          </div>
          <div className=" flex justify-end">
            <div className=" w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
              <FiShoppingBag />
            </div>
          </div>
        </div>

        <div
          style={{ height: "130.66px" }}
          className=" grid grid-cols-2 p-5 rounded shadow bg-white"
        >
          <div>
            <p className=" text-slate-600 text-md font-semibold">$ 18.700</p>
            <p className=" text-slate-500 text-xs font-medium py-2">
              Total Earnings
            </p>
            <div className=" flex items-center gap-3">
              <div>
                <span
                  style={{ fontSize: "8px" }}
                  className=" text-green-500 bg-green-100 px-2 py-1 w-6 font-bold rounded"
                >
                  +8.65%
                </span>
              </div>
              <p className=" text-slate-400 text-xs font-normal">
                Since last week
              </p>
            </div>
          </div>
          <div className=" flex justify-end">
            <div className=" w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
              <LuDollarSign />
            </div>
          </div>
        </div>
      </div> */}

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 py-10">
          <div
            style={{ height: "500px" }}
            className=" lg:col-span-2 shadow rounded bg-white p-5"
          >
            <div className=" pb-5 flex items-center justify-between">
              <p className=" text-slate-700 text-sm font-bold">
                Sales / Revenue
              </p>
              <span>
                <BiDotsHorizontalRounded />
              </span>
            </div>
            <div className=" h-full">
              <ResponsiveContainer width={"100%"} height={"80%"}>
                <ComposedChart
                  width={"100%"}
                  height={300}
                  barCategoryGap={300}
                  barGap={50}
                  barSize={5}
                  data={data}
                  reverseStackOrder={true}
                >
                  <XAxis dataKey="name" />
                  {/* <YAxis /> */}
                  <Tooltip />
                  <Legend />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    fill="#8884d8"
                    stroke="#8884d8"
                  />
                  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className=" h-[fit-content] lg:col-span-1 bg-white p-5 shadow rounded">
            <div>
              <div className=" pb-5 flex items-center justify-between">
                <p className=" text-slate-700 text-sm font-bold">Daily feed</p>
                <div>
                  <span
                    style={{ fontSize: "8px" }}
                    className=" text-white bg-blue-500 px-2 py-1 w-6 font-bold rounded"
                  >
                    Today
                  </span>
                </div>
              </div>

              <div>
                <div className=" mt-5 flex justify-start md:justify-between gap-2 text-xs">
                  <div className=" flex gap-3 w-[80%]">
                    <img
                      className="h-[fit-content] w-[10%] rounded-full"
                      src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                      alt=""
                    />

                    <div className=" flex flex-col">
                      {" "}
                      <div
                        className={`${
                          sideSelector
                            ? "lg:w-[100%]"
                            : " w-[150px] md:w-[500px] lg:w-[100%]"
                        }`}
                      >
                        <p className=" text-slate-500 ">
                          <span className=" text-slate-700 font-semibold">
                            Ashley Brids{" "}
                          </span>
                          started following{" "}
                          <span className=" text-slate-700 font-semibold">
                            Stacie Hall
                          </span>
                        </p>
                      </div>
                      <div className=" flex flex-col gap-2">
                        <p
                          style={{ fontSize: "10px" }}
                          className={`${
                            sideSelector
                              ? "text-slate-400 "
                              : "text-slate-400  "
                          }`}
                        >
                          Today 7:51 pm
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p
                      style={{ fontSize: "10px" }}
                      className=" text-slate-400 text-xs"
                    >
                      30m ago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className=" mt-2" />

            <div>
              <div className=" mt-5 flex justify-start md:justify-between gap-2 text-xs">
                <div className=" flex gap-3 w-[80%]">
                  <img
                    className="h-[fit-content] w-[10%] rounded-full"
                    src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                    alt=""
                  />

                  <div className=" flex flex-col">
                    {" "}
                    <div
                      className={`${
                        sideSelector
                          ? "lg:w-[100%]"
                          : " w-[150px] md:w-[500px] lg:w-[100%]"
                      }`}
                    >
                      <p className=" text-slate-500 ">
                        <span className=" text-slate-700 font-semibold">
                          Chris Wood{" "}
                        </span>
                        posted something on{" "}
                        <span className=" text-slate-700 font-semibold">
                          Stacie Hall's timeline
                        </span>
                      </p>
                    </div>
                    <div className=" flex flex-col gap-2">
                      <p
                        style={{ fontSize: "10px" }}
                        className={`${
                          sideSelector ? "text-slate-400 " : "text-slate-400  "
                        }`}
                      >
                        Today 7:51 pm
                      </p>

                      <div
                        style={{ fontSize: "10px" }}
                        className={`${
                          sideSelector
                            ? "lg:w-[fit-content] p-2"
                            : " w-[fit-content] md:w-[fit-content] lg:w-[fit-content]  p-2"
                        } border border-1 text-slate-400 mt-2 recharts`}
                      >
                        <p>
                          Etiam rhoncus. Maecenas tempus, tellus eget
                          condimentum rhoncus, sem quam semper libero, sit amet
                          adipiscing...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p
                    style={{ fontSize: "10px" }}
                    className=" text-slate-400 text-xs"
                  >
                    30m ago
                  </p>
                </div>
              </div>
            </div>

            <hr className=" mt-2" />

            <div>
              <div className=" mt-5 flex justify-start md:justify-between gap-2 text-xs">
                <div className=" flex gap-3 w-[80%]">
                  <img
                    className="h-[fit-content] w-[10%] rounded-full"
                    src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                    alt=""
                  />

                  <div className=" flex flex-col">
                    {" "}
                    <div
                      className={`${
                        sideSelector
                          ? "lg:w-[100%]"
                          : " w-[150px] md:w-[500px] lg:w-[100%]"
                      }`}
                    >
                      <p className=" text-slate-500 ">
                        <span className=" text-slate-700 font-semibold">
                          Stacie Hall
                        </span>
                        <span>
                          {" "}
                          posted{" "}
                          <span className=" text-slate-700 font-semibold">
                            a new blog
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className=" flex flex-col gap-2">
                      <p
                        style={{ fontSize: "10px" }}
                        className={`${
                          sideSelector ? "text-slate-400 " : "text-slate-400  "
                        }`}
                      >
                        Today 7:51 pm
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p
                    style={{ fontSize: "10px" }}
                    className=" text-slate-400 text-xs"
                  >
                    30m ago
                  </p>
                </div>
              </div>
            </div>

            <hr className=" mt-2" />

            <div>
              <button className=" bg-blue-600 text-white text-xs w-full rounded py-1 px-2 mt-2">
                Load More
              </button>
            </div>
          </div>
        </div>

        <div className="  grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-3 pb-5">
          <div
            style={{ height: "648px" }}
            className=" w-full col-span-1 shadow rounded bg-white p-5"
          >
            <div className=" pb-5 flex items-center justify-between">
              <p className=" text-slate-700 text-sm font-bold">Calendar</p>
              <span>
                <BiDotsHorizontalRounded />
              </span>
            </div>
            <div className={` mt-20`}>
              {/* <Group position="apart"> */}
              <DatePicker
                className={`${
                  sideSelector
                    ? "mantine-1emfdtu-header mantine-1ab4j2x-header"
                    : ""
                }`}
                allowDeselect
                value={date}
                onChange={setDate}
                type="range"
              />
              {/* </Group> */}
            </div>
          </div>

          <div
            style={{ height: "648px" }}
            className=" w-full col-span-1 shadow rounded bg-white p-5"
          >
            <div className=" pb-5 flex items-center justify-between">
              <p className=" text-slate-700 text-sm font-bold">
                Sales / Revenue
              </p>
              <span>
                <BiDotsHorizontalRounded />
              </span>
            </div>
            <div className="">
              <ResponsiveContainer width={"100%"} height={300}>
                <PieChart width={"100%"} height={300}>
                  <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                  />
                  <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div>
              <Table>
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>Revenue</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </div>
          </div>

          <div
            style={{ height: "648px" }}
            className=" w-full col-span-1 shadow rounded bg-white p-5 "
          >
            <div className=" pb-5 flex items-center justify-between">
              <p className=" text-slate-700 text-sm font-bold">Appointments</p>
              <span>
                <BiDotsHorizontalRounded />
              </span>
            </div>

            <ul className="timeline py-5 md:py-8 lg:py-3">
              <li className="timeline-item">
                <div className=" flex items-center justify-between">
                  <strong className=" text-[10px] ps-8">
                    Chat with Carl and Ashley
                  </strong>
                  <p className=" text-[10px] text-slate-400">30m ago</p>
                </div>
                <p className=" ps-8 text-[13px] text-slate-500">
                  Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                  imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                  mauris...
                </p>
              </li>
            </ul>

            <ul className="timeline py-5 md:py-8 lg:py-3">
              <li className="timeline-item">
                <div className=" flex items-center justify-between">
                  <strong className=" text-[10px] ps-8">
                    Chat with Carl and Ashley
                  </strong>
                  <p className=" text-[10px] text-slate-400">30m ago</p>
                </div>
                <p className=" ps-8 text-[13px] text-slate-500">
                  Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                  imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                  mauris...
                </p>
              </li>
            </ul>

            <ul className="timeline py-5 md:py-8 lg:py-3">
              <li className="timeline-item">
                <div className=" flex items-center justify-between">
                  <strong className=" text-[10px] ps-8">
                    Chat with Carl and Ashley
                  </strong>
                  <p className=" text-[10px] text-slate-400">30m ago</p>
                </div>
                <p className=" ps-8 text-[13px] text-slate-500">
                  Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                  imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                  mauris...
                </p>
              </li>
            </ul>

            <ul className="timeline py-5 md:py-8 lg:py-3">
              <li className="timeline-item">
                <div className=" flex items-center justify-between">
                  <strong className=" text-[10px] ps-8">
                    Chat with Carl and Ashley
                  </strong>
                  <p className=" text-[10px] text-slate-400">30m ago</p>
                </div>
                <p className=" ps-8 text-[13px] text-slate-500">
                  Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                  imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                  mauris...
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className=" shadow rounded bg-white p-5 mt-10 mb-10">
          <div className=" pb-5 flex items-center justify-between">
            <p className=" text-slate-700 text-sm font-bold">Latest Projects</p>
            <span>
              <BiDotsHorizontalRounded />
            </span>
          </div>
          <DataTable
            borderRadius="sm"
            striped
            highlightOnHover
            // provide data
            records={records}
            // define columns
            columns={[
              { accessor: "name", title: "name" },
              {
                accessor: "startDate",
                title: "Start Date",
                // this column has custom cell data rendering
              },
              { accessor: "endDate", title: "End Date" },
              {
                accessor: "status",
                title: "Status",
                render: ({ status }, i) => {
                  return (
                    <React.Fragment key={i}>
                      {status === "Done" && (
                        <span
                          className={`${
                            status === "Done" &&
                            " w-[40px] text-[10px] text-white text-center rounded bg-green-500 px-1  py-0"
                          }`}
                        >
                          {status}
                        </span>
                      )}
                      {status === "Cancelled" && (
                        <span
                          className={`${
                            status === "Cancelled" &&
                            " w-[60px] text-[10px] text-white text-center rounded bg-red-500 px-1  py-0"
                          }`}
                        >
                          {status}
                        </span>
                      )}
                      {status === "In progress" && (
                        <span
                          className={`${
                            status === "In progress" &&
                            " w-[60px] text-[10px] text-white text-center rounded bg-yellow-500 px-1  py-0"
                          }`}
                        >
                          {status}
                        </span>
                      )}
                    </React.Fragment>
                  );
                },
              },
              { accessor: "assignee", title: "Assignee" },
            ]}
            totalRecords={employees.length}
            paginationColor="cyan"
            paginationSize="sm"
            paginationWrapBreakpoint={"lg"}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={(p) => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}

            // execute this callback when a row is clicked
            // onRowClick={({ name, party, bornIn }) =>
            //   alert(`You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}.`)
            // }
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
