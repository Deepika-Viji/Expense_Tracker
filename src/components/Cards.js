import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center  items-center gap-4">
      <div className="bg-blue-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">43,300</h2>
        <p>Income</p>
      </div>
      <div className="bg-green-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">38,060</h2>
        <p>Expenses</p>
      </div>
      <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">5,240</h2>
        <p>Balance</p>
      </div>
      <div className="bg-pink-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">1,284</h2>
        <p>Transaction</p>
      </div>
    </div>
  );
};

export default Cards;
