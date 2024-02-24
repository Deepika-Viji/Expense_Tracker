import React from "react";
import { AiOutlineWallet } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="bg-#FFFFFF h-screen">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] bg-tracker-color">
        <h1 className="text-Company-text text-[20px] font-extrabold cursor-pointer">
          Expense Tracker
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-[30px]">
        <img
          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?cs=srgb&dl=pexels-linkedin-sales-navigator-2182970.jpg&fm=jpg"
          alt="Profile_image"
          className="rounded-full h-24 w-24 object-coveroverflow-hidden"
        />
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center">
        <p>Nicholas Delacruz</p>
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center  ">
        <p className="border  border-gray-400 w-36 h-9  text-center rounded-lg">
          <div className="flex flex-row justify-center gap-2 p-1">
            <AiOutlineWallet size={23} />
            5000
          </div>
        </p>
      </div>
      <div className="py-[15px]">
        <div className="w-full h-px bg-gray-300"></div>
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center">
        <button className="rounded-full bg-button-color text-white px-4 py-2 flex items-center justify-center w-60">
          Dashboard
        </button>
      </div>
      <div className="py-[30px] flex flex-col items-center justify-center">
        <button className="rounded-full bg-button-color text-white px-4 py-2 flex items-center justify-center w-60">
          Transaction
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
