import React, { useEffect, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./Firebase/Firebase";
import { auth } from "./Firebase/Firebase";
import { useTransactionStore } from "./Stores/Store";


const Cards = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const { reload } = useTransactionStore();

  const fetchIncome = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDataRef = collection(db, "UserData", userId, "Transactions");

        const q = query(userDataRef, where("transactionType", "==", "Income"));
        const querySnapshot = await getDocs(q);

        let totalIncome = 0;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Assumi0ng 'amount' is the field representing income amount
          const amount = parseFloat(data.amount); // Convert amount to a number
          totalIncome += amount;
        });

        console.log("Total Income:", totalIncome);
        setTotalIncome(totalIncome);
      }
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  const fetchExpense = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDataRef = collection(db, "UserData", userId, "Transactions");

        const q = query(userDataRef, where("transactionType", "==", "Expense"));
        const querySnapshot = await getDocs(q);

        let totalExpense = 0;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Assuming 'amount' is the field representing income amount
          const amount = parseFloat(data.amount); // Convert amount to a number
          totalExpense += amount;
        });

        console.log("Total Income:", totalExpense);
        setTotalExpense(totalExpense);
      }
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  const fetchBalance = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDataRef = collection(db, "UserData", userId, "Transactions");

        // Fetch expenses
        const expenseQuery = query(
          userDataRef,
          where("transactionType", "==", "Expense")
        );
        const expenseSnapshot = await getDocs(expenseQuery);

        let totalExpense = 0;

        expenseSnapshot.forEach((doc) => {
          const data = doc.data();
          const expenseAmount = parseFloat(data.amount);
          totalExpense += expenseAmount;
        });

        // Fetch incomes
        const incomeQuery = query(
          userDataRef,
          where("transactionType", "==", "Income")
        );
        const incomeSnapshot = await getDocs(incomeQuery);

        let totalIncome = 0;

        incomeSnapshot.forEach((doc) => {
          const data = doc.data();
          const incomeAmount = parseFloat(data.amount);
          totalIncome += incomeAmount;
        });

        // Calculate balance
        const balance = totalIncome - totalExpense;

        console.log("Total Income:", totalIncome);
        console.log("Total Expense:", totalExpense);
        console.log("Balance:", balance);

        setTotalBalance(balance);
      }
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  const fetchTransaction = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userDataRef = collection(db, "UserData", userId, "Transactions");

        const q = query(userDataRef);
        const querySnapshot = await getDocs(q);

        const numOfTransactions = querySnapshot.size;
        setTotalTransaction(numOfTransactions);

        console.log("Number of transactions:", numOfTransactions);
      }
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchIncome();
    fetchTransaction();
    fetchExpense();
    fetchBalance();
  }, [reload]);

  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-7">
      <div className="bg-bg_green text-text_darkgreen text-center rounded-lg shadow-md shadow-green-950 p-5 w-80 h-24">
        <h2 className="text-xl font-semibold ">{totalIncome}</h2>
        <p>Income</p>
      </div>
      <div className="bg-bg_green text-text_darkgreen text-center rounded-lg shadow-md shadow-green-950 w-80 h-24 p-5">
        <h2 className="text-xl font-semibold ">{totalExpense}</h2>
        <p>Expenses</p>
      </div>
      <div className="bg-bg_green text-text_darkgreen text-center rounded-lg shadow-md shadow-green-950  w-80 h-24 p-5">
        <h2 className="text-xl font-semibold">{totalBalance}</h2>
        <p>Balance</p>
      </div>
      <div className="bg-bg_green text-text_darkgreen text-center rounded-lg shadow-md shadow-green-950 w-80 h-24 p-5 mr-0">
        <h2 className="text-xl font-semibold">{totalTransaction}</h2>
        <p>Transaction</p>
      </div>
    </div>
  );
};

export default Cards;
