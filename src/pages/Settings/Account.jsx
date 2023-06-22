import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Menu, Button, Text } from "@mantine/core";
const Account = () => {
  return (
    <div className="  flex flex-col gap-10 w-[100%]">
      <div className=" flex lg:flex-row md:flex-row flex-col justify-between gap-[50px]  w-[100%]  bg-white shadow-lg p-10 ">
        <form className="md:w-[60%] w-[100%]  lg:w-[60%]" action="">
          {" "}
          <p className="font-semibold text-gray-600">Public info</p>
          <div className=" flex flex-col  justify-between gap-3">
            {" "}
            `{" "}
            <div className="">
              {" "}
              <div className=" flex flex-col gap-2">
                <p className=" text-[13px] text-gray-400 font-semibold">
                  Username
                </p>

                <div className="flex flex-col gap-1">
                  {" "}
                  <input
                    className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                    type="text"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2">
                <p className=" text-[13px] text-gray-400 font-semibold">
                  Biography
                </p>
                <textarea
                  className=" outline-none bg-white text-black p-2 text-[12px] border-[1px] border-gray-400 w-[100%]"
                  placeholder="Type something you want to say"
                />
              </div>
            </div>
          </div>
          <button className=" hover:bg-blue-600 transition text-white text-[13px] mt-[50px] rounded-sm  bg-blue-500 p-2 lg:w-[50%] md:w-[60%] w-[60%]">
            Save changes
          </button>
        </form>

        <div className=" lg:w-[20%] md:w-[20%] w-[100%] flex justify-center flex-col gap-2 mt-[25px]">
          <img
            src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
            className=" w-[80%] h-[fit-content] md:w-[100%]  lg:w-[97%]  rounded-[100%]"
            alt=""
          />

          <button className=" text-[13px] w-[100%] text-white bg-blue-600 p-2">
            Upload
          </button>
          <p className=" text-[12px] w-[100%] text-center mt-[10px] text-gray-600">
            For best results, use an image at least 128px by 128px in .jpg
            format
          </p>
        </div>
      </div>

      <form className=" mt-[5px]  w-[100%]  bg-white shadow-lg p-10">
        <p className="font-semibold text-gray-600">Private info</p>
        <div className=" flex flex-col gap-3 w-[100%] mt-[30px]">
          {/* name */}

          <div className="flex justify-between gap-3 w-[100%]">
            <div className=" flex flex-col gap-2 w-[50%]">
              <p className=" text-[13px] text-gray-400 font-semibold">
                Firstname
              </p>

              <div className="flex flex-col gap-1">
                {" "}
                <input
                  className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                  type="text"
                  placeholder="firstname"
                />
              </div>
            </div>

            <div className=" flex flex-col gap-2 w-[50%]">
              <p className=" text-[13px] text-gray-400 font-semibold">
                Lastname
              </p>

              <div className="flex flex-col gap-1">
                {" "}
                <input
                  className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                  type="text"
                  placeholder="lastname"
                />
              </div>
            </div>
          </div>

          {/* email */}

          <div className=" flex flex-col gap-2 w-[100%]">
            <p className=" text-[13px] text-gray-400 font-semibold">Email</p>
            <div className="flex flex-col gap-1">
              {" "}
              <input
                className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                type="email"
                placeholder="email"
              />
            </div>
            {/* address */}
            <div className=" flex flex-col gap-2 w-[100%]">
              <p className=" text-[13px] text-gray-400 font-semibold">
                Address-1
              </p>

              <div className="flex flex-col gap-1">
                {" "}
                <input
                  className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                  type="text"
                  placeholder="1234 Main Street"
                />
              </div>
            </div>
            {/* address -1*/}
            <div className=" flex flex-col gap-2 w-[100%]">
              <p className=" text-[13px] text-gray-400 font-semibold">
                Address-2
              </p>

              <div className="flex flex-col gap-1">
                {" "}
                <input
                  className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                  type="text"
                  placeholder="1234 Main Street"
                />
              </div>
            </div>
            {/* last */}
            <div className="flex gap-3">
              <div className=" flex flex-col gap-2 w-[40%]">
                <p className=" text-[13px] text-gray-400 font-semibold">City</p>

                <div className="flex flex-col gap-1">
                  {" "}
                  <input
                    className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                    type="text"
                    placeholder="State"
                  />
                </div>
              </div>

              <div className=" flex flex-col gap-2 w-[40%]">
                <p className=" text-[13px] text-gray-400 font-semibold">
                  State
                </p>

                <div className="flex flex-col gap-1">
                  {" "}
                  <select
                    className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                    type="text"
                    placeholder="1234 Main Street"
                  >
                    <option value="" className=" text-gray-500">
                      Choose
                    </option>
                  </select>
                </div>
              </div>

              <div className=" flex flex-col gap-2 w-[20%]">
                <p className=" text-[13px] text-gray-400 font-semibold">Zip</p>

                <div className="flex flex-col gap-1">
                  {" "}
                  <input
                    className=" outline-none text-[12px] bg-white text-black p-2 border-[1px] border-gray-400 w-[100%]"
                    type="text"
                    placeholder="code"
                  />
                </div>
              </div>
            </div>{" "}
            <button className="hover:bg-blue-600 transition text-white text-[13px] mt-[20px] rounded-sm  bg-blue-500 p-2 md:w-[40%] w-[60%] lg:w-[20%]">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
