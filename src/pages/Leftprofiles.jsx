import React from "react";
import { BsChatText } from "react-icons/bs";
import { HiOutlineHome, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Badge } from "@mantine/core";
import {
  AiOutlineGlobal,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Leftprofile = () => {
  return (
    <div className=" md:w-[30%] w-[92%] lg:w-[23%] mt-[10px] h-[fit-content] mx-auto lg:mx-0 md:mx-0  p-2 bg-white shadow-lg rounded-md">
      <div id="profile_pic_and_name" className=" w-[100%] p-3">
        {" "}
        <p className=" text-gray-600 font-semibold">Profile Details</p>
        <img
          src="	https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
          className=" mx-auto w-[52%] h-[fit-content] lg:w-[51%] lg:h-[fit-content] md:w-[40%%] md:h-[fit-content] rounded-[50%] mt-[30px]"
          alt=""
        />
        <div className=" text-center mb-4">
          <p className=" text-gray-700 font-semibold">Stacie Hall</p>
          <p className=" text-gray-400 text-[14px]">Lead Developer</p>
        </div>
        <div className="flex gap-2 text-[12px] justify-center items-center">
          <button className=" p-[5px] text-white bg-blue-500 rounded-sm">
            Follow
          </button>
          <button className="p-[5px]  text-white flex gap-2 bg-blue-500 rounded-sm">
            <BsChatText />
            Message
          </button>
        </div>
      </div>
      <hr />
      <div id="skills" className=" w-[100%] p-3">
        <p className=" text-gray-600 font-semibold mb-4">Skills</p>
        <div className=" flex flex-wrap gap-2 text-center">
          <button className=" p-[3px]  text-white bg-blue-500 text-[10px] font-bold  ">
            HTML
          </button>
          <button className=" p-[3px]  text-white bg-blue-500 text-[10px] font-bold  ">
            Javascript
          </button>
          <button className=" p-[3px]  text-white bg-blue-500 text-[10px] font-bold  ">
            Sass
          </button>
          <button className=" p-[3px]  text-white bg-blue-500 text-[10px] font-bold  ">
            Angular
          </button>
          <button className=" p-[3px]   text-white bg-blue-500 text-[10px] font-bold  ">
            Vue
          </button>
          <button className=" p-[3px]   text-white bg-blue-500 text-[10px] font-bold  ">
            React
          </button>
          <button className=" p-[3px]  text-white bg-blue-500 text-[10px]">
            Redux
          </button>
          <button className=" p-[3px]  text-white bg-blue-500 text-[10px] font-bold  ">
            UI/UX
          </button>
        </div>
      </div>
      <hr />

      <div id="about" className=" w-[100%] p-3 flex flex-col gap-3">
        {" "}
        <p className="font-semibold  text-gray-700">About</p>
        <div className="flex gap-2 items-center">
          <p>
            <HiOutlineHome className=" text-gray-400" />
          </p>
          <span className=" text-[13px] font-semibold">
            Live in{" "}
            <span className=" text-blue-500 text-[13px] cursor-pointer">
              San Francisco,SA
            </span>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <p>
            <MdOutlineWorkOutline className=" text-gray-400" />
          </p>
          <p className=" flex gap-2 items-center text-[13px] font-semibold">
            Work at{" "}
            <p className=" text-[13px] text-blue-500 cursor-pointer">GitHub</p>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p>
            <HiOutlineLocationMarker className=" text-gray-400" />
          </p>
          <p className=" flex gap-2 text-[13px] font-semibold items-center">
            From <p className=" text-blue-500 cursor-pointer">Baston</p>
          </p>
        </div>
      </div>

      <hr />

      <div id="elsewhere" className=" w-[100%] p-3 flex flex-col gap-3">
        <p className="font-semibold  text-gray-700 ">Elsewhere</p>
        <div className="flex gap-2 items-center">
          <p>
            <AiOutlineGlobal className=" text-gray-400" />
          </p>
          <span className=" text-[13px] font-semibold  text-blue-500 cursor-pointer">
            StacieHall.co
            <span className=" text-blue-500 text-[13px] cursor-pointer">
              San Francisco,SA
            </span>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <p>
            <AiOutlineTwitter className=" text-gray-400" />
          </p>
          <p className=" flex gap-2 items-center text-[13px] font-semibold text-blue-500 cursor-pointer">
            Twitter
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <p>
            <BsFacebook className=" text-gray-400" />
          </p>
          <p className=" flex gap-2 items-center text-[13px] font-semibold text-blue-500 cursor-pointer">
            Facebook
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <p>
            <AiOutlineInstagram className=" text-gray-400" />
          </p>
          <p className=" flex gap-2 items-center text-[13px] font-semibold text-blue-500 cursor-pointer">
            Instagram
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <p>
            <AiFillLinkedin className=" text-gray-400" />
          </p>
          <p className=" flex gap-2 items-center text-[13px] font-semibold text-blue-500 cursor-pointer">
            Linkedin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leftprofile;
