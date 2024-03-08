import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./Firebase/Firebase";
import { auth } from "./Firebase/Firebase";
import { useTransactionStore } from "./Stores/Store";

const DashboardTable = () => {
  const [data, setData] = useState([]);
  const { reload } = useTransactionStore();

  useEffect(() => {
    fetchData();
  }, [reload]);

  const fetchData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userQuery = query(
          collection(db, "UserData"),
          where("email", "==", user.email)
        );

        const querySnapshot = await getDocs(userQuery);

        const userDataPromises = querySnapshot.docs.map(async (doc) => {
          const transactionsCollection = collection(doc.ref, "Transactions");
          const transactionsSnapshot = await getDocs(transactionsCollection);
          const transactionsData = transactionsSnapshot.docs.map((transDoc) => {
            const transaction = transDoc.data();
            transaction.id = transDoc.id; // Add a unique identifier to each transaction
            return transaction;
          });

          return transactionsData;
        });

        // Wait for all the promises to resolve
        const allTransactionsData = await Promise.all(userDataPromises);

        // Flatten the array of arrays into a single array
        const flattenedData = allTransactionsData.flat();

        // Set the flattened data into state
        setData(flattenedData);
      } else {
        // Handle the case where the user is not authenticated
        console.error("User is not authenticated.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white mt-1 ">
        <thead>
          <tr>
            <th className="border-b border-gray-200 bg-gray-100 text-gray-600 font-semibold uppercase text-sm px-6 py-2">
              Date
            </th>
            <th className="border-b border-gray-200 bg-gray-100 text-gray-600 font-semibold uppercase text-sm px-6 py-2">
              Category
            </th>
            <th className="border-b border-gray-200 bg-gray-100 text-gray-600 font-semibold uppercase text-sm px-6 py-2">
              Payment Mode
            </th>
            <th className="border-b border-gray-200 bg-gray-100 text-gray-600 font-semibold uppercase text-sm px-6 py-2">
              Description
            </th>
            <th className="border-b border-gray-200 bg-gray-100 text-gray-600 font-semibold uppercase text-sm px-6 py-2">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                {item.selectedDate}
              </td>
              <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                {item.selectedCategory}
              </td>
              <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                {item.paymentMode}
              </td>
              <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                {item.description}
              </td>
              <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                {item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
