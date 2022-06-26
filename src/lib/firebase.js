import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPlELRk6Yn4U9t3N1MrJ4FPLqPbq0TbJo",
  authDomain: "nhat-itss.firebaseapp.com",
  projectId: "nhat-itss",
  storageBucket: "nhat-itss.appspot.com",
  messagingSenderId: "528584037837",
  appId: "1:528584037837:web:27f3ad4c8412bc6b012084",
};

firebase.initializeApp(firebaseConfig);
