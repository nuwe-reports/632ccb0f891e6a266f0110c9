// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaBEc340B5yvPCqNuAyMe82SaKRAdSX1U",
  authDomain: "rickandmortyapp-295bb.firebaseapp.com",
  projectId: "rickandmortyapp-295bb",
  storageBucket: "rickandmortyapp-295bb.appspot.com",
  messagingSenderId: "769012258278",
  appId: "1:769012258278:web:1b1dd8309f85b6674bf227"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
