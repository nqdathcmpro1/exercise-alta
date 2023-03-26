// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbvozff2c9glfmEq02smpoizcJ2Myrqow",
  authDomain: "exercise-alta.firebaseapp.com",
  projectId: "exercise-alta",
  storageBucket: "exercise-alta.appspot.com",
  messagingSenderId: "214272828785",
  appId: "1:214272828785:web:94090a499e12b78c2142d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)

