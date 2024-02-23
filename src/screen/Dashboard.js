import React from "react";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import Dashboard_top from "../components/Dashboard_top";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="basis-[30%] shadow-lg">
        <Sidebar />
      </div>
      <div>
        <Dashboard_top />
      </div>
      <div className="basis-[88%]">
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
