import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDK33Fw45oSmT8c6Ix8ZnutH7pOQ9V8cAY",
  authDomain: "unichat-2717d.firebaseapp.com",
  projectId: "unichat-2717d",
  storageBucket: "unichat-2717d.appspot.com",
  messagingSenderId: "776211403720",
  appId: "1:776211403720:web:8d1d34b7cfd4669ba6e6fd",
}).auth();
