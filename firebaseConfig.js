// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXDkQ7MI5EUEy76k2wtgydhhbRcoaQcdM",
  authDomain: "joke-api-20334.firebaseapp.com",
  projectId: "joke-api-20334",
  storageBucket: "joke-api-20334.appspot.com",
  messagingSenderId: "530060092918",
  appId: "1:530060092918:web:492987d9245df143fbd3d7",
  measurementId: "G-Z2V4DZJ5LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app)