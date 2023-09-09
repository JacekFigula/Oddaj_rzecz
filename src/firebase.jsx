// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "oddaj-rzecz-ff170.firebaseapp.com",
    projectId: "oddaj-rzecz-ff170",
    storageBucket: "oddaj-rzecz-ff170.appspot.com",
    messagingSenderId: "108417917980",
    appId: "1:108417917980:web:b5e4cae34638e96af76bd9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);