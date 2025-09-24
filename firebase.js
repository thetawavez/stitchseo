
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt2eThmc6sa1oPnMOtcq_Ju9m9gZIyck8",
  authDomain: "seoboost-f1568.firebaseapp.com",
  projectId: "seoboost-f1568",
  storageBucket: "seoboost-f1568.firebasestorage.app",
  messagingSenderId: "219982687675",
  appId: "1:219982687675:web:81dd6045a0674178a6e89e",
  measurementId: "G-SBFW0XC529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
