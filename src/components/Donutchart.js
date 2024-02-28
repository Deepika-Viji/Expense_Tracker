import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDateStore } from "./Stores/Store";
import { infodata } from "../assets/data/data";
export default function Donutchart() {
  const { selectedDate } = useDateStore();

  return (
    <div className="flex flex-col mt-10 bg-side-color rounded-lg shadow-lg h-96">
      <div className="mt-5 ml-5 text-text_darkgreen">Total Expense</div>
      <div className="ml-5 text-text_darkgreen">
        Date : {selectedDate.toDateString()}
      </div>

      <PieChart
        colors={[
          "#FFD700",
          "#008000",
          "#FFC300",
          "#006400",
          "#556B2F",
          "#32CD32",
          "#FFA500",
          "#7FFF00",
          "#DAA520",
          "#2E8B57",
        ]}
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
            innerRadius: 85,
            outerRadius: 150,
            paddingAngle: -11,
            cornerRadius: 0,
            startAngle: -181,
            endAngle: 180,

            cx: 350,
            cy: 150,

            highlightScope: { faded: "global", highlighted: "item" },
            faded: {
              innerRadius: 30,
              additionalRadius: -30,
              color: "#DBF698",
            },
          },
        ]}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "middle", horizontal: "right" },
            padding: {
              right: 250,
            },
          },
        }}
      />
    </div>
  );
}

// import * as React from "react";
// import { PieChart } from "@mui/x-charts/PieChart";
// import { useDateStore } from "./Stores/Store";
// import { infodata } from "../assets/data/data"; // Assuming this is your Firebase data fetching function

// export default function Donutchart() {
//   const { selectedDate } = useDateStore();
//   const [expenseData, setExpenseData] = React.useState([]);

//   // Fetch data from Firebase when component mounts
//   React.useEffect(() => {
//     // Assuming infodata is your function to fetch data from Firebase
//     // Modify this according to your actual Firebase data fetching logic
//     const fetchData = async () => {
//       const data = await infodata(selectedDate.toDateString());
//       // Process the data to extract categories and corresponding expenses
//       const categories = {};
//       data.forEach((transaction) => {
//         if (transaction.transactionType === "Expense") {
//           const category = transaction.selectedCategory;
//           const amount = parseFloat(transaction.amount);
//           if (category && !isNaN(amount)) {
//             categories[category] = (categories[category] || 0) + amount;
//           }
//         }
//       });
//       // Convert categories object to array of objects with id, value, and label properties
//       const pieChartData = Object.keys(categories).map((category, index) => ({
//         id: index,
//         value: categories[category],
//         label: category,
//       }));
//       setExpenseData(pieChartData);
//     };

//     fetchData();
//   }, [selectedDate]);

//   return (
//     <div className="flex flex-col mt-10 bg-side-color rounded-lg shadow-lg h-96">
//       <div className="mt-5 ml-5 text-text_darkgreen">Total Expense</div>
//       <div className="ml-5 text-text_darkgreen">
//         Date : {selectedDate.toDateString()}
//       </div>

//       <PieChart
//         series={[
//           {
//             data: expenseData,
//             innerRadius: 85,
//             outerRadius: 150,
//             paddingAngle: -11,
//             cornerRadius: 0,
//             startAngle: -181,
//             endAngle: 180,
//             cx: 350,
//             cy: 150,
//             highlightScope: { faded: "global", highlighted: "item" },
//             faded: {
//               innerRadius: 30,
//               additionalRadius: -30,
//               color: "#DBF698",
//             },
//           },
//         ]}
//         slotProps={{
//           legend: {
//             direction: "column",
//             position: { vertical: "middle", horizontal: "right" },
//             padding: {
//               right: 250,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// }
