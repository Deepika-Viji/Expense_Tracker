import React from "react";
import Sidebar from "../components/Sidebar";
import Add_transaction from "../components/Add_transaction";
import Search from "../components/Search";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Recent_transaction from "../components/Recent_transaction";
// import Filters from "../components/Filters";
import { MdDelete } from "react-icons/md";

// import Cards from "../components/Cards";
// import Dashboard_top from "../components/Dashboard_top";
// import Donutchart from "./../components/Donutchart";
// import Linechart from "./../components/Linechart";
// import Barchart from "../components/Barchart";
// import { BarChart } from "@mui/x-charts/BarChart";
// const Dashboard = () => {
//   return (
//     <div className=" flex">
//       <div className="basis-[30%] shadow-lg h-px">
//         <Sidebar />
//       </div>
//       <div className="basis-[88%] flex flex-col bg-Dbcolor">
//         <div className="mt-5 ml-5">
//           <div>
//             <Dashboard_top />
//           </div>
//           <div className="mt-5">
//             <Cards />
//           </div>
//           <div className="mr-5">
//             <Donutchart />
//           </div>
//           <div className="flex  gap-5">
//             <div className="basis-[50%]">
//               <Linechart />
//             </div>
//             <div className="basis-[50%] mr-5">
//               <Barchart />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

const Dashboard = () => {
  return (
    <div className="flex bg-bgblack">
      <div className="w-[15%] shadow-black h-px border-r border-y-white">
        <Sidebar />
      </div>
      <div className="basis-[70%] flex flex-col h-screen ">
        <div className="mt-5 ml-5 text-textwhite font-semibold">
          All Transactions
        </div>

        <div className="w-[1100px] ml-5">
          <div>
            <Recent_transaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
