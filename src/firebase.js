import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOzLanDrGwffDqWgodpMuodpAC5AHSzTA",
  authDomain: "amzn-clone-my.firebaseapp.com",
  projectId: "amzn-clone-my",
  storageBucket: "amzn-clone-my.appspot.com",
  messagingSenderId: "823335953216",
  appId: "1:823335953216:web:124cc818be0d971c1a50a5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
