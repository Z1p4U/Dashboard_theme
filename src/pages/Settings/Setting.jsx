import React, { useState } from "react";

import Rightsetting from "./Rightsetting";

import Leftsetting from "./Leftsetting";

const Setting = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="  flex gap-[30px] flex-col lg:flex-row md:flex-row  mt-[20px] pb-[30px]">
      <Leftsetting show={show} setshow={setshow} />

      <Rightsetting show={show} setshow={setshow} />
      {/* <Settingpath /> */}
    </div>
  );
};

export default Setting;
