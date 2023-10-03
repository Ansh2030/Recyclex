// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA04ZnvMsGR4dUVlstkkeg_h1Oo1gQFTLg",
  authDomain: "recyclex-dc17a.firebaseapp.com",
  projectId: "recyclex-dc17a",
  storageBucket: "recyclex-dc17a.appspot.com",
  messagingSenderId: "847058168089",
  appId: "1:847058168089:web:b0b43c85e9ae1c6a6a3d88",
  measurementId: "G-G42SEWKK2X"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app);

export {app, auth, db, storage };