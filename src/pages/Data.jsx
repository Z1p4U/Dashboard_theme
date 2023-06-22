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
import { Button, Group, Table, Text, rem } from "@mantine/core";
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
import { useNavigate } from "react-router-dom";

const PAGE_SIZES = [10, 15, 20];
const tablElements = [
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
  { source: "Direct", revenue: "$ 2602", value: "+ 43%", color: "bg-blue-500" },
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

const Data = () => {
  const nav = useNavigate();
  const [employees, setEmployees] = useState([
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Fireball",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Cancelled",
      assignee: "Bertha Martin",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "In progress",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },
    {
      name: "Project Apollo",
      startDate: "01/01/2022",
      endDate: "31/06/2022 ",
      status: "Done",
      assignee: "Carl Jenkins",
    },

    // more records...
  ]);

  //   const { cartItems } = useSelector((state) => state.formData);
  // const { cartItems } = useSelector((state) => state.dataInfo);
  // const { cartItems } = useSelector(state => state.dataInfo)
  const { cartItems } = useSelector((state) => state.dataInfo);
  console.log(cartItems);
  //   console.log(Info)
  //   console.log(data);

  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [records, setRecords] = useState(cartItems?.slice(0, pageSize));
  console.log(records);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(cartItems?.slice(from, to));
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
      {cartItems.length === 0 ? (
        <div className="flex justify-center h-[100vh] items-center">
          {" "}
          <div className=" flex flex-col gap-2">
            <div className=" text-2xl font-semibold text-gray-400 ">
              UserInfo table is empty
            </div>
            <button
              onClick={() => nav(`/form`)}
              className=" text-white text-[13px] rounded-md font-semibold  bg-blue-600 p-2"
            >
              Add user
            </button>
          </div>{" "}
        </div>
      ) : (
        <div className=" h-screen min-h-screen px-10 pt-5 pb-32 bg-primaryLight w-full overflow-y-auto overflow-x-hidden">
          <div className=" shadow rounded bg-white p-5 mb-10">
            <div className=" pb-5 flex items-center justify-between">
              <p className=" text-slate-700 text-sm font-bold">
                Latest Projects
              </p>
              <span>
                <BiDotsHorizontalRounded />
              </span>
            </div>
            <DataTable
              className=""
              borderRadius="sm"
              striped
              highlightOnHover
              // provide data
              records={records}
              // define columns
              columns={[
                {
                  accessor: "file",
                  title: "Photo",
                  render: ({ file }, i) => {
                    // const reader = new FileReader();

                    // const handleImageLoad = (event) => {
                    //   const result = reader.result;
                    //   const img = document.getElementById(i);
                    //   img.src = result;
                    // };

                    // reader.onload = handleImageLoad;
                    // reader.readAsDataURL(file)
                    return (
                      <React.Fragment key={i} className="py-[50px]">
                        <img
                          className=" lg:w-[5%] md:w-[50%] w-[63%] rounded-full h-[fit-content]"
                          src={file}
                          id={i}
                          alt="Preview"
                        />
                      </React.Fragment>
                    );
                  },
                },

                { accessor: "Name", title: "Name" },
                {
                  accessor: "Age",
                  title: "Age",
                  // this column has custom cell data rendering
                },
                { accessor: "Gender", title: "Gender" },

                { accessor: "Phone", title: "Phone" },
                { accessor: "Address", title: "Address" },
                { accessor: "date", title: "Release Date" },
              ]}
              totalRecords={cartItems?.length}
              paginationColor="cyan"
              paginationSize="sm"
              paginationWrapBreakpoint={""}
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
      )}
    </>
  );
};

export default Data;
