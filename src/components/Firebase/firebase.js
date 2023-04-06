// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyASHSFqdFjj81901kMSbrZAH3hbEkimtjw",
  authDomain: "react-pfinal-fa2d8.firebaseapp.com",
  projectId: "react-pfinal-fa2d8",
  storageBucket: "react-pfinal-fa2d8.appspot.com",
  messagingSenderId: "262208291474",
  appId: "1:262208291474:web:ba3fd0840ba17ca9bfdc4b",
  measurementId: "G-BJTMFYBCED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)