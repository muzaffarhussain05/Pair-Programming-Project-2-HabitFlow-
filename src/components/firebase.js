// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// File: src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Add this import
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDau_uLAJit09ub2R6uZYDM2Aa-TRgOYLg",
  authDomain: "habitflow-pair-programming.firebaseapp.com",
  projectId: "habitflow-pair-programming",
  storageBucket: "habitflow-pair-programming.firebasestorage.app",
  messagingSenderId: "40400409725",
  appId: "1:40400409725:web:4248162d60c335dd14cd14"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
// Initialize Firebase
