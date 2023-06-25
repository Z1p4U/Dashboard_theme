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
    <div className=" flex justify-center h-screen my-10 md:mb-0 items-center align-middle ">
      {" "}
      <div className="flex flex-col w-[80%] md:w-[80%] lg:w-[30%] h-[fit-content] gap-2">
        <div className=" flex justify-center flex-col align-middle items-center mt-4 md:mt-0">
          <h2 className=" text-2xl font-semibold ">Welcome back!</h2>
          <p>Sign in to your account to continue</p>
        </div>
        <form
          className="  bg-white shadow-lg rounded-xl"
          onSubmit={form.onSubmit(async (values) => {
            // console.log(values);
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
          <div className=" bg-white shadow-sm  px-5 py-5 flex flex-col gap-3 rounded-lg">
            <TextInput
              mt="sm"
              label="Email"
              className=""
              placeholder="Enter your email"
              description="Put your email in a box "
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              description="Put your password in a box correctly "
              {...form.getInputProps("password")}
            />
            <div>
              <a href="#" className=" text-blue-600 text-xs font-semibold">
                Forgot your password?
              </a>
            </div>
            <div className=" flex justify-start align-middle items-center">
              <input type="checkbox" id="check" className=" me-2" />
              <label htmlFor="check">Remember Me</label>
            </div>

            <button
              disabled={isLoading}
              className=" text-white p-2 bg-blue-500 text-center rounded flex justify-center w-full"
            >
              {isLoading && (
                <img src={"/Infinity-1s-200px.svg"} className=" w-10 h-5" />
              )}{" "}
              Login
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

          <div className="flex flex-col gap-2 p-5">
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
          </div>
        </form>
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
      </div>
    </div>
  );
};

export default SignIn;
