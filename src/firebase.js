
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAce8J1H6bZbI3mA-nvnysvKp74ZO9Q9_Y",
  authDomain: "movies2-f1eea.firebaseapp.com",
  projectId: "movies2-f1eea",
  storageBucket: "movies2-f1eea.appspot.com",
  messagingSenderId: "428943743943",
  appId: "1:428943743943:web:f147f39ec37c0cbf5717e2",
  measurementId: "G-9R82DZ9KSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();