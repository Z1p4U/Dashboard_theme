import React from "react";

const Invoiceitem = () => {
  return (
    <div className=" pb-32">
      {" "}
      <p className=" text-2xl text-gray-600 font-semibold ml-12 mt-5">
        Invoice
      </p>{" "}
      <div className=" p-[20px] bg-white w-[93%] shadow-lg lg:ml-[50px] md:ml-[50px] ml-[15px] mt-[40px]">
        <div className=" w-[90%] mx-auto">
          <div className="">
            {" "}
            <div className="">
              <span className=" text-gray-400 font-semibold text-[13px]">
                Hello{" "}
                <span className=" text-gray-600 font-semibold">Chris Wood</span>
              </span>

              <p className="  text-gray-400 font-semibold text-[13px]">
                This is the receipt for a payment of $268.00 (USD) you made to
                AppStack.
              </p>
            </div>
            <div className="flex mt-[15px]">
              <div className=" lg:w-[45%] w-[100%] md:w-[45%]">
                <p className=" text-gray-400 font-semibold text-[13px] ">
                  Payment No.
                </p>
                <p className="text-gray-600 text-[13px]">741037024</p>
              </div>
              <div className=" lg:w-[45%] w-[100%] md:w-[45%]">
                <p className=" text-gray-400 font-semibold text-[13px] ">
                  Payment Date.
                </p>
                <p className="text-gray-600 text-[13px]">
                  June 2, 2022 - 03:45 pm
                </p>
              </div>
            </div>
          </div>
          <hr className=" mt-[25px]" />

          <div className=" flex mt-[30px]  lg:w-[45%] w-[100%] md:w-[45%] ">
            {/* client */}
            <div className="flex flex-col gap-1 font-semibold  lg:w-[45%] w-[100%] md:w-[45%]">
              {" "}
              <p className=" text-gray-400 text-[13px]">Client</p>
              <p className=" text-gray-600 text-[13px]">Chris Wood</p>
              <p className=" text-gray-400 text-[13px]">4183 forest avenue</p>
              <p className=" text-gray-400 text-[13px]">New York City</p>
              <p className=" text-gray-400 text-[13px]">10011</p>
              <p className=" text-gray-400 text-[13px]">USA</p>
              <p className=" text-blue-500 text-[13px]">chris.wood@gmail.com</p>
            </div>

            <div className="flex flex-col gap-1 font-semibold lg:w-[45%] w-[100%] md:w-[45%]">
              {" "}
              <p className=" text-gray-400 text-[13px]">Payment to</p>
              <p className=" text-gray-600 text-[13px]">AppStack.LLC</p>
              <p className=" text-gray-400 text-[13px]">354 Roy Alley</p>
              <p className=" text-gray-400 text-[13px]">Denver</p>
              <p className=" text-gray-400 text-[13px]">80202</p>
              <p className=" text-gray-400 text-[13px]">USA</p>
              <p className=" text-blue-500 text-[13px]">
                infoappstack@gmail.com
              </p>
            </div>
          </div>

          <table className=" table p-3 w-[100%] mt-[40px]">
            <thead>
              <tr className=" text-gray-500 text-[13px] text-start">
                <th className=" text-start p-1 border-b-2 border-gray-200">
                  Description
                </th>
                <th className=" text-start p-1 border-b-2 border-gray-200">
                  Quantity
                </th>
                <th className=" text-start p-1 border-b-2 border-gray-200">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" text-gray-500 text-[13px] text-start">
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  AppStack theme customization
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  2
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  $150.0
                </td>
              </tr>

              <tr className=" text-gray-500 text-[13px] text-start">
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  Monthly Subscription
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  3
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  $25.0
                </td>
              </tr>

              <tr className=" text-gray-500 text-[13px] text-start">
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  Additional Services
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  1
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  $100.0
                </td>
              </tr>

              <tr className=" text-gray-600 font-semibold text-[13px] text-start">
                <td className=" text-start p-1 border-b-2 border-gray-200"></td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  Subtotal
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  $275.00
                </td>
              </tr>

              <tr className=" text-gray-600 font-semibold text-[13px] text-start">
                <td className=" text-start p-1 border-b-2 border-gray-200"></td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  Shipping
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  $8.00
                </td>
              </tr>

              <tr className=" text-gray-600 font-semibold text-[13px] text-start">
                <td className=" text-start p-1 border-b-2 border-gray-200"></td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  Discount
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  5%
                </td>
              </tr>

              <tr className=" text-gray-600 font-semibold text-[13px] text-start">
                <td className=" text-start p-1 border-b-2 border-gray-200"></td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  Total
                </td>
                <td className=" text-start p-1 border-b-2 border-gray-200">
                  $268.85
                </td>
              </tr>
            </tbody>
          </table>

          <div className=" mx-auto text-center mt-[10px]">
            <span className=" text-[12px] text-gray-600 font-semibold text-center">
              Extra note:{" "}
              <span className=" text-gray-400">
                {" "}
                Please send all items at the same time to the shipping address.
                Thanks in advance.
              </span>
            </span>
          </div>

          <div className=" text-center mt-[10px]">
            <button className=" text-white font-semibold text-[12px] text-center bg-blue-500 p-2 rounded-sm shadow-md">
              Print the recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoiceitem;
