import React, { useState } from "react";
import Account from "./Account";
import Password from "./Password";

const Rightsetting = ({ show, setshow }) => {
  return (
    <div className=" w-[100%]  rounded-md lg:w-[80%] md:w-[80%]   pb-[150px]">
      {!show ? <Account /> : <Password />}
    </div>
  );
};

export default Rightsetting;
