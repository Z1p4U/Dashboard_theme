import React from "react";

const Leftsetting = ({ show, setshow }) => {
  return (
    <div className=" lg:w-[20%] md:w-[20%] w-[100%] bg-white shadow-md h-[fit-content] md:ml-[50px] ml-[10px] lg:ml-[50px] ">
      <p className=" p-3">Profile Settings</p>
      <div className="flex flex-col gap-2 ">
        <p
          onClick={() => setshow(false)}
          className=" cursor-pointer text-[13px] text-gray-600 p-2 focus:bg-blue focus:text-white font-semibold hover:text-black hover:bg-gray-300 transition"
        >
          Account
        </p>
        <hr />
        <p
          onClick={() => setshow(true)}
          className=" cursor-pointer text-[13px] text-gray-600 p-2 focus:bg-blue focus:text-white font-semibold hover:text-black hover:bg-gray-300 transition"
        >
          Password
        </p>
        <hr />
        <p className=" cursor-pointer text-[13px] text-gray-600 p-2 focus:bg-blue focus:text-white font-semibold hover:text-black hover:bg-gray-300 transition">
          Privacy and safety
        </p>
        <hr />
        <p className=" cursor-pointer text-[13px] text-gray-600 p-2 focus:bg-blue focus:text-white font-semibold hover:text-black hover:bg-gray-300 transition">
          Email and notifications
        </p>
        <hr />
        <p className=" cursor-pointer text-[13px] text-gray-600 p-2 focus:bg-blue focus:text-white font-semibold hover:text-black hover:bg-gray-300 transition">
          Web notifications
        </p>
        <hr />
        <p className=" cursor-pointer text-[13px] text-gray-600 p-2 focus:bg-blue focus:text-white font-semibold hover:text-black hover:bg-gray-300 transition">
          Widgets
        </p>
        <hr />
        <p className=" cursor-pointer text-[13px] text-gray-600 p-2 focus:bg-blue focus:text-white font-semibold hover:text-black hover:bg-gray-300 transition">
          Your data
        </p>
        <hr />
        <p className=" cursor-pointer text-[13px] text-gray-600 p-2 focus:bg-blue focus:text-white font-semibold hover:text-black hover:bg-gray-300 transition">
          Delete account
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Leftsetting;
