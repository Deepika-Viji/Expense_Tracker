import React from "react";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import Dashboard_top from "../components/Dashboard_top";

const Dashboard = () => {
  return (
    <div className=" flex">
      <div className="basis-[30%] shadow-lg">
        <Sidebar />
      </div>
      <div className="basis-[88%] flex flex-col bg-Dbcolor">
        <div className="mt-5 ml-5">
          <div>
            <Dashboard_top />
          </div>
          <div className="mt-5">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
