import React from "react";
import { Progress } from "@mantine/core";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Barchart from "./Barchart";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   AreaChart,
//   Area,
//   ComposedChart,
//   Legend,
//   Bar,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
// } from "recharts";
const Detailitems = () => {
  const PROJECT_DETAIL = [
    {
      title: "Income",
      price: "$37.500",
      color: "blue",
      id: 1,
      progress: 15,
    },
    {
      title: "Orders",
      price: "3.282",
      color: "yellow",
      id: 2,
      progress: 82,
    },

    {
      title: "Activity",
      price: "19.312",
      color: "blue",
      id: 3,
      progress: 64,
    },

    {
      title: "Revenue",
      price: "$82.400",
      color: "green",
      id: 4,
      progress: 32,
    },
  ];
  return (
    <div className=" w-[100%]  overflow-x-hidden">
      <p className=" text-2xl font-semibold text-gray-600 mb-10 mx-10">
        Project Details
      </p>
      <div className="w-[100%] flex flex-col md:flex-row lg:flex-row gap-4 justify-center">
        {" "}
        {PROJECT_DETAIL?.map((item) => (
          <div className=" lg:w-[22%] md:w-[22%] w-[92%] mx-auto lg:mx-0 md:mx-0 p-3 bg-white shadow-lg h-[fit-content]">
            <p className=" text-gray-600 text-[15px] font-semibold">
              {item?.title}
            </p>
            <div className=" w-[100%] flex justify-between mt-[10px]">
              <p className=" text-gray-500 text-[20px] font-semibold">
                {item?.price}
              </p>
              <p className=" text-gray-400 text-[13px] font-semibold">
                {item?.progress}%
              </p>
            </div>
            {item?.color === "blue" && (
              <Progress value={item?.progress} className="mt-[20px]" />
            )}

            {item?.color === "yellow" && (
              <Progress
                value={item?.progress}
                color="yellow"
                className="mt-[20px]"
              />
            )}

            {item?.color === "green" && (
              <Progress
                value={item?.progress}
                color="lime"
                className="mt-[20px]"
              />
            )}
          </div>
        ))}
      </div>

      <div className="w-[100%] flex flex-col lg:flex-row md:flex-row justify-center gap-[15px] mt-[40px]">
        <div className="lg:w-[55%] md:w-[60%] w-[92%] mx-auto lg:mx-0 md:mx-0 flex flex-col gap-3">
          <div className=" w-[100%] bg-white shadow-lg p-3 h-[fit-content]">
            <div className=" flex justify-between items-start w-[100%]">
              <div className="flex flex-col gap-2">
                <p className=" text-gray-600 text-[15px] font-semibold">
                  Upgrade CRM software
                </p>
                <p className=" text-white text-[11px] bg-blue-600 font-semibold flex justify-center w-[50%] rounded-md">
                  In progress
                </p>
              </div>

              <button>
                <BiDotsHorizontalRounded />
              </button>
            </div>
            <div className="flex flex-col gap-3 mt-[10px]">
              <p className=" text-[13px] text-gray-600 font-semibold">
                Description
              </p>
              <p className=" text-[12px] text-gray-500">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem.
              </p>

              <p className=" text-[12px] text-gray-500">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem.
              </p>
            </div>

            <div className="flex flex-col mt-[8px]">
              <p className=" text-[14px] font-semibold text-gray-600">
                Assignee
              </p>
              <div className="flex gap-2 w-[100%] mt-[5px]">
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                  className=" lg:w-[4%]  w-[10%]  md:w-[8%] h-[fit-content] rounded-full"
                  alt=""
                />
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                  alt=""
                  className=" lg:w-[4%]  w-[10%]  md:w-[8%] h-[fit-content] rounded-full"
                />
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  alt=""
                  className=" lg:w-[4%]  w-[10%]  md:w-[8%] h-[fit-content] rounded-full"
                />
              </div>
            </div>
          </div>

          <div className=" w-[100%] bg-white shadow-lg p-3 h-[fit-content]">
            <div className=" flex justify-between items-start w-[100%]">
              <p className=" text-gray-600 text-[18px] font-semibold">
                Comments (4)
              </p>

              <button>
                <BiDotsHorizontalRounded />
              </button>
            </div>

            <div className="w-[100%] flex gap-2 mt-[30px]">
              <img
                src=" 	https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                alt=""
                className=" lg:w-[4%]  w-[10%]  md:w-[8%] h-[fit-content] rounded-full"
              />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className=" text-[13px] text-gray-500 font-semibold ">
                    Ashley Briggs
                  </p>
                  <p className=" text-[12px] text-gray-400">5m ago</p>
                </div>
                <p className=" text-[13px] text-gray-500">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                  tempus.
                </p>

                <p className=" text-[12px] text-gray-400">Today 2:30AM</p>

                <div className=" flex gap-2 mt-[10px]">
                  <img
                    src=" 	https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                    alt=""
                    className=" lg:w-[4%]  w-[10%]  md:w-[8%] h-[fit-content] rounded-full"
                  />

                  <span className="text-gray-500 text-[13px]">
                    <span className=" text-gray-500 text-[13px] font-semibold">
                      Stacie Hall
                    </span>
                    : Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                    eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam
                    ultrices mauris. Integer ante arcu, accumsan a, consectetuer
                    eget, posuere ut, mauris.
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="w-[100%] flex gap-2 mt-[30px]">
              <img
                src=" 	https://appstack.bootlab.io/img/avatars/avatar.jpg"
                alt=""
                className=" lg:w-[4%]  w-[10%]  md:w-[8%] h-[fit-content] rounded-full"
              />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className=" text-[13px] text-gray-500 font-semibold ">
                    Willian Collins
                  </p>
                  <p className=" text-[12px] text-gray-400">5m ago</p>
                </div>
                <p className=" text-[13px] text-gray-500">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                  tempus.
                </p>

                <p className=" text-[12px] text-gray-400">Today 2:30AM</p>
              </div>
            </div>
            <hr />
            <div className="w-[100%] flex gap-2 mt-[30px]">
              <img
                src=" 	https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                alt=""
                className=" lg:w-[4%]  w-[10%]  md:w-[8%] h-[fit-content] rounded-full"
              />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className=" text-[13px] text-gray-500 font-semibold ">
                    Stacie Hall
                  </p>
                  <p className=" text-[12px] text-gray-400">5m ago</p>
                </div>
                <p className=" text-[13px] text-gray-500">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                  tempus.
                </p>

                <p className=" text-[12px] text-gray-400">Today 2:30AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:w-[35%] md:w-[40%] w-[92%] mx-auto lg:mx-0 md:mx-0">
          {" "}
          <div className="w-[100%] bg-white shadow-lg p-3 h-[fit-content]">
            <div className=" flex justify-between items-start w-[100%]">
              <p className=" text-gray-600 text-[15px] font-semibold">
                Information
              </p>

              <button>
                <BiDotsHorizontalRounded />
              </button>
            </div>{" "}
            <div className="flex flex-col gap-2 mt-[30px]">
              <div className="flex items-center gap-3 justify-between w-[60%]">
                <p className=" text-[14px] text-gray-500 font-semibold">
                  Assigne
                </p>
                <div className="flex gap-2  mt-[5px]">
                  <img
                    src="	https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                    className=" lg:w-[10%]  w-[20%]  md:w-[8%] h-[fit-content] rounded-full"
                    alt=""
                  />
                  <img
                    src="	https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                    alt=""
                    className=" lg:w-[10%]  w-[20%]  md:w-[8%] h-[fit-content] rounded-full"
                  />
                  <img
                    src="	https://appstack.bootlab.io/img/avatars/avatar.jpg"
                    alt=""
                    className=" lg:w-[10%]  w-[20%]  md:w-[8%] h-[fit-content] rounded-full"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-[30%]">
                <p className=" text-[14px] text-gray-500 font-semibold">
                  Reporter
                </p>

                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                  className=" lg:w-[15%]  w-[20%]  md:w-[8%] h-[fit-content] rounded-full"
                  alt=""
                />
              </div>
              <hr />
              <div className="flex flex-col gap-2 mt-[20px]">
                <div className="flex items-center justify-between w-[60%] lg:w-[60%] md:w-[100%]">
                  <p className=" text-[14px] text-gray-500 font-semibold">
                    Created at
                  </p>
                  <p className=" text-gray-400 text-[13px]">2 February 2019</p>
                </div>

                <div className="flex items-center justify-between w-[80%] lg:w-[90%] md:w-[100%]">
                  <p className=" text-[14px] text-gray-500 font-semibold">
                    Start
                  </p>
                  <p className=" text-gray-400 text-[13px] w-[60%] lg:w-[60%] md:w-[48%]">
                    20 February 2019
                  </p>
                </div>

                <div className="flex items-center justify-between w-[80%] lg:w-[90%] md:w-[100%]">
                  <p className=" text-[14px] text-gray-500 font-semibold">
                    End
                  </p>
                  <p className=" text-gray-400 text-[13px] flex w-[60%] lg:w-[60%]  md:w-[52%] justify-start">
                    22 November 2019
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between w-[45%] lg:w-[48%] md:w-[100%]">
                <p className=" text-[14px] text-gray-500 font-semibold">
                  Budgets
                </p>
                <p className=" text-gray-400 text-[13px] flex justify-start">
                  $28,300
                </p>
              </div>
              <hr />

              <div className="flex flex-col gap-2 mt-[20px]">
                <div className="flex items-center justify-between w-[53%] lg:w-[55%] md:w-[100%]">
                  <p className=" text-[14px] text-gray-500 font-semibold">
                    Status
                  </p>
                  <p className=" text-white text-[11px] bg-blue-600 font-semibold flex justify-center w-[40%] md:w-[50%] rounded-md">
                    In progress
                  </p>
                </div>

                <div className="flex items-center justify-between w-[65%] lg:w-[65%] md:w-[100%]">
                  <p className=" text-[14px] text-gray-500 font-semibold">
                    Logged
                  </p>
                  <p className=" text-gray-400 text-[13px] w-[50%]">63h</p>
                </div>

                <div className="flex items-center justify-between w-[65%] lg:w-[65%] md:w-[100%]">
                  <p className=" text-[14px] text-gray-500 font-semibold">
                    Estimated
                  </p>
                  <p className=" text-gray-400 text-[13px] flex justify-start w-[50%]">
                    120h
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] bg-white shadow-lg p-3 h-[fit-content]">
            <div className="flex justify-between items-center w-[100%]">
              <p className=" text-gray-600 font-semibold text-[15px]">
                Earning
              </p>
              <BiDotsHorizontalRounded />
            </div>
            <div className="">
              <Barchart className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailitems;
