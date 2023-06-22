import React from "react";
import Leftprofiles from "./Leftprofiles";
import Rightprofiles from "./Rightprofiles";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Profiles = () => {
  return (
    <div className="  overflow-x-hidden  ">
      {" "}
      <p className=" text-2xl text-gray-500 font-semibold text-[25px] mt-[20px] ml-[40px]">
        Profile
      </p>
      <div className=" w-[100%] flex flex-col justify-center lg:justify-normal md:justify-normal lg:flex-row md:flex-row  gap-5 lg:ml-[40px] md:ml-[40px] ml-[0] ">
        <Leftprofiles />
        <Rightprofiles />
      </div>
    </div>
  );
};

export default Profiles;
