import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Menu, Button, Text } from "@mantine/core";
const Rightprofile = () => {
  return (
    <div className=" bg-white shadow-lg rounded-md w-[100%] md:w-[70%] lg:w-[70%] p-[10px] md:p-[50px] lg:p-[50px]">
      <div className="w-[98%] mx-auto flex flex-col gap-3">
        <div className=" flex justify-between ">
          {" "}
          <p className=" text-gray-600 font-semibold">Activities</p>
          <Menu shadow="md" width={10 + "%"}>
            <Menu.Target>
              <Button className=" hover:bg-white">
                {" "}
                <BiDotsHorizontalRounded className=" text-gray-600" />
              </Button>
            </Menu.Target>

            <Menu.Dropdown className=" w-[5%]">
              <Menu.Item className=" text-gray-500 text-[12px] font-semibold">
                Actions
              </Menu.Item>
              <Menu.Item className=" text-gray-500 text-[12px] font-semibold">
                Another actions
              </Menu.Item>
              <Menu.Item className=" text-gray-500 text-[12px] font-semibold">
                Something else here
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div
          id="Firstpost"
          className=" mt-5 flex p-3 md:w-[100%] w-[90%] lg:w-[100%] justify-between"
        >
          <div className="flex gap-2">
            {" "}
            <div className=" flex gap-3">
              <img
                src="	https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                className=" lg:w-[5%] w-[10%] h-[fit-content] rounded-[100%]"
                alt=""
              />{" "}
              <div className=" flex flex-col gap-1  ">
                <span className=" text-[14px] font-semibold text-gray-700">
                  {" "}
                  Stacie Hall
                  <span className=" text-gray-400"> posted</span> a new blog
                </span>
                <span className=" text-[12px] text-gray-500">
                  Today 7:51 AM
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <span className=" text-[12px]  text-gray-500">5m ago</span>
          </div>
        </div>
        <hr />
        <div id="secpost">
          {" "}
          <div className=" mt-5 flex p-3 md:w-[100%] w-[90%] lg:w-[100%]  justify-between">
            <div className="flex gap-2 ">
              {" "}
              <div className=" flex gap-3">
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className=" lg:w-[4%] w-[10%] h-[fit-content] rounded-[100%]"
                  alt=""
                />{" "}
                <div className=" flex flex-col gap-1 ml-[2px] w-[100%]">
                  <span className=" text-[14px] font-semibold text-gray-700">
                    Chris Wood{" "}
                    <span className=" text-gray-400">posted something on</span>{" "}
                    Stacie Hall's timeline
                  </span>
                  <span className=" text-[12px] text-gray-500">
                    Today 7:21 AM
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <span className=" text-[12px]  text-gray-500">5m ago</span>
            </div>
          </div>
          <div className="flex flex-col ">
            {" "}
            <div className="border-2 ml-[53px]  text-[12px] md:w-[90%] w-[70%] lg:w-[90%] p-2 text-gray-500">
              <span className="">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar,, sit amet
                adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                luctus pulvinar,, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar,
              </span>
            </div>
          </div>{" "}
          <button className="hover:bg-red-600 transition mt-2 ml-[53px] text-white bg-red-500 py-2 lg:w-[20%] md:w-[20%] w-[30%] flex gap-2 justify-center items-center text-[12px]">
            <AiOutlineHeart />
            Like
          </button>
        </div>

        <hr />
        <div
          id="Thirdpost"
          className="md:w-[100%] w-[90%] lg:w-[100%]  mt-5 flex p-3 justify-between"
        >
          <div className="flex gap-2">
            {" "}
            <div className=" flex gap-3">
              <img
                src="	https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                className="lg:w-[5%] w-[10%] h-[fit-content] rounded-[100%]"
                alt=""
              />{" "}
              <div className=" flex flex-col gap-1  ">
                <span className=" text-[14px] font-semibold text-gray-700">
                  {" "}
                  Stacie Hall
                  <span className=" text-gray-400"> posted</span> a new blog
                </span>
                <span className=" text-[12px] text-gray-500">
                  Today 7:51 AM
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <span className=" text-[12px]  text-gray-500">5m ago</span>
          </div>
        </div>
        <hr />

        <div id="fourthpost">
          {" "}
          <div className="md:w-[100%] w-[90%] lg:w-[100%]  mt-5 flex p-3 justify-between">
            <div className="flex gap-2 ">
              {" "}
              <div className=" flex gap-2 ">
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                  className="lg:w-[4%] w-[10%] h-[fit-content] rounded-[100%]"
                  alt=""
                />{" "}
                <div className=" flex flex-col gap-1 ml-[2px] w-[100%]">
                  <span className=" text-[14px] font-semibold text-gray-700">
                    Chris Wood{" "}
                    <span className=" text-gray-400">
                      {" "}
                      posted two photos on
                    </span>{" "}
                    Stacie Hall's timeline
                    <span className=" text-gray-400">timeline</span>
                  </span>
                  <span className=" text-[12px] text-gray-500">
                    Today 7:21 AM
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <span className=" text-[12px]  text-gray-500">5m ago</span>
            </div>
          </div>
          <div className="flex flex-col">
            {" "}
            <div className="flex gap-2 w-[25%] ml-[53px]">
              <img
                src="https://appstack.bootlab.io/img/photos/unsplash-1.jpg"
                alt=""
              />
              <img
                src="https://appstack.bootlab.io/img/photos/unsplash-2.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          <button className="hover:bg-red-600 transition mt-2 ml-[53px] text-white bg-red-500 py-2 lg:w-[20%] md:w-[20%] w-[30%] flex gap-2 justify-center items-center text-[12px]">
            <AiOutlineHeart />
            Like
          </button>
        </div>

        <hr />

        <div id="fifthpost">
          {" "}
          <div className="md:w-[100%] w-[90%] lg:w-[100%]  mt-5 flex p-3 justify-between">
            <div className="flex gap-2 ">
              {" "}
              <div className=" flex gap-3">
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                  className="lg:w-[5%] w-[10%] h-[fit-content] rounded-[100%]"
                  alt=""
                />{" "}
                <div className=" flex flex-col gap-1 ml-[2px] w-[100%]">
                  <span className=" text-[14px] font-semibold text-gray-700">
                    Chris Wood{" "}
                    <span className=" text-gray-400">started following</span>{" "}
                    Stacie Hall
                  </span>
                  <span className=" text-[12px] text-gray-500">
                    Today 7:21 AM
                  </span>{" "}
                  <div className="  "> </div>{" "}
                </div>{" "}
              </div>
            </div>

            <div className="">
              <span className=" text-[12px]  text-gray-500">5m ago</span>
            </div>
          </div>{" "}
          <div className="flex gap-3 text-gray-500 ml-[46px] mt-2">
            <img
              src="	https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
              className=" lg:w-[4%] w-[10%] h-[fit-content] rounded-[100%]"
              alt=""
            />

            <div className="border-2  text-[12px] md:w-[90%] w-[70%] lg:w-[90%] p-2 text-gray-500">
              <span className="">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar,, sit amet
              </span>
            </div>
          </div>
        </div>
        <hr />

        <div
          id="sixth"
          className="md:w-[100%] w-[90%] lg:w-[100%]  mt-5 flex p-3 justify-between"
        >
          <div className="flex gap-2">
            {" "}
            <div className=" flex gap-3 ">
              <img
                src="	https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                className="lg:w-[5%] w-[10%] h-[fit-content] rounded-[100%]"
                alt=""
              />{" "}
              <div className=" flex flex-col gap-1  ">
                <span className=" text-[14px] font-semibold text-gray-700">
                  {" "}
                  Stacie Hall
                  <span className=" text-gray-400"> posted</span> a new blog
                </span>
                <span className=" text-[12px] text-gray-500">
                  Today 7:51 AM
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <span className=" text-[12px]  text-gray-500">5m ago</span>
          </div>
        </div>
        <hr />

        <div
          id="Seventh"
          className="md:w-[100%] w-[90%] lg:w-[100%]  mt-5 flex p-3 justify-between"
        >
          <div className="flex gap-2">
            {" "}
            <div className="flex gap-3 ">
              <img
                src="	https://appstack.bootlab.io/img/avatars/avatar.jpg"
                className="lg:w-[5%] w-[10%] h-[fit-content] rounded-[100%]"
                alt=""
              />
              <div className=" flex flex-col gap-1  ">
                <span className=" text-[14px] font-semibold text-gray-700">
                  {" "}
                  Chris Woods
                  <span className=" text-gray-400"> posted</span> a new blog
                </span>
                <span className=" text-[12px] text-gray-500">
                  Today 7:51 AM
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <span className=" text-[12px]  text-gray-500">5m ago</span>
          </div>
        </div>
        <hr />

        <button className=" text-white text-center text-[15px] hover:bg-blue-600 transition bg-blue-500 p-[5px]">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Rightprofile;
