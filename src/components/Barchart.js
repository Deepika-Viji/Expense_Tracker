import React, { useEffect, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./Firebase/Firebase";
import { auth } from "./Firebase/Firebase";
import { useTransactionStore } from "./Stores/Store";
import { BarChart } from "@mui/x-charts/BarChart";
import { blueberryTwilightPalette } from "@mui/x-charts";

export default function Barchart() {
  const [expenseData, setExpenseData] = useState([]);
  const { reload } = useTransactionStore();

  const fetchData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDataRef = collection(db, "UserData", userId, "Transactions");

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
        const currentYear = currentDate.getFullYear();

        // Get income data for the current month
        const incomeQuery = query(
          userDataRef,
          where("transactionType", "==", "Income"),
          where("month", "==", currentMonth),
          where("year", "==", currentYear)
        );
        const incomeSnapshot = await getDocs(incomeQuery);
        const currentMonthIncome = incomeSnapshot.docs.reduce(
          (total, doc) => total + parseFloat(doc.data().amount),
          0
        );

        const expenseQuery = query(
          userDataRef,
          where("transactionType", "==", "Expense"),
          where("month", "==", currentMonth),
          where("year", "==", currentYear)
        );
        const expenseSnapshot = await getDocs(expenseQuery);
        const currentMonthExpense = expenseSnapshot.docs.reduce(
          (total, doc) => total + parseFloat(doc.data().amount),
          0
        );

        const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const previousYear =
          currentMonth === 1
            ? currentDate.getFullYear() - 1
            : currentDate.getFullYear();

        const previousMonthIncomeQuery = query(
          userDataRef,
          where("transactionType", "==", "Income"),
          where("month", "==", previousMonth),
          where("year", "==", previousYear)
        );
        const previousMonthIncomeSnapshot = await getDocs(
          previousMonthIncomeQuery
        );
        const previousMonthIncome = previousMonthIncomeSnapshot.docs.reduce(
          (total, doc) => total + parseFloat(doc.data().amount),
          0
        );

        // Get expense data for the previous month
        const previousMonthExpenseQuery = query(
          userDataRef,
          where("transactionType", "==", "Expense"),
          where("month", "==", previousMonth),
          where("year", "==", previousYear)
        );
        const previousMonthExpenseSnapshot = await getDocs(
          previousMonthExpenseQuery
        );
        const previousMonthExpense = previousMonthExpenseSnapshot.docs.reduce(
          (total, doc) => total + parseFloat(doc.data().amount),
          0
        );

        setExpenseData([
          {
            label: "Current Month Income",
            value: currentMonthIncome,
          },
          {
            label: "Current Month Expense",
            value: currentMonthExpense,
          },
          {
            label: "Previous Month Income",
            value: previousMonthIncome,
          },
          {
            label: "Previous Month Expense",
            value: previousMonthExpense,
          },
        ]);
      }
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  // useEffect to log data when expenseData changes
  useEffect(() => {
    console.log(expenseData);
  }, [expenseData]);

  return (
    <div className="flex flex-col mt-10 bg-side-color rounded-lg shadow-lg h-96">
      <div className="mt-5 ml-5">Income - Expense</div>
      <BarChart
        colors={blueberryTwilightPalette}
        xAxis={[
          {
            scaleType: "band",
            data: ["Current Month ", "Previous Month"],

            tickLabelStyle: {
              fontSize: 12,
              textAlign: "center",
            },
          },
        ]}
        series={[
          {
            data: [
              expenseData[0]?.value || 0,
              expenseData[1]?.value || 0,
              expenseData[2]?.value || 0,
              expenseData[3]?.value || 0,
            ],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
