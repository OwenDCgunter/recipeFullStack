// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7sC2pHWR12cGP2FY0jfwxoZsjl8XuAF8",
  authDomain: "recipefinder-5fdfd.firebaseapp.com",
  projectId: "recipefinder-5fdfd",
  storageBucket: "recipefinder-5fdfd.appspot.com",
  messagingSenderId: "607865192756",
  appId: "1:607865192756:web:3402ffdfa4b09dc5c2a561",
  measurementId: "G-12W85R5BTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
export default app;
//const analytics = getAnalytics(app);