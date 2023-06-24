import React, { useEffect } from "react";
import { useForm } from "@mantine/form";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF, FaMicrosoft } from "react-icons/fa";

import { Anchor, Button, PasswordInput, TextInput } from "@mantine/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/api/authApi";
import { addUser } from "../redux/authSlice";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const SignIn = () => {
  // const datas = useSelector((state) => state.auth)
  const token = Cookies.get("token");
  const path = useLocation();

  const notify = () =>
    toast.success("Login successfuly!", {
      position: "bottom-right",
      autoClose: 100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = () =>
    toast.error("Login Fail!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,

      progress: undefined,
      theme: "colored",
    });

  const form = useForm({
    initialValues: {
      email: "kyawkyaw@gmail.com",
      password: "kyaw2000",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value < 5 ? "Your password must be at least 5 cha" : null,
    },
  });
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  return (
    <div className=" flex justify-center ">
      {" "}
      <div className="flex flex-col w-[80%] md:w-[80%] lg:w-[30%] h-[fit-content] gap-2">
        {" "}
        <form
          className="  bg-white shadow-lg  lg:mx-0 px-5 mt-10 lg:mt-5  py-14 rounded-xl"
          onSubmit={form.onSubmit(async (values) => {
            console.log(values);
            try {
              const { data } = await login(values);
              console.log(data);
              if (data?.success) {
                dispatch(addUser({ user: data?.user, token: data?.token }));
                notify();
                nav(`/`);
              }
              if (data?.success === false) {
                notifyError();
              }
            } catch (error) {
              console.log(error);
            }
          })}
        >
          <div className=" flex justify-center gap-3">
            <svg
              fill="#4a88eb"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 20 20"
              enableBackground="new 0 0 20 20"
              xmlSpace="preserve"
            >
              <path
                d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
              C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"
              ></path>
              <path
                d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"
              ></path>
              <path
                d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"
              ></path>
            </svg>
            <p className=" text-black text-2xl h-1 font-bold">AppStack</p>
          </div>
          <div className=" bg-white shadow-sm  p-5 flex flex-col gap-3 rounded-lg">
            <TextInput
              mt="sm"
              label="Email"
              className=""
              placeholder="Enter your email"
              description="Put your email in a box "
              {...form.getInputProps("email")}
            />
            <div className="">
              {" "}
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                description="Put your password in a box correctly "
                {...form.getInputProps("password")}
              />
              <a href="#" className=" text-blue-600 text-[13px] font-semibold">
                Forgot your password?
              </a>
            </div>

            <button
              disabled={isLoading}
              className=" text-white p-2 bg-blue-500 text-center rounded flex justify-center w-full mt-5"
            >
              {isLoading && (
                <img src={"/Infinity-1s-200px.svg"} className=" w-10 h-5" />
              )}{" "}
              <span className=" font-semibold">Login</span>
            </button>
          </div>
          <div className="flex gap-2 justify-center items-center ">
            <div className=" w-[40%]">
              <hr className="" />
            </div>
            <div className="">
              {" "}
              <p className=" text-gray-400 text-[13px] font-semibold">OR</p>
            </div>
            <div className="w-[40%]">
              {" "}
              <hr />
            </div>
          </div>
          <div className="flex flex-col gap-2 p-3">
            <button
              className=" text-white gap-3
           bg-red-600 hover:bg-red-700 transition p-3 flex rounded-sm  text-[14px] font-semibold justify-center items-center w-[98%] cursor-pointer"
            >
              <AiOutlineGoogle /> <span className=" ">Sign in with Google</span>
            </button>
            <button
              className=" text-white gap-3
           bg-blue-800  hover:bg-blue-900 transition p-3 flex rounded-sm  text-[14px] font-semibold justify-center items-center w-[98%] cursor-pointer"
            >
              <FaFacebookF /> <span className=" ">Sign in with Facebook</span>
            </button>
            <button
              className=" text-white gap-3
           bg-black p-3 flex rounded-sm   text-[14px] font-semibold justify-center items-center w-[98%] cursor-pointer"
            >
              <FaMicrosoft /> <span className=" ">Sign in with Microsoft</span>
            </button>
          </div>{" "}
          <div className=" flex gap-3 justify-center">
            <Link to={"/signup"}>
              <Anchor
                disabled={isLoading}
                component="button"
                type="button"
                color="dimmed"
                size="xs"
                className=" text-[15px] "
              >
                Doesn't have an account ?{" "}
                <span className=" text-blue-500">SignUp</span>
              </Anchor>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
