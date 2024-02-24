import React from "react";
import Datefield from "./Date_field";
import TimeField from "./Timepicker";
import { Profile_Data } from "../assets/data/data";
const Income = () => {
  return (
    <div>
      <div className="font-sans font-serif text-lg">New Transaction</div>
      <div>
        <input type="Radio" value={"Income"} />
        <label>Income</label>
        <input type="Radio" value={"Expense"} />
        <label>Expense</label>
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
        <input type="Radio" value={"Cash"} />
        <label>Cash</label>
        <input type="Radio" value={"Debit Card"} />
        <label>Debit Card</label>
        <input type="Radio" value={"Credit Card"} />
        <label>Credit Card</label>
      </div>
    </div>
  );
};

export default Income;
