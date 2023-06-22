import React from "react";
import { Button } from "@mantine/core";
const Priceitem = () => {
  return (
    <div className=" ">
      <p className=" text-xl mt-[30px] font-semibold text-gray-600 ml-[50px]">
        Plan & Pricing
      </p>
      <div className="w-[100%]">
        <div className=" text-center flex flex-col gap-2 mt-[50px]">
          <p className=" text-2xl text-gray-600 font-semibold">
            We have a plan for everyone
          </p>
          <p className=" text-[18px] text-gray-500">
            Whether you're a business or an individual, 14-day trial no credit
            card required.
          </p>
          <div className=" mt-[15px]">
            <button className="rounded-sm shadow-md hover:bg-white hover:text-blue-500 transition text-white border-2 border-blue-500 bg-blue-500 text-[13px] p-1 w-[120px]">
              Monthly Billing
            </button>
            <button className=" rounded-sm shadow-md hover:bg-blue-500 hover:text-white hover:border-blue-500 transition text-gray-500 bg-white border-2 text-[13px] p-1 w-[120px]">
              Annual Billing
            </button>
          </div>
        </div>
      </div>

      <div
        id="package"
        className=" w-[100%] mt-[50px] flex flex-col lg:flex-row md:flex-row gap-3 justify-center"
      >
        <div className="lg:w-[20%] md:w-[30%] w-[90%] mx-auto lg:mx-0 md:mx-0 bg-white shadow-lg flex flex-col justify-between items-center p-5 h-[70vh]">
          <div className=" ">
            <p className=" text-[13px] font-semibold text-center">Free</p>
            <p className=" text-gray-600 text-[50px] text-center">$0</p>{" "}
            <div className=" flex flex-col gap-1 text-center mt-[10px]">
              <p className=" text-gray-600 font-semibold text-[15px]">
                Includes :
              </p>
              <p className=" text-[13px] text-gray-400 font-semibold">
                1 users
              </p>
              <p className=" text-[13px] text-gray-400 font-semibold">
                5 projects
              </p>
              <p className=" text-[13px] text-gray-400 font-semibold">
                5GB storages
              </p>
            </div>
          </div>

          <div className="">
            <button className="hover:bg-blue-500 hover:text-white transition border-[1px] border-blue-500 p-2 text-[15px] rounded-sm shadow-md text-blue-500">
              Sign up
            </button>
          </div>
        </div>
        <div className="lg:w-[20%] md:w-[30%] w-[90%] mx-auto lg:mx-0 md:mx-0 bg-white shadow-lg flex flex-col justify-between items-center p-5 h-[70vh]">
          <div className=" ">
            <p className=" text-[13px] font-semibold text-center">Standard</p>
            <span className=" text-gray-600 text-[50px] text-center">
              $19<span className=" text-[20px]">/mo</span>
            </span>{" "}
            <div className=" flex flex-col gap-1 text-center mt-[10px]">
              <p className=" text-gray-600 font-semibold text-[15px]">
                Includes :
              </p>
              <p className=" text-[13px] text-gray-400 font-semibold">
                5 users
              </p>
              <p className=" text-[13px] text-gray-400 font-semibold">
                50 projects
              </p>
              <p className=" text-[13px] text-gray-400 font-semibold">
                50GB storages
              </p>
              <p className=" text-[13px] text-gray-400 font-semibold">
                Security policy
              </p>
              <p className=" text-[13px] text-gray-400 font-semibold">
                Weekly backups
              </p>
            </div>
          </div>

          <div className="">
            <button className="hover:bg-white hover:border-blue-500 hover:text-blue-500 transition  bg-blue-500 p-2 text-[15px] rounded-sm shadow-md text-white">
              Try it for free
            </button>
          </div>
        </div>
        <div className="lg:w-[20%] md:w-[30%] w-[90%] mx-auto lg:mx-0 md:mx-0 bg-white shadow-lg flex flex-col justify-between items-center p-5 h-[70vh]">
          <div className=" ">
            <p className=" text-[13px] font-semibold text-center">Plus</p>
            <span className=" text-gray-600 text-[50px] text-center">
              $39<span className=" text-[20px]">/mo</span>
            </span>{" "}
            <div className=" flex flex-col gap-1 text-center mt-[10px]">
              <p className=" text-gray-600 font-semibold text-[15px]">
                Includes :
              </p>
              <div className=" text-[12px]">
                <p className=" text-gray-400 font-semibold">Unlimited users</p>
                <p className=" text-gray-400 font-semibold">
                  Unlimited projects
                </p>
                <p className=" text-gray-400 font-semibold">250GB storages</p>
                <p className=" text-gray-400 font-semibold">Priority support</p>
                <p className=" text-gray-400 font-semibold">Security policy</p>
                <p className=" text-gray-400 font-semibold">Daily backups</p>
                <p className=" text-gray-400 font-semibold">Custom css</p>
              </div>
            </div>
          </div>

          <div className="">
            <button className="hover:bg-blue-500 hover:text-white hover:border-blue-500 transition border-[1px] border-blue-500 p-2 text-[15px] rounded-sm shadow-md text-blue-500">
              Try it for free
            </button>
          </div>
        </div>
      </div>
      <hr className=" w-[62%] text-center mx-auto font-bold mt-[20px]" />

      <div id="question " className=" mt-[50px]">
        <p className=" text-center text-2xl font-semibold text-gray-600">
          Frequently asked questions
        </p>
        <div className=" flex flex-col gap-[30px] mt-[40px]">
          <div className=" flex flex-col lg:flex-row md:flex-col gap-[30px] justify-center">
            <div className="lg:w-[25%] md:w-[90%] w-[90%] mx-auto lg:mx-0 md:mx-auto p-5 bg-white shadow-lg ">
              <p className=" text-[15px] text-gray-600 font-semibold">
                Do I need credit card?
              </p>
              <p className="text-[13px] text-gray-500 font-semibold">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem.
              </p>
            </div>
            <div className="lg:w-[25%] md:w-[90%] w-[90%] mx-auto lg:mx-0 md:mx-auto p-5 bg-white shadow-lg ">
              <p className=" text-[15px] text-gray-600 font-semibold">
                Do you offer a free trial
              </p>
              <p className="text-[13px] text-gray-500 font-semibold">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem.
              </p>
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row md:flex-col gap-[30px] justify-center">
            <div className="lg:w-[25%] md:w-[90%] w-[90%] mx-auto lg:mx-0 md:mx-auto p-5 bg-white shadow-md ">
              <p className=" text-[15px] text-gray-600 font-semibold">
                What if I decide to cancel my plan?
              </p>
              <p className="text-[13px] text-gray-500 font-semibold">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem.
              </p>
            </div>
            <div className="lg:w-[25%] md:w-[90%] w-[90%] mx-auto lg:mx-0 md:mx-auto p-5 bg-white shadow-md ">
              <p className=" text-[15px] text-gray-600 font-semibold">
                Can I cancel at anytime?
              </p>
              <p className="text-[13px] text-gray-500 font-semibold">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priceitem;
