// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx1L-guCdEfsxL-9PP2KG8GwFIVFlsq7A",
  authDomain: "agriexp-db.firebaseapp.com",
  projectId: "agriexp-db",
  storageBucket: "agriexp-db.appspot.com",
  messagingSenderId: "1049394244148",
  appId: "1:1049394244148:web:c81b3a9e445f5dc0ed7861",
  measurementId: "G-SBE8WYCWJY"
};

// Initialize Firebase
const firebaseconfig = initializeApp(firebaseConfig);
export default firebaseconfig
// const analytics = getAnalytics(app);