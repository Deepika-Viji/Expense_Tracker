import React from "react";

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
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="Profile image"
          className="rounded-full h-24 w-24 overflow-hidden"
        />
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center">
        <p>Nicholas Delacruz</p>
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center bg-5000-bg ">
        <p className="border border-gray-400  p-2 pb-0 text-center rounded-lg">
          5000
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
