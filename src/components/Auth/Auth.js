import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import Image from "./Login.jpeg";
import { useHistory } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { db } from "../Firebase/Firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";

const Auth = () => {
  const history = useHistory();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleForm = (e) => {
    setIsLoginForm((prev) => !prev);
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //inorder to prevent unwanted reload after clicking the buttons
    setError(null); //use state-> Setting the error initially as null. Because there may be some error which occures previously
    setLoading(true);
    try {
      if (isLoginForm) {
        await signInWithEmailAndPassword(auth, email, password);

        const userQuery = query(
          collection(db, "UserData"),
          where("email", "==", email)
        );

        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.size > 0) {
          const userDoc = userSnapshot.docs[0];

          // Update the LastLoginDate field
          await updateDoc(userDoc.ref, {
            LastLoginDate: serverTimestamp(),
          });
        }

        toast.success("Login Successfully");
        setTimeout(() => {
          history.push("/Dashboard");
        }, 3000);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);

        const UsersCollectionRef = collection(db, "UserData");
        const userId = auth.currentUser.uid;

        await setDoc(doc(UsersCollectionRef, userId), {
          name: name,
          email: email,
          LastLoginDate: serverTimestamp(),
        });

        toast.success("Signup Successfully");
        setTimeout(() => {
          history.push("/Dashboard");
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const handleForgotPassword = () => {
    if (email.trim() === "") {
      toast.error("Please enter your email.");
      console.log("Email is not present. Please enter your email.");
    } else {
      // Use Firebase function to send password reset email
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("OTP sended successfully!");
          console.log("Password reset email sent successfully.");
        })
        .catch((error) => {
          console.error("Error sending password reset email:", error.message);
        });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-bg_green ">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div
        className={`bg-white w-1/2 rounded-3xl shadow-2xl flex transform transition-transform duration-500 ${
          isLoginForm ? "" : "rotate-y-180"
        }`}
      >
        {/* Left Side - Login Details */}
        <div className="w-1/2 pr-8 p-8">
          <h2 className="text-2xl font-semibold mb-4">
            {isLoginForm ? "Login" : "Signup"}
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {isLoginForm ? (
                ""
              ) : (
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange} // dynamic changes are stored using onchange
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-200"
                    placeholder="Enter your Name"
                  />
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange} // dynamic changes are stored using onchange
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-200"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-200"
                placeholder="Enter your password"
              />
              {isLoginForm && (
                <p
                  onClick={handleForgotPassword}
                  className="text-red-500 text-xs font-bold absolute mt-2 cursor-pointer"
                >
                  Forgot Password?
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-bg_darkgreen mt-8 text-white rounded-md py-2 px-36 w-full hover:bg-bg_green hover:text-text_darkgreen focus:outline-none focus:ring focus:border-border_green"
            >
              {loading ? (
                <ThreeDots
                  color="#fff"
                  height={20}
                  width={50}
                  radius="9"
                  ariaLabel="three-dots-loading"
                />
              ) : isLoginForm ? (
                "Login"
              ) : (
                "Signup"
              )}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <p className="text-gray-600 text-sm font-semibold mt-4">
              {isLoginForm
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <span
                className="text-text_darkgreen underline cursor-pointer"
                onClick={toggleForm}
              >
                {isLoginForm ? "Signup" : "Login"}
              </span>
            </p>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 h-[250px] mt-14 mr-2">
          <img
            src={Image}
            alt="AuthImage"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
