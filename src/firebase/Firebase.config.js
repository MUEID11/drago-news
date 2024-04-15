// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACHMWiXa_8Sfop4gTnzMaEyoojCDgdEro",
  authDomain: "drago-news-91c84.firebaseapp.com",
  projectId: "drago-news-91c84",
  storageBucket: "drago-news-91c84.appspot.com",
  messagingSenderId: "17652790060",
  appId: "1:17652790060:web:893b7f7f2b1688a0ea7289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;