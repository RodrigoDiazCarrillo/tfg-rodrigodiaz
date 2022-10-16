
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8R8CerFQpLQYCSYGS-jgPLb2nF4ytT6U",
  authDomain: "tfg-backend-d0f85.firebaseapp.com",
  projectId: "tfg-backend-d0f85",
  storageBucket: "tfg-backend-d0f85.appspot.com",
  messagingSenderId: "625838709953",
  appId: "1:625838709953:web:399c72606f832d04a48840",
  measurementId: "G-LJLWCLXPJB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
