import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-7">
      <div className="bg-bg_green text-text_darkgreen text-center rounded-lg shadow-md shadow-green-950 p-5 w-80 h-24">
        <h2 className="text-xl font-semibold ">43,300</h2>
        <p>Income</p>
      </div>
      <div className="bg-bg_green text-text_darkgreen text-center rounded-lg shadow-md shadow-green-950 w-80 h-24 p-5">
        <h2 className="text-xl font-semibold ">38,060</h2>
        <p>Expenses</p>
      </div>
      <div className="bg-bg_green text-text_darkgreen text-center rounded-lg shadow-md shadow-green-950  w-80 h-24 p-5">
        <h2 className="text-xl font-semibold">5,240</h2>
        <p>Balance</p>
      </div>
      <div className="bg-bg_green text-text_darkgreen text-center rounded-lg shadow-md shadow-green-950 w-80 h-24 p-5 mr-0">
        <h2 className="text-xl font-semibold">1,284</h2>
        <p>Transaction</p>
      </div>
    </div>
  );
};

export default Cards;
