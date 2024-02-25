import React from "react";
import Datefield from "./Date_field";
import TimeField from "./Timepicker";
import { Profile_Data } from "../assets/data/data";
const Income = () => {
  return (
    <div className="border-4 border-slate-950 h-52 w-64">
      <div className="flex flex-col gap-7 ">
        <div className="font-sans font-serif text-lg">New Transaction</div>
        <div className="flex flex-row gap-5 ">
          <div className="flex flex-row gap-3">
            <input type="Radio" />
            <label>Income</label>
          </div>
          <div className="flex flex-row gap-3">
            <input type="Radio" />
            <label>Expense</label>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <label>Choose a Date</label>
            <Datefield />
          </div>
          <div className="flex flex-col">
            <label>Choose a Time</label>
            <TimeField clearIcon />
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="flex flex-col">
            <label>Select a Category</label>
            <select className="appearance-none focus:outline-none cursor-pointer">
              <option>Food</option>
              <option>Travel</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>Enter a Amount</label>
            <input
              type="text"
              className="border-b border-gray-400  focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <input
            type="text"
            className="border-b border-gray-400  focus:outline-none"
          />
        </div>
        <div>
          <p>Payment Mode</p>
          <div>
            <input type="Radio" value={"Cash"} />
            <label>Cash</label>
          </div>
          <div>
            <input type="Radio" value={"Cash"} />
            <label>Debit Card</label>
          </div>
          <div>
            <input type="Radio" value={"Cash"} />
            <label>Credit Card</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
