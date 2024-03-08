import React from "react";
import Sidebar from "../components/Sidebar";
import Recent_transaction from "../components/Recent_transaction";
import Cards from "../components/Cards";
import Dashboard_top from "../components/Dashboard_top";
import Donutchart from "./../components/Donutchart";
import { useDashboardButton } from "../components/Stores/Store";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
  const { activeButton } = useDashboardButton();
  return (
    <div>
      {activeButton === "Dashboard" ? (
        <DashboardClicked />
      ) : (
        <TransactionClicked />
      )}
    </div>
  );
};

export default Dashboard;
const DashboardClicked = () => {
  return (
    <div className="flex">
      <div className="w-[18%] h-100vh shadow-md shadow-green-950 ">
        <Sidebar />
      </div>
      <div className="w-[80%] flex flex-col ">
        <div className="mt-5 ml-5">
          <div>
            <Dashboard_top />
          </div>
          <div className="mt-5">
            <Cards />
          </div>
          <div className="mr-5 hover:shadow-lg hover:shadow-green-950 w-[1320px]">
            <Donutchart />
          </div>
          <div className="flex flex-row  gap-5 mt-3 mb-3">
            <div className=" hover:shadow-lg w-[100%] hover:shadow-green-950 rounded-lg">
              <DashboardTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Transaction
const TransactionClicked = () => {
  return (
    <div className="flex ">
      <div className="w-[18%] h-100vh shadow-md shadow-green-950">
        <Sidebar />
      </div>
      <div className="basis-[70%] flex flex-col h-screen mr-5 ">
        <div className="mt-5 ml-7 text-text_darkgreen font-semibold">
          All Transactions
        </div>

        <div className="w-[110%] ml-7 mt-5">
          <div>
            <Recent_transaction />
          </div>
        </div>
      </div>
    </div>
  );
};
