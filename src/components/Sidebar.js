import React, { useState, useEffect } from "react";
import { AiOutlineWallet } from "react-icons/ai";
import { auth } from "./Firebase/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { useDashboardButton } from "./Stores/Store";
const Sidebar = () => {
  // const [activeButton, setActiveButton] = useState("Dashboard");
  const { activeButton, setActiveButton } = useDashboardButton();
  const history = useHistory();
  const handleButtonClick = (Name) => {
    setActiveButton(Name);
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Add a listener to check the authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If the user is not authenticated, redirect to the login page
        history.push("/");
      }
    });
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [history]);

  return (
    <div className="   ">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] ">
        <h1 className="text-text_darkgreen text-[20px] font-extrabold cursor-pointer">
          Expense Tracker
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-[30px]">
        <img
          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?cs=srgb&dl=pexels-linkedin-sales-navigator-2182970.jpg&fm=jpg"
          alt="Profile_image"
          className="rounded-full h-24 w-24 object-cover overflow-hidden"
        />
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center text-textblack">
        <p>Nicholas Delacruz</p>
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center  text-textblack">
        <p className="border  border-white w-36 h-9  text-center rounded-lg">
          <div className="flex flex-row justify-center gap-2 p-1">
            <AiOutlineWallet size={23} />
            5000
          </div>
        </p>
      </div>
      <div className="py-[15px]">
        <div className="w-full h-px bg-white"></div>
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center">
        <button
          className={`rounded-lg ${
            activeButton === "Dashboard"
              ? "bg-bg_green text-text_darkgreen"
              : "bg-side-color text-text_darkgreen"
          } px-4 py-1 flex items-center justify-center w-52`}
          onClick={() => handleButtonClick("Dashboard")}
        >
          Dashboard
        </button>
      </div>
      <div className="py-[30px] flex flex-col items-center justify-center">
        <button
          className={`rounded-lg ${
            activeButton === "Transaction"
              ? "bg-bg_green text-text_darkgreen"
              : "bg-side-color text-text_darkgreen"
          } px-4 py-1 flex items-center justify-center w-52`}
          onClick={() => handleButtonClick("Transaction")}
        >
          Transaction
        </button>
      </div>

      <div className="py-[20px] flex flex-col items-center justify-center">
        <button
          className={`rounded-lg border  border-white text-red-600 px-4 py-1 flex items-center justify-center w-52 hover:bg-red-600 hover:text-white`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
