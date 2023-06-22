import React from "react";

const Password = () => {
  return (
    <div className=" w-[100%]  bg-white shadow-lg p-10 ">
      <p className="font-semibold text-gray-600">Password</p>
      <form className=" flex flex-col gap-3" action="">
        <div className=" flex flex-col gap-2">
          <p className=" text-[13px] text-gray-400 font-semibold">
            Current password
          </p>

          <div className="flex flex-col gap-1">
            {" "}
            <input
              className=" outline-none bg-white text-black p-1 border-[1px] border-gray-400 w-[100%]"
              type="password"
            />
            <p className=" text-blue-600 text-[11px] font-semibold">
              Forgot password?
            </p>
          </div>
        </div>

        <div className=" flex flex-col gap-2">
          <p className=" text-[13px] text-gray-400 font-semibold">
            New password
          </p>
          <input
            className=" outline-none bg-white text-black p-1 border-[1px] border-gray-400 w-[100%]"
            type="password"
          />
        </div>

        <div className=" flex flex-col gap-2">
          <p className=" text-[13px] text-gray-400 font-semibold">
            Verify password
          </p>
          <input
            className=" outline-none bg-white text-black p-1 border-[1px] border-gray-400 w-[100%]"
            type="password"
          />
        </div>
        <button className="hover:bg-blue-500 transition text-white text-[13px] mt-[10px]  bg-blue-600 p-2 md:w-[40%] w-[60%] lg:w-[20%]">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default Password;
