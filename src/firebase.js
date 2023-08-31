// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmYyP21j0My-HuwnO2ULZKZuH-26u4l_A",
  authDomain: "netflix-gpt-1e9d6.firebaseapp.com",
  projectId: "netflix-gpt-1e9d6",
  storageBucket: "netflix-gpt-1e9d6.appspot.com",
  messagingSenderId: "212414306305",
  appId: "1:212414306305:web:ec759f6f32edab02e58800",
  measurementId: "G-9CQ5XZFTTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
