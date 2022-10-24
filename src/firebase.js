// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_5UFhCjoIEIeN5Aqp02U8yUP9KLRY52o",
  authDomain: "note-redux-app.firebaseapp.com",
  projectId: "note-redux-app",
  storageBucket: "note-redux-app.appspot.com",
  messagingSenderId: "111438741010",
  appId: "1:111438741010:web:ab7bdd23f4c81f92cba2cb",
  measurementId: "G-CXQCX3NW6P"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();

export const auth = getAuth();