import React from "react";
import Sidebar from "../components/Sidebar";
import Add_transaction from "../components/Add_transaction";
import Search from "../components/Search";
import Recent_transaction from "../components/Recent_transaction";
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
    <div className="flex bg-Dbcolor">
      <div className="basis-[30%] shadow-black h-px border-r border-y-white">
        <Sidebar />
      </div>
      <div className="basis-[70%] flex flex-col h-screen ">
        <div className="mt-5 ml-3">All transactions</div>
        <div className="flex flex-row gap-2 mt-2">
          <div className="w-[78%] ml-3 ">
            <Search />
          </div>
          <div>
            <button className="border bg-button-color rounded-md px-2  text-white py-1">
              <Add_transaction />
            </button>
          </div>
        </div>
        <div className="w-[96%] mt-3 ml-3 rounded-sm border-t border-l border-r border-t-grey-300 border-l-grey-300 border-r-grey-300 bg-white">
          <div className="flex flex-row gap-5 ml-[87%]  h-10 ">
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <Recent_transaction />
        </div>
      </div>
      <div className="basis-[20%]">filter</div>
    </div>
  );
};

export default Dashboard;
