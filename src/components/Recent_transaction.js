// import React, { useState, useEffect } from "react";
// import { infodata } from "../assets/data/data";
// import AddTransaction from "./Add_transaction";
// const Recent_transaction = () => {
//   const [data, setData] = useState(infodata);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);

//   const handleCheckboxChange = (index) => {
//     const isSelected = selectedRows.includes(index);

//     if (isSelected) {
//       setSelectedRows((prev) => prev.filter((item) => item !== index));
//     } else {
//       setSelectedRows((prev) => [...prev, index]);
//     }
//   };

//   const handleSelectAllChange = () => {
//     if (selectAll) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows(Array.from({ length: data.length }, (_, i) => i));
//     }

//     setSelectAll((prev) => !prev);
//   };

//   const isDeleteDisabled = selectedRows.length === 0;

//   const handleDelete = () => {
//     const newData = data.filter((_, index) => !selectedRows.includes(index));
//     setData(newData);
//     setSelectedRows([]);
//   };

//   useEffect(() => {
//     setSelectedRows([]);
//     setSelectAll(false);
//   }, [data]);

//   return (
//     <div>
//       <div className="flex flex-row justify-between">
//         <div className="mt-3">
//           <AddTransaction />
//         </div>
//         <div className="flex flex-row  mr-5 h-10 mt-4 font-medium">
//           <button
//             onClick={handleDelete}
//             className={`${
//               isDeleteDisabled
//                 ? "text-red-600 cursor-not-allowed"
//                 : "text-white bg-red-600 cursor-pointer"
//             } px-4 py-2 rounded`}
//             disabled={isDeleteDisabled}
//           >
//             Delete
//           </button>
//         </div>
//       </div>

//       <table className="table-auto min-w-full rounded border border-black mt-3">
//         <thead className="border border-black">
//           <tr>
//             <th className="border-t bg-bg_green border-black text-left  px-4 py-2">
//               <input
//                 type="checkbox"
//                 checked={selectAll}
//                 onChange={handleSelectAllChange}
//               />
//             </th>
//             <th className="border-t bg-bg_green border-black text-left text-textblack px-4 py-2">
//               Category
//             </th>
//             <th className="border-t bg-bg_green border-black text-left text-textblack px-4 py-2">
//               Date
//             </th>
//             <th className="border-t bg-bg_green border-black text-left text-textblack px-4 py-2">
//               Payment Mode
//             </th>
//             <th className="border-t bg-bg_green px-4 py-2 border-black text-textblack text-left">
//               Description
//             </th>
//             <th className="border-t bg-bg_green px-4 py-2 border-black text-textblack text-left">
//               Amount
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td className="border-t border-black text-textblack px-4 py-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedRows.includes(index)}
//                   onChange={() => handleCheckboxChange(index)}
//                 />
//               </td>
//               <td className="border-t border-black px-4 text-textblack py-2">
//                 {item.category}
//               </td>
//               <td className="border-t border-black text-textblack px-4 py-2">
//                 {item.date}
//               </td>
//               <td className="border-t border-black text-textblack px-4 py-2">
//                 {item.paymentMode}
//               </td>
//               <td className="border-t border-black px-4 text-textblack py-2">
//                 {item.description}
//               </td>
//               <td className="border-t px-4 border-black text-textblack py-2">
//                 ₹ {item.amount}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Recent_transaction;

import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  where,
  query,
  doc,
} from "firebase/firestore";
import { db } from "./Firebase/Firebase";
import { auth } from "./Firebase/Firebase";

// import { infodata } from "../assets/data/data";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdFlightTakeoff } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import { IoHammerOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { RiShoppingBag2Line } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import AddTransaction from "./Add_transaction";
import { useTransactionStore } from "./Stores/Store";

const iconMapping = {
  "Mortgage / Rent": (
    <BsHouseDoor
      size={25}
      style={{
        backgroundColor: "#04CD93",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  Food: (
    <IoFastFoodOutline
      size={27}
      style={{
        backgroundColor: "#A8867D",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  Utilities: (
    <IoHammerOutline
      size={25}
      style={{
        backgroundColor: "#37474F",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  Bills: (
    <RiBillLine
      size={25}
      style={{
        backgroundColor: "#FF5E65",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  Shopping: (
    <RiShoppingBag2Line
      size={25}
      style={{
        backgroundColor: "#D84315",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  Transportation: (
    <MdFlightTakeoff
      size={25}
      style={{
        backgroundColor: "#C0CA33",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  Insurance: (
    <MdHealthAndSafety
      size={25}
      style={{
        backgroundColor: "#2E7D32",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  "Health care": (
    <FaUserDoctor
      size={25}
      style={{
        backgroundColor: "#6890FB",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  Clothing: (
    <GiClothes
      size={25}
      style={{
        backgroundColor: "#757575",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ),
  Others: (
    <BsThreeDots
      size={25}
      style={{
        backgroundColor: "#E385F9",
        color: "#fff",
        borderRadius: "50%",
        padding: "3px",
      }}
    />
  ), // You can add an icon or leave it as null for no icon
};

const RecentTransaction = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
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

          return {
            userData: doc.data(),
            transactions: transactionsData,
          };
        });

        // Wait for all the promises to resolve
        const userData = await Promise.all(userDataPromises);

        setData(userData);
      } else {
        // Handle the case where the user is not authenticated
        console.error("User is not authenticated.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allTransactionIds = data.flatMap((item) =>
        item.transactions.map((transaction) => transaction.id)
      );
      setSelectedRows(allTransactionIds);
    }

    setSelectAll((prev) => !prev);
  };

  const handleCheckboxChange = (id) => {
    const isSelected = selectedRows.includes(id);

    if (isSelected) {
      setSelectedRows((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedRows((prev) => [...prev, id]);
    }
  };

  const isDeleteDisabled = selectedRows.length === 0;

  const handleDelete = async () => {
    try {
      // Delete selected transactions from Firestore
      for (const selectedId of selectedRows) {
        const transactionIndex = selectedId;
        const transactionDocRef = doc(
          db,
          "UserData",
          auth.currentUser.uid,
          "Transactions",
          transactionIndex
        );
        await deleteDoc(transactionDocRef);
      }

      // Update the local state to reflect the changes
      const newData = data.map((item, userDataIndex) => ({
        ...item,
        transactions: item.transactions.filter(
          (_, transactionIndex) =>
            !selectedRows.includes(`${userDataIndex}-${transactionIndex}`)
        ),
      }));
      setData(newData);
      setSelectedRows([]);

      // Fetch data again to reload after deleting transactions
      fetchData();
    } catch (error) {
      console.error("Error deleting transactions:", error);
    }
  };

  useEffect(() => {
    setSelectedRows([]);
    setSelectAll(false);
  }, [data]);

  return (
    <div>
      <div className="flex flex-row justify-between mr-5 h-10 font-medium items-center">
        <div>
          <button className="border bg-bg_green rounded-md px-2  text-white py-1 justify-center ml-2 ">
            <AddTransaction />
          </button>
        </div>
        <button
          onClick={handleDelete}
          className={`${
            isDeleteDisabled
              ? "text-gray-300 cursor-not-allowed"
              : "text-red-600 cursor-pointer hover:bg-red-600 hover:text-white"
          } px-4 py-2 rounded `}
          disabled={isDeleteDisabled}
        >
          Delete
        </button>
      </div>
      <table className="table-auto min-w-full border-l border-r border-b border-l-gray-300 border-r-gray-300 border-b-gray-300">
        <thead>
          <tr>
            <th className="border-t bg-bg_table border-gray-300 text-left px-4 py-2">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
            </th>
            <th className="border-t bg-bg_table border-gray-300 text-left px-4 py-2">
              Category
            </th>
            <th className="border-t bg-bg_table border-gray-300 text-left px-4 py-2">
              Date
            </th>
            <th className="border-t bg-bg_table border-gray-300 text-left px-4 py-2">
              Payment Mode
            </th>
            <th className="border-t bg-bg_table px-4 py-2 text-left">
              Description
            </th>
            <th className="border-t bg-bg_table px-4 py-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.flatMap((item, index) =>
            item.transactions.map((transaction, i) => (
              <tr key={transaction.id}>
                <td className="border-t border-gray-300 px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(transaction.id)}
                    onChange={() => handleCheckboxChange(transaction.id)}
                  />
                </td>
                <td className="border-t border-gray-300 px-4 py-2 flex flex-row items-center gap-2">
                  {iconMapping[transaction.transactionType]}{" "}
                  {transaction.transactionType}
                </td>
                <td className="border-t border-gray-300 px-4 py-2">
                  {transaction.selectedDate}
                </td>
                <td className="border-t border-gray-300 px-4 py-2">
                  {transaction.paymentMode}
                </td>
                <td className="border-t px-4 py-2">
                  {transaction.description}
                </td>
                <td className="border-t px-4 py-2">₹ {transaction.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransaction;
