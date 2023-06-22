import React, { useState } from "react";
import "./App.css";
import Path from "./router/Path";
import { SideBar } from "./components/SideBar";
import { Navbar } from "./components/Header";
import "animate.css";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const sideAni = useSelector((state) => state.side.side);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className={`${
          sideAni ? "flex flex-row justify-start items-start" : ""
        } h-screen overflow-x-hidden overflow-y-scroll`}
      >
        <SideBar />

        <div className=" w-full ">
          <Navbar />
          <Path className={" min-h-screen"} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
