import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from 'firebase/auth' ;

const firebaseConfig = {

  apiKey: "AIzaSyBvfKXyO9-LbI21_-tNJaTHDQuHUl02cPc",

  authDomain: "light-studio-147c8.firebaseapp.com",

  projectId: "light-studio-147c8",

  storageBucket: "light-studio-147c8.appspot.com",

  messagingSenderId: "878783321882",

  appId: "1:878783321882:web:50475829a3c81ff9a17ea3",

  measurementId: "G-81S7JCK7JB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth}