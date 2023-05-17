// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb5qtnMWYrwpXShp5pqv38ZCeAepK_j1I",
  authDomain: "projet-next.firebaseapp.com",
  projectId: "projet-next",
  storageBucket: "projet-next.appspot.com",
  messagingSenderId: "1033114157674",
  appId: "1:1033114157674:web:e035d7a438194a2b2bc013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage(app);
export default storage;