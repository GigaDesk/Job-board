// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJsIv_l5bIVTgn0tLD2pmE9UVp-ctV18o",
  authDomain: "job-board-8e890.firebaseapp.com",
  projectId: "job-board-8e890",
  storageBucket: "job-board-8e890.firebasestorage.app",
  messagingSenderId: "116826294687",
  appId: "1:116826294687:web:0cb78a69151d9722d455aa",
  measurementId: "G-HSTEVVCR9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);