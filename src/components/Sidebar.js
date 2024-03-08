import React, { useState, useEffect } from "react";
import { AiOutlineWallet } from "react-icons/ai";
import { auth } from "./Firebase/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { useDashboardButton } from "./Stores/Store";
import { collection, getDocs, where, query } from "firebase/firestore";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./Firebase/Firebase";
import { IoCameraSharp } from "react-icons/io5";
const Sidebar = () => {
  const { activeButton, setActiveButton } = useDashboardButton();
  const history = useHistory();
  const [name, setName] = useState("");
  const [balance, setTotalBalance] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const handleButtonClick = (Name) => {
    setActiveButton(Name);
  };

  const fetchName = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;

        const userQuery = query(
          collection(db, "UserData"),
          where("email", "==", user.email)
        );

        const userDataRef = await getDocs(userQuery);

        userDataRef.forEach((doc) => {
          const data = doc.data();
          setName(data.name);
        });
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

        setTotalBalance(balance);
      }
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchName();
    fetchBalance();
  });

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

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;

      if (user) {
        // Fetch user document from Firestore
        const userDocRef = doc(db, "UserData", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          if (userData && userData.profileImage) {
            setProfileImage(userData.profileImage);
          }
        }
      }
    };

    // Add a listener to check the authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If the user is not authenticated, redirect to the login page
        history.push("/");
      } else {
        // Fetch the profile image when the component is mounted
        fetchData();
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [history]);

  const handleChangeProfileImage = async (e) => {
    const file = e.target.files[0];
    const user = auth.currentUser;

    if (user && file) {
      const storageRef = ref(storage, `profileImages/${user.uid}`); //profileimage->folder
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle upload progress if needed, status uploaded....(reloader-> status changed, status)
        },
        (error) => {
          console.error("Error uploading image:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const userDocRef = doc(db, "UserData", user.uid);
            await updateDoc(userDocRef, { profileImage: downloadURL });
            setProfileImage(downloadURL);
          });
        }
      );
    }
  };

  return (
    <div className="   ">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] ">
        <h1 className="text-text_darkgreen text-[20px] font-extrabold cursor-pointer">
          Expense Tracker
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center py-[30px]">
        <input
          id="profile-image-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleChangeProfileImage(e)}
        />

        <div className="relative inline-block">
          <img
            src={
              profileImage ||
              "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?cs=srgb&dl=pexels-linkedin-sales-navigator-2182970.jpg&fm=jpg"
            }
            alt="Profile_image"
            className="rounded-full h-32 w-32 object-cover overflow-hidden border-4 border-gray-950"
          />
          <div className="absolute bottom-0 right-0 p-2 rounded-full">
            <label htmlFor="profile-image-input" className="cursor-pointer">
              <IoCameraSharp
                style={{ color: "#171A13" }}
                className="bg-bg_green size-6 rounded-full"
              />
              <input
                id="profile-image-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleChangeProfileImage(e)}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="py-[5px] flex flex-col items-center justify-center text-textblack">
        <p>{name}</p>
      </div>
      <div className="py-[5px] flex flex-col items-center justify-center  text-textblack">
        <p className="border  border-white w-36 h-9  text-center rounded-lg">
          <div className="flex flex-row justify-center gap-2 p-1 rounded-full">
            <AiOutlineWallet size={23} />
            {balance}
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
