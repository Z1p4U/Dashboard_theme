import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Progress } from "@mantine/core";
const Listitem = () => {
  const ITEMS = [
    {
      title: "Landing page",
      finish: true,
      text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum",
      img: [
        "	https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar.jpg",
      ],
      progress: 100,
      id: 1,
    },
    {
      title: "Company poster",
      finish: false,
      text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum",
      img: [
        "	https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar.jpg",
      ],
      progress: 75,
      id: 2,
    },
    {
      title: "Product page design",
      finish: true,
      text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum",
      img: [
        "	https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar.jpg",
      ],
      progress: 100,
      id: 3,
    },
    {
      title: "Upgrade CRM software",
      finish: false,
      text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum",
      img: [
        "	https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar.jpg",
      ],
      progress: 50,
      id: 4,
    },
    {
      title: "Fix form validation",
      mainimg: "https://appstack.bootlab.io/img/photos/unsplash-1.jpg",
      finish: false,
      text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum",
      img: [
        "	https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar.jpg",
      ],
      progress: 65,
      id: 1,
    },
    {
      title: "New company logo",
      mainimg: "https://appstack.bootlab.io/img/photos/unsplash-2.jpg",
      finish: "hold",
      text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum",
      img: [
        "	https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar.jpg",
      ],
      progress: 25,
      id: 6,
    },
    {
      title: "Upgrade for latest map API",
      mainimg: "https://appstack.bootlab.io/img/photos/unsplash-3.jpg",
      finish: true,
      text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum",
      img: [
        "	https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar.jpg",
      ],
      progress: 100,
      id: 7,
    },
    {
      title: "Refactors backend template",
      mainimg: "https://appstack.bootlab.io/img/photos/unsplash-1.jpg",
      finish: "hold",
      text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum",
      img: [
        "	https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
        "	https://appstack.bootlab.io/img/avatars/avatar.jpg",
      ],
      progress: 0,
      id: 8,
    },
  ];
  return (
    <div className=" w-[100%]">
      <p className=" text-2xl text-gray-600 font-semibold lg:ml-[100px] md:ml-[100px] ml-[10px] mt-[40px]">
        Projects
      </p>
      <div className="w-[100%] flex lg:flex-row md:flex-row flex-col flex-wrap justify-center gap-3 mt-[40px]">
        {ITEMS?.map((item) => (
          <div className="lg:w-[20%]   h-[fit-content] flex flex-col justify-between bg-white shadow-lg ">
            {item?.mainimg && <img src={item?.mainimg} className=" w-full" />}
            <div className="flex flex-col justify-between  p-5">
              <div className=" flex w-[100%] justify-between">
                <div className=" flex flex-col gap-2">
                  <p className=" text-[15px] text-gray-600 font-semibold">
                    {item?.title}
                  </p>

                  {item?.finish === true && (
                    <p className=" text-[12px] text-white rounded-md shadow-sm flex justify-center bg-green-500 w-[60%]  h-[fit-content]">
                      Finished
                    </p>
                  )}
                  {item?.finish === false && (
                    <p className=" text-[12px] text-white rounded-md shadow-sm flex justify-center bg-yellow-500 w-[60%]  h-[fit-content]">
                      In progress
                    </p>
                  )}
                  {item?.finish === "hold" && (
                    <p className=" text-[12px] text-white rounded-md shadow-sm flex justify-center bg-red-500 w-[60%]  h-[fit-content]">
                      On hold
                    </p>
                  )}
                </div>

                <button>
                  <BiDotsHorizontalRounded />
                </button>
              </div>

              <div className=" flex flex-col mt-[30px] gap-2 w-[100%]">
                <p className=" text-gray-500 text-[14px]">{item?.text}</p>
                <div className="flex gap-2 w-[100%]">
                  {item?.img?.map((imgs) => (
                    <img
                      src={imgs}
                      alt=""
                      className=" lg:w-[15%]  md:w-[5%] h-[fit-content] w-[10%] rounded-full"
                    />
                  ))}
                </div>
              </div>

              <div className="progress flex flex-col gap-2 mt-[25px]">
                <div className="flex justify-between items-center">
                  <p className=" text-[14px] text-gray-500 font-semibold">
                    Progress
                  </p>
                  <p className="text-[14px] text-gray-500">{item?.progress}%</p>
                </div>
                <Progress value={item?.progress} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listitem;
