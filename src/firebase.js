import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpQuau16qiC5LJ9RXT1PKWBOZtcgvmixg",
  authDomain: "linkedin-clone-e5d69.firebaseapp.com",
  projectId: "linkedin-clone-e5d69",
  storageBucket: "linkedin-clone-e5d69.appspot.com",
  messagingSenderId: "6097638687",
  appId: "1:6097638687:web:c4841264e8a822fc244c2a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebase ;


// const db = getFirestore();
// 