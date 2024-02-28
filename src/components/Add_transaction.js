// import React, { useState } from "react";
// import Modal from "react-modal";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Switch from "react-switch";
// import { db } from "./Firebase/Firebase";
// import { auth } from "./Firebase/Firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   deleteDoc,
//   query,
//   where,
//   serverTimestamp,
// } from "firebase/firestore";

// import { IoFastFoodOutline } from "react-icons/io5";
// import { MdFlightTakeoff } from "react-icons/md";
// import { BsHouseDoor } from "react-icons/bs";
// import { IoHammerOutline } from "react-icons/io5";
// import { RiBillLine } from "react-icons/ri";
// import { RiShoppingBag2Line } from "react-icons/ri";
// import { MdHealthAndSafety } from "react-icons/md";
// import { FaUserDoctor } from "react-icons/fa6";
// import { GiClothes } from "react-icons/gi";
// import { BsThreeDots } from "react-icons/bs";
// import { BsCalendar } from "react-icons/bs";
// import { BsGrid1X2Fill } from "react-icons/bs";
// import { toast, Toaster } from "react-hot-toast";

// const iconMapping = {
//   "Mortgage / Rent": (
//     <BsHouseDoor
//       size={25}
//       style={{
//         backgroundColor: "#04CD93",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   Food: (
//     <IoFastFoodOutline
//       size={27}
//       style={{
//         backgroundColor: "#A8867D",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   Utilities: (
//     <IoHammerOutline
//       size={25}
//       style={{
//         backgroundColor: "#37474F",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   Bills: (
//     <RiBillLine
//       size={25}
//       style={{
//         backgroundColor: "#FF5E65",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   Shopping: (
//     <RiShoppingBag2Line
//       size={25}
//       style={{
//         backgroundColor: "#D84315",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   Transportation: (
//     <MdFlightTakeoff
//       size={25}
//       style={{
//         backgroundColor: "#C0CA33",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   Insurance: (
//     <MdHealthAndSafety
//       size={25}
//       style={{
//         backgroundColor: "#2E7D32",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   "Health care": (
//     <FaUserDoctor
//       size={25}
//       style={{
//         backgroundColor: "#6890FB",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   Clothing: (
//     <GiClothes
//       size={25}
//       style={{
//         backgroundColor: "#757575",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
//   Others: (
//     <BsThreeDots
//       size={25}
//       style={{
//         backgroundColor: "#E385F9",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "3px",
//       }}
//     />
//   ),
// };

// const AddTransaction = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [transactionType, setTransactionType] = useState("Income");
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [amount, setAmount] = useState("");
//   const [paymentMode, setPaymentMode] = useState("");
//   const [description, setDescription] = useState("");

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setTransactionType("");
//     setSelectedDate(new Date());
//     setSelectedCategory("");
//     setAmount("");
//     setPaymentMode("");
//     setDescription("");
//     setModalIsOpen(false);
//   };

//   const handleTransactionType = (type) => {
//     setTransactionType(type);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleAmountChange = (value) => {
//     setAmount(value);
//   };

//   const handlePaymentModeChange = (mode) => {
//     setPaymentMode(mode);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e);
//   };

//   const handleAddTransaction = async () => {
//     if (
//       !transactionType ||
//       !selectedDate ||
//       !selectedCategory ||
//       !amount ||
//       !paymentMode ||
//       !description
//     ) {
//       toast.error("Please fill in all the fields");
//       return;
//     }

//     try {
//       // Query user data based on the current user's email
//       const userQuery = query(
//         collection(db, "UserData"),
//         where("email", "==", auth.currentUser.email)
//       );
//       const userSnapshot = await getDocs(userQuery);

//       if (userSnapshot.size > 0) {
//         const userDoc = userSnapshot.docs[0];
//         const userId = userDoc.id;

//         // Add the transaction data to the user's document
//         await addDoc(collection(db, "UserData", userId, "Transactions"), {
//           transactionType,
//           selectedDate,
//           selectedCategory,
//           amount,
//           paymentMode,
//           description,
//         });

//         toast.success("Transaction added successfully");
//         closeModal();
//       } else {
//         toast.error("User data not found");
//       }
//     } catch (error) {
//       console.error("Error adding transaction:", error.message);
//       toast.error("Error adding transaction. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <button className="bg-bg_green w-32 rounded-md h-11" onClick={openModal}>
//         Add Transaction
//       </button>
//       <Toaster toastOptions={{ duration: 4000 }} />
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Add Transaction Modal"
//         style={{
//           overlay: {
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           },
//           content: {
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "40%",
//             height: "70%",
//             maxHeight: "80%",
//             overflowY: "auto",
//             border: "none",
//             padding: "20px",
//             backgroundColor: "white",
//           },
//         }}
//       >
//         <div>
//           <div className="flex justify-center items-center mb-5">
//             <Switch
//               onChange={() =>
//                 handleTransactionType(
//                   transactionType === "Income" ? "Expense" : "Income"
//                 )
//               }
//               uncheckedIcon={
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     alignContent: "center",
//                     height: "100%",
//                     fontSize: 15,
//                     fontWeight: "bolder",
//                     color: "#fff",
//                     marginRight: "500px",
//                   }}
//                 >
//                   Income
//                 </div>
//               }
//               checked={transactionType === "Expense"}
//               onColor="#FF5E65"
//               offColor="#171A13"
//               handleDiameter={30}
//               checkedIcon={
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     alignContent: "center",
//                     height: "100%",
//                     fontSize: 15,
//                     fontWeight: "bolder",
//                     color: "#fff",
//                     marginLeft: "70px",
//                   }}
//                 >
//                   Expense
//                 </div>
//               }
//               height={40}
//               width={150}
//             />
//           </div>

//           <div className="flex justify-evenly items-center mt-10 gap-7">
//             <div className="flex flex-col">
//               <label className="text-sm mb-1">Choose the Date</label>
//               <div className="flex justify-evenly items-center p-2 rounded-md border w-40">
//                 <BsCalendar size={20} className="mr-4" />
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={handleDateChange}
//                   dateFormat="dd/MM/yyyy"
//                   className="w-20 align-middle text-center border-none border-gray-400 mr-2"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm mb-1">Choose the Category</label>
//               <div className="flex justify-evenly items-center p-2 rounded-md border gap-2">
//                 {/* <BsGrid1X2Fill size={20} />/ */}
//                 {iconMapping[selectedCategory] || <BsGrid1X2Fill size={20} />}
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => handleCategoryChange(e.target.value)}
//                   className="border-none border-gray-400"
//                 >
//                   <option value="" disabled selected>
//                     Select Category
//                   </option>
//                   {Object.keys(iconMapping).map((category) => (
//                     <option
//                       key={category}
//                       value={category}
//                       className="border-none border-gray-400"
//                     >
//                       {iconMapping[category]} {category}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Add enter amount Details and Payment mode */}

//           <div className="flex justify-evenly items-center mt-10 gap-16">
//             <div className="flex flex-col">
//               <label className="text-sm mb-1">Enter Amount</label>
//               <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => handleAmountChange(e.target.value)}
//                 className="border p-2 rounded-md"
//                 placeholder="₹ Enter Amount"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm mb-1">Payment Mode</label>
//               <select
//                 value={paymentMode}
//                 onChange={(e) => handlePaymentModeChange(e.target.value)}
//                 className="border p-2 rounded-md"
//               >
//                 <option value="" disabled selected>
//                   Select Category
//                 </option>
//                 <option value="Credit Card">Credit Card</option>
//                 <option value="Debit Card">Debit Card</option>
//                 <option value="UPI">UPI</option>
//                 <option value="Cash">Cash</option>
//               </select>
//             </div>
//           </div>

//           {/* Provide a long description input box */}
//           <div className="flex flex-col mt-10 ml-10">
//             <label className="text-sm mb-1">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => handleDescriptionChange(e.target.value)}
//               // onChange={(e) => console.log(e.target.value)}
//               className=" border-b-2 border-gray-400 outline-none resize-none w-[500px] mt-2"
//               rows="1" // Set the number of rows
//               placeholder="Enter Description"
//             />
//           </div>

//           <div className="flex justify-end mt-10 ml-7">
//             <button
//               className=" text-text_darkgreen p-2 rounded-lg w-20 font-semibold hover:bg-bg_green hover:text-[#fff]"
//               onClick={handleAddTransaction}
//             >
//               Add
//             </button>
//             <button
//               className=" text-red-600 font-semibold p-2 w-20 rounded-lg hover:bg-red-600 hover:text-[#fff]"
//               onClick={closeModal}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default AddTransaction;

import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import { db } from "./Firebase/Firebase";
import { auth } from "./Firebase/Firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { useTransactionStore } from "./Stores/Store";

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
import { BsCalendar } from "react-icons/bs";
import { BsGrid1X2Fill } from "react-icons/bs";
import { toast, Toaster } from "react-hot-toast";

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
  ),
};

const AddTransaction = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("Income");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [description, setDescription] = useState("");
  const { setReload } = useTransactionStore();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setTransactionType("");
    setSelectedDate(new Date());
    setSelectedCategory("");
    setAmount("");
    setPaymentMode("");
    setDescription("");
    setModalIsOpen(false);
  };

  const handleTransactionType = (type) => {
    setTransactionType(type);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handlePaymentModeChange = (mode) => {
    setPaymentMode(mode);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e);
  };

  const handleAddTransaction = async () => {
    if (
      !transactionType ||
      !selectedDate ||
      !selectedCategory ||
      !amount ||
      !paymentMode ||
      !description
    ) {
      toast.error("Please fill in all the fields");
      return;
    }

    try {
      const dateOnly = selectedDate.toISOString().split("T")[0];

      // Query user data based on the current user's email
      const userQuery = query(
        collection(db, "UserData"),
        where("email", "==", auth.currentUser.email)
      );
      const userSnapshot = await getDocs(userQuery);

      if (userSnapshot.size > 0) {
        const userDoc = userSnapshot.docs[0];
        const userId = userDoc.id;

        // Add the transaction data to the user's document
        await addDoc(collection(db, "UserData", userId, "Transactions"), {
          transactionType,
          selectedDate: dateOnly,
          selectedCategory,
          amount,
          paymentMode,
          description,
        });

        toast.success("Transaction added successfully");
        setReload(true);
        closeModal();
      } else {
        toast.error("User data not found");
      }
    } catch (error) {
      console.error("Error adding transaction:", error.message);
      toast.error("Error adding transaction. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={openModal}>Add Transaction</button>
      <Toaster toastOptions={{ duration: 4000 }} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Transaction Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            height: "70%",
            maxHeight: "80%",
            overflowY: "auto",
            border: "none",
            padding: "20px",
            backgroundColor: "white",
          },
        }}
      >
        <div>
          <div className="flex justify-center items-center mb-5">
            <Switch
              onChange={() =>
                handleTransactionType(
                  transactionType === "Income" ? "Expense" : "Income"
                )
              }
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    height: "100%",
                    fontSize: 15,
                    fontWeight: "bolder",
                    color: "#fff",
                    marginRight: "500px",
                  }}
                >
                  Income
                </div>
              }
              checked={transactionType === "Expense"}
              onColor="#FF5E65"
              offColor="#64BD63"
              handleDiameter={30}
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    height: "100%",
                    fontSize: 15,
                    fontWeight: "bolder",
                    color: "#fff",
                    marginLeft: "70px",
                  }}
                >
                  Expense
                </div>
              }
              height={40}
              width={150}
            />
          </div>

          <div className="flex justify-evenly items-center mt-10 gap-7">
            <div className="flex flex-col">
              <label className="text-sm mb-1">Choose the Date</label>
              <div className="flex justify-evenly items-center p-2 rounded-md border w-40">
                <BsCalendar size={20} className="mr-4" />
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="w-20 align-middle text-center border-none border-gray-400 mr-2"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Choose the Category</label>
              <div className="flex justify-evenly items-center p-2 rounded-md border gap-2">
                {/* <BsGrid1X2Fill size={20} />/ */}
                {iconMapping[selectedCategory] || <BsGrid1X2Fill size={20} />}
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="border-none border-gray-400"
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  {Object.keys(iconMapping).map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="border-none border-gray-400"
                    >
                      {iconMapping[category]} {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Add enter amount Details and Payment mode */}

          <div className="flex justify-evenly items-center mt-10 gap-16">
            <div className="flex flex-col">
              <label className="text-sm mb-1">Enter Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="border p-2 rounded-md"
                placeholder="₹ Enter Amount"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Payment Mode</label>
              <select
                value={paymentMode}
                onChange={(e) => handlePaymentModeChange(e.target.value)}
                className="border p-2 rounded-md"
              >
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
          </div>

          {/* Provide a long description input box */}
          <div className="flex flex-col mt-10 ml-10">
            <label className="text-sm mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              // onChange={(e) => console.log(e.target.value)}
              className=" border-b-2 border-gray-400 outline-none resize-none w-[500px] mt-2"
              rows="1" // Set the number of rows
              placeholder="Enter Description"
            />
          </div>

          <div className="flex justify-end mt-10 ml-7">
            <button
              className="bg-add_button text-blue-700 p-2 rounded-lg w-20 font-semibold hover:bg-blue-600 hover:text-[#fff]"
              onClick={handleAddTransaction}
            >
              Add
            </button>
            <button
              className="bg-add_button text-red-600 font-semibold p-2 w-20 rounded-lg hover:bg-red-600 hover:text-[#fff]"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddTransaction;
