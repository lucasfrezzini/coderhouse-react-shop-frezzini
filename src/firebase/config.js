// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANIWLq2qdCCT3CL1pi34qp98EjUYVJghQ",
  authDomain: "valkyum-react-coderhouse.firebaseapp.com",
  projectId: "valkyum-react-coderhouse",
  storageBucket: "valkyum-react-coderhouse.appspot.com",
  messagingSenderId: "859050086084",
  appId: "1:859050086084:web:138e75b01e989d80d6c391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
