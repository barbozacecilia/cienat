import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaJNhumEh2xWkMZEly9yXA9RARdwGw94o",
  authDomain: "cienat-24.firebaseapp.com",
  projectId: "cienat-24",
  storageBucket: "cienat-24.appspot.com",
  messagingSenderId: "421345654417",
  appId: "1:421345654417:web:a7fc20b8ffdfe6875c7130"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



