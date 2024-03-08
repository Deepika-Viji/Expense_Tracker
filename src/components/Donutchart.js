import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDateStore } from "./Stores/Store";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./Firebase/Firebase";
import { auth } from "./Firebase/Firebase";
import { useTransactionStore } from "./Stores/Store";

export default function Donutchart() {
  const { selectedDate } = useDateStore();
  const [expenseData, setExpenseData] = useState([]);
  const { reload } = useTransactionStore();

  const fetchData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDataRef = collection(db, "UserData", userId, "Transactions");

        const q = query(userDataRef, where("transactionType", "==", "Expense"));
        const querySnapshot = await getDocs(q);

        const expenseDataArray = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          expenseDataArray.push({
            id: doc.id,
            value: parseFloat(data.amount), // Convert amount to a number
            label: data.selectedCategory,
          });
        });

        setExpenseData(expenseDataArray);
      }
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  // const formattedDate = selectedDate.toLocaleDateString("en-GB");

  return (
    <div className="flex flex-col mt-10 bg-side-color rounded-lg shadow-lg h-96">
      <div className="mt-5 ml-5">Total Expense</div>
      {/* <div className="ml-5">{selectedDate.toLocaleDateString("en-GB")}</div> */}

      <PieChart
        series={[
          {
            // data: [
            //   { id: 0, value: 10, label: "series A" },
            //   { id: 1, value: 15, label: "series B" },
            //   { id: 2, value: 20, label: "series C" },
            // ],
            data: expenseData,

            innerRadius: 85,
            outerRadius: 150,
            paddingAngle: -11,
            cornerRadius: 0,
            startAngle: -181,
            endAngle: 180,

            cx: 350,
            cy: 150,

            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        slotProps={{
          legend: {
            labelStyle: {
              borderRadius: 5,
            },
            direction: "column",
            position: { vertical: "middle", horizontal: "right" },
            padding: {
              right: 200,
            },
          },
        }}
        // width={400}
        // height={200}
      />
    </div>
  );
}
