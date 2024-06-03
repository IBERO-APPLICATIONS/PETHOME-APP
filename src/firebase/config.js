// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-jbS-sIEeiEj7kU7z70HQn3alsANci9I",
  authDomain: "pethome-c59d4.firebaseapp.com",
  projectId: "pethome-c59d4",
  storageBucket: "pethome-c59d4.appspot.com",
  messagingSenderId: "231738335472",
  appId: "1:231738335472:web:45b0b7550904a6d4042235"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );