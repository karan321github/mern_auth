// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth2-a02b0.firebaseapp.com",
  projectId: "mernauth2-a02b0",
  storageBucket: "mernauth2-a02b0.appspot.com",
  messagingSenderId: "993125132468",
  appId: "1:993125132468:web:9d0f48f7fed110c4234fe1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);