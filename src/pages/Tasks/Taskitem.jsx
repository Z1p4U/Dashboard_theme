import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const Taskitem = () => {
  return (
    <div className=" w-[100%] mt-[40px]">
      <div className="w-[92%] flex justify-between mx-auto">
        <p className=" text-gray-600 font-semibold text-2xl">Tasks</p>
        <button className=" text-[12px] text-white bg-blue-600 p-2 shadow-sm rounded-sm">
          Add tasks
        </button>
      </div>

      <div className="w-[100%] mt-[30px] flex flex-col lg:flex-row md:flex-row gap-3 mx-auto justify-center">
        <div className="lg:w-[30%] mx-auto lg:mx-0 md:mx-0 md:w-[50%] w-[100%] bg-white shadow-lg p-3">
          <div className=" flex justify-between">
            <div className=" flex flex-col gap-2">
              <p className=" text-[15px] text-gray-600 font-semibold">
                Upcoming
              </p>
              <p className=" text-[14px] text-gray-400">
                Nam pretium turpis et arcu. Duis arcu.
              </p>
            </div>
            <BiDotsHorizontalRounded />
          </div>

          <div className=" flex flex-col gap-3 mt-[25px]">
            <div className="first_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="sec_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="third_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="fourth_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="fifth_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="sixth_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <button className=" text-white text-[13px] font-semibold bg-blue-600 p-2">
              Add new Task
            </button>
          </div>
        </div>
        <div className="lg:w-[30%] mx-auto lg:mx-0 md:mx-0 md:w-[50%] w-[100%] h-[fit-content] bg-white shadow-lg p-3">
          <div className=" flex justify-between">
            <div className=" flex flex-col gap-2">
              <p className=" text-[15px] text-gray-600 font-semibold">
                Upcoming
              </p>
              <p className=" text-[14px] text-gray-400">
                Nam pretium turpis et arcu. Duis arcu.
              </p>
            </div>
            <BiDotsHorizontalRounded />
          </div>

          <div className=" flex flex-col gap-3 mt-[25px]">
            <div className="first_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="sec_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="third_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <button className=" text-white text-[13px] font-semibold bg-blue-600 p-2">
              Add new Task
            </button>
          </div>
        </div>
        <div className="lg:w-[30%] mx-auto lg:mx-0 md:mx-0 md:w-[50%] w-[100%] bg-white shadow-lg p-3">
          <div className=" flex justify-between">
            <div className=" flex flex-col gap-2">
              <p className=" text-[15px] text-gray-600 font-semibold">
                Upcoming
              </p>
              <p className=" text-[14px] text-gray-400">
                Nam pretium turpis et arcu. Duis arcu.
              </p>
            </div>
            <BiDotsHorizontalRounded />
          </div>

          <div className=" flex flex-col gap-3 mt-[25px]">
            <div className="first_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="sec_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="third_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="fourth_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="fifth_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <div className="sixth_card  w-[100%] p-5  flex justify-between h-[fit-content]   bg-[#f5f5f5]">
              <div className=" flex flex-col gap-3 justify-between w-[70%]">
                <p className=" text-[15px] w-[100%] text-gray-600">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada
                </p>
                <button className="bg-blue-600 font-semibold shadow-sm rounded-sm mb-auto  text-[12px] text-white p-1 w-[50px]">
                  View
                </button>
              </div>
              <div className=" flex flex-col justify-between items-end w-[30%]">
                <input type="checkbox" className=" w-[10px]" />
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  className="lg:w-[30%] w-[50%] rounded-full h-[fit-content]"
                  alt=""
                />
              </div>
            </div>

            <button className=" text-white text-[13px] font-semibold bg-blue-600 p-2">
              Add new Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskitem;
