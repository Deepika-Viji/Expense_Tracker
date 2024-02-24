import React from "react";
import Dashboard from "./../screen/Dashboard";
import Calender from "./Dashboard_calender";

const Dashboard_top = () => {
  return (
    <div className="flex flex-row justify-between mr-5">
      <div className="pt-2">Dashboard</div>
      <div>
        <Calender />
      </div>
    </div>
  );
};

export default Dashboard_top;
