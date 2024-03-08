import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjFFU3auDYjkcqzThDLSG2Jt8LflKeMQc",
  authDomain: "expense-manager-tracker.firebaseapp.com",
  projectId: "expense-manager-tracker",
  storageBucket: "expense-manager-tracker.appspot.com",
  messagingSenderId: "1041042158836",
  appId: "1:1041042158836:web:3fb13cf465bed333779aa1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
