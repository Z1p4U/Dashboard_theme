import React from "react";
import { FaCircle } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi";
const Messageitem = () => {
  return (
    <div className=" w-[100%] ">
      <p className=" text-2xl font-semibold ml-[30px] mt-[20px] text-gray-600">
        Messages
      </p>

      <div className="bg-white shadow-lg flex flex-col lg:flex-row md:flex-row justify-center gap-3 w-[90%] mx-auto">
        <div className="lg:w-[20%] md:w-[54%] w-[92%] p-3 md:border-r-[2px] border-r-0 lg:border-r-[2px]  md:border-b-[0px] border-b-[2px] lg:border-b-[0px]">
          <input
            type="text"
            placeholder="Search"
            className=" w-[100%] p-2 border-[1px] text-[13px]"
          />

          <div className="p_chat w-[100%] flex mt-[20px] justify-between items-center gap-2">
            <div className="flex w-[70%] gap-5">
              {" "}
              <img
                src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                className=" lg:w-[23%] md:w-[30%] w-[20%] h-[fit-content] rounded-full"
                alt=""
              />
              <div className=" flex flex-col ">
                <p className=" text-[13px] font-semibold text-gray-500">
                  Ashley Briggs
                </p>
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[12px] rounded-sm shadow-sm text-green-600" />
                  <p className=" text-[10px]">Online</p>
                </div>
              </div>
            </div>

            <p className=" rounded-sm shadow-sm  bg-green-600 text-white text-[12px] px-2 w-[fit-content] h-[fit-content]">
              5
            </p>
          </div>

          <div className="p_chat w-[100%] flex mt-[20px] justify-between items-center gap-2">
            <div className="flex w-[70%] gap-5">
              {" "}
              <img
                src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                className=" lg:w-[23%] md:w-[30%] w-[20%] h-[fit-content] rounded-full"
                alt=""
              />
              <div className=" flex flex-col ">
                <p className=" text-[13px] font-semibold text-gray-500">
                  Harry Brown
                </p>
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[12px] rounded-sm shadow-sm text-green-600" />
                  <p className=" text-[10px]">Online</p>
                </div>
              </div>
            </div>

            <p className=" rounded-sm shadow-sm  bg-green-600 text-white text-[12px] px-2 w-[fit-content] h-[fit-content]">
              5
            </p>
          </div>

          <div className="p_chat w-[100%] flex mt-[20px] justify-between items-center gap-2">
            <div className="flex w-[70%] gap-5">
              {" "}
              <img
                src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                className=" lg:w-[23%] md:w-[30%] w-[20%] h-[fit-content] rounded-full"
                alt=""
              />
              <div className=" flex flex-col ">
                <p className=" text-[13px] font-semibold text-gray-500">
                  Stacy Hall
                </p>
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[12px] rounded-sm shadow-sm text-green-600" />
                  <p className=" text-[10px]">Online</p>
                </div>
              </div>
            </div>

            <p className=" rounded-sm shadow-sm  bg-green-600 text-white text-[12px] px-2 w-[fit-content] h-[fit-content]">
              5
            </p>
          </div>

          <div className="p_chat w-[100%] flex mt-[20px] justify-between items-center gap-2">
            <div className="flex w-[70%] gap-5">
              {" "}
              <img
                src="https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                className=" lg:w-[23%] md:w-[30%] w-[20%] h-[fit-content] rounded-full"
                alt=""
              />
              <div className=" flex flex-col ">
                <p className=" text-[13px] font-semibold text-gray-500">
                  Bertha Mertin
                </p>
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[12px] rounded-sm shadow-sm text-green-600" />
                  <p className=" text-[10px]">Online</p>
                </div>
              </div>
            </div>

            <p className=" rounded-sm shadow-sm  bg-green-600 text-white text-[12px] px-2 w-[fit-content] h-[fit-content]">
              5
            </p>
          </div>

          <div className="p_chat w-[100%] flex mt-[20px] justify-between items-center gap-2">
            <div className="flex w-[70%] gap-5">
              {" "}
              <img
                src="https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                className=" lg:w-[23%] md:w-[30%] w-[20%] h-[fit-content] rounded-full"
                alt=""
              />
              <div className=" flex flex-col ">
                <p className=" text-[13px] font-semibold text-gray-500">
                  James Collin
                </p>
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[12px] rounded-sm shadow-sm text-green-600" />
                  <p className=" text-[10px]">Online</p>
                </div>
              </div>
            </div>

            <p className=" rounded-sm shadow-sm  bg-green-600 text-white text-[12px] px-2 w-[fit-content] h-[fit-content]">
              5
            </p>
          </div>
          <div className="p_chat w-[100%] flex mt-[20px] justify-between items-center gap-2">
            <div className="flex w-[70%] gap-5">
              {" "}
              <img
                src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
                className=" lg:w-[23%] md:w-[30%] w-[20%] h-[fit-content] rounded-full"
                alt=""
              />
              <div className=" flex flex-col ">
                <p className=" text-[13px] font-semibold text-gray-500">
                  Charlote
                </p>
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[12px] rounded-sm shadow-sm text-red-600" />
                  <p className=" text-[10px]">Offline</p>
                </div>
              </div>
            </div>

            <p className=" rounded-sm shadow-sm  bg-green-600 text-white text-[12px] px-2 w-[fit-content] h-[fit-content]">
              5
            </p>
          </div>

          <div className="p_chat w-[100%] flex mt-[20px] justify-between items-center gap-2">
            <div className="flex w-[70%] gap-5">
              {" "}
              <img
                src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                className=" lg:w-[23%] md:w-[30%] w-[20%] h-[fit-content] rounded-full"
                alt=""
              />
              <div className=" flex flex-col ">
                <p className=" text-[13px] font-semibold text-gray-500">
                  James
                </p>
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[12px] rounded-sm shadow-sm text-red-600" />
                  <p className=" text-[10px]">Offline</p>
                </div>
              </div>
            </div>

            <p className=" rounded-sm shadow-sm  bg-green-600 text-white text-[12px] px-2 w-[fit-content] h-[fit-content]">
              5
            </p>
          </div>

          <div className="p_chat w-[100%] flex mt-[20px] justify-between items-center gap-2">
            <div className="flex w-[70%] gap-5">
              {" "}
              <img
                src="https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
                className=" lg:w-[23%] md:w-[30%] w-[20%] h-[fit-content] rounded-full"
                alt=""
              />
              <div className=" flex flex-col ">
                <p className=" text-[13px] font-semibold text-gray-500">
                  Willian
                </p>
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[12px] rounded-sm shadow-sm text-red-600" />
                  <p className=" text-[10px]">Offline</p>
                </div>
              </div>
            </div>

            <p className=" rounded-sm shadow-sm  bg-green-600 text-white text-[12px] px-2 w-[fit-content] h-[fit-content]">
              5
            </p>
          </div>
        </div>

        <div className="lg:w-[80%] md:w-[80%] w-[100%] mt-10 lg:mt-0 md:mt-0">
          <div className="chatheads sticky bg-white shadow-sm border-b-[1px] p-2">
            <div className=" flex justify-between">
              <div className=" flex gap-[25px] ">
                {" "}
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                  className=" lg:w-[6%] md:w-[18%] w-[20%] h-[fit-content] rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" text-gray-700 font-semibold text-[15px]">
                    Bertha Martin
                  </p>
                  <p className=" text-[12px] text-gray-400">
                    <i>Typing...</i>
                  </p>
                </div>
              </div>

              <div className=" flex gap-2 w-[40%] justify-end">
                <button className="text-white md:h-[3vh] lg:h-[5vh] h-[5vh] bg-blue-500 rounded-md w-[40px] flex justify-center items-center py-1 px-2">
                  <BsTelephone />
                </button>

                <button className="text-white md:h-[3vh] lg:h-[5vh] h-[5vh] bg-blue-500 rounded-md w-[40px] flex justify-center items-center py-1 px-2">
                  <HiVideoCamera />
                </button>

                <button className=" text-gray-700 h-[5vh] md:h-[3vh] lg:h-[5vh] bg-gray-300 rounded-md w-[40px] flex justify-center items-center py-1 px-2">
                  ...
                </button>
              </div>
            </div>
          </div>

          <div className="chatting p-3 border-b-[1.5px]">
            <div className="me flex justify-end items-end gap-3 mt-[100px]">
              <div className=" bg-[#f5f5f5] p-2 h-[fit-content]  w-[fit-content]">
                <p className=" text-gray-600 text-[14px] font-semibold">You</p>
                <p className=" text-gray-500 text-[14px]">
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                {" "}
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className=" w-[90%] rounded-full h-[5vh]"
                  alt=""
                />
                <p className=" text-[12px] text-gray-400">2:30PM</p>
              </div>
            </div>
            <div className="others flex flex-row-reverse justify-end items-end gap-3 mt-[30px]">
              <div className=" bg-[#f5f5f5] p-2 h-[fit-content] w-[fit-content]">
                <p className=" text-gray-500 text-[14px] font-semibold">
                  Bertha Martin
                </p>
                <p className=" text-gray-600 text-[14px]">
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                  erat animal commodo.
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                {" "}
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                  className=" w-[90%] rounded-full mr-[] h-[5vh]"
                  alt=""
                />
                <p className=" text-[12px] text-gray-400">2:30PM</p>
              </div>
            </div>
            <div className="me flex justify-end items-end gap-3 mt-[30px]">
              <div className=" bg-[#f5f5f5] p-2 h-[fit-content]  w-[fit-content]">
                <p className=" text-gray-600 text-[14px] font-semibold">You</p>
                <p className=" text-gray-500 text-[14px]">
                  Cum ea graeci tractatos.
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                {" "}
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className=" w-[90%] rounded-full mr-[] h-[5vh]"
                  alt=""
                />
                <p className=" text-[12px] text-gray-400">2:30PM</p>
              </div>
            </div>
            <div className="others flex flex-row-reverse justify-end items-end gap-3 mt-[30px]">
              <div className=" bg-[#f5f5f5] p-2 h-[fit-content] w-[fit-content]">
                <p className=" text-gray-600 text-[14px] font-semibold">
                  Bertha Martin
                </p>
                <p className=" text-gray-500 text-[14px]">
                  Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                  porttitor magna, vitae commodo lectus mauris et velit. Proin
                  ultricies placerat imperdiet. Morbi varius quam ac venenatis
                  tempus.
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                {" "}
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                  className=" w-[90%] rounded-full mr-[] h-[5vh]"
                  alt=""
                />
                <p className=" text-[12px] text-gray-400">2:30PM</p>
              </div>
            </div>

            <div className="others flex flex-row-reverse justify-end items-end gap-3 mt-[30px]">
              <div className=" bg-[#f5f5f5] p-2 h-[fit-content] w-[fit-content]">
                <p className=" text-gray-600 text-[14px] font-semibold">
                  Bertha Martin
                </p>
                <p className=" text-gray-500 text-[14px]">
                  Sed pulvinar, massa vitae interdum ultricies placerat
                  imperdiet. Morbi varius quam ac venenatis tempus.
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                {" "}
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
                  className=" w-[90%] rounded-full mr-[] h-[5vh]"
                  alt=""
                />
                <p className=" text-[12px] text-gray-400">2:30PM</p>
              </div>
            </div>

            <div className="me flex justify-end items-end gap-3 mt-[30px]">
              <div className=" bg-[#f5f5f5] p-2 h-[fit-content]  w-[fit-content]">
                <p className=" text-gray-600 text-[14px] font-semibold">You</p>
                <p className=" text-gray-500 text-[14px]">
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                {" "}
                <img
                  src="	https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className=" w-[90%] rounded-full mr-[] h-[5vh]"
                  alt=""
                />
                <p className=" text-[12px] text-gray-400">2:30PM</p>
              </div>
            </div>
          </div>

          <div className="flex w-[100%] p-5 ">
            <input
              type="text"
              className=" border-[1px] border-gray-400 outline-none text-[13px] p-1 w-[90%]"
              placeholder="Type your text"
            />
            <button className="outline-none transition hover:bg-blue-500 text-white text-[13px] w-[fit-content] p-2  font-semibold bg-blue-600 shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messageitem;
