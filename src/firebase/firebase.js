// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtNVuOmjDKJLwd5yQlVCsBCSPjfGGBEBQ",
  authDomain: "produkto-7caef.firebaseapp.com",
  projectId: "produkto-7caef",
  storageBucket: "produkto-7caef.appspot.com",  // Corrected this line
  messagingSenderId: "519867163168",
  appId: "1:519867163168:web:a2cfe7c01904c3c3959245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc };
