import React from "react";
import Sidebar from "../components/Sidebar";
import Add_transaction from "../components/Add_transaction";
import Search from "../components/Search";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Recent_transaction from "../components/Recent_transaction";
// import Filters from "../components/Filters";
import { MdDelete } from "react-icons/md";

import Cards from "../components/Cards";
import Dashboard_top from "../components/Dashboard_top";
import Donutchart from "./../components/Donutchart";
import Linechart from "./../components/Linechart";
import Barchart from "../components/Barchart";
import { BarChart } from "@mui/x-charts/BarChart";
const Dashboard = () => {
  return (
    <div className=" flex">
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
            <div className=" hover:shadow-lg w-[49%] hover:shadow-green-950 rounded-lg">
              <Linechart />
            </div>
            <div className=" hover:shadow-lg w-[49%] hover:shadow-green-950 rounded-lg">
              <Barchart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

//Transaction
// const Dashboard = () => {
//   return (
//     <div className="flex ">
//       <div className="w-[18%] h-100vh shadow-md shadow-green-950">
//         <Sidebar />
//       </div>
//       <div className="basis-[70%] flex flex-col h-screen mr-5 ">
//         <div className="mt-5 ml-7 text-text_darkgreen font-semibold">
//           All Transactions
//         </div>

//         <div className="w-[110%] ml-7 mt-5">
//           <div>
//             <Recent_transaction />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
