// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9jOl7RgXjNYslSSKpuGdvHWq3myu-9i8",
  authDomain: "linkedin-project-ee16e.firebaseapp.com",
  projectId: "linkedin-project-ee16e",
  storageBucket: "linkedin-project-ee16e.appspot.com",
  messagingSenderId: "924531416478",
  appId: "1:924531416478:web:91f6fb4789ed99fae3ca8f",
  measurementId: "G-M5GWZHRB7B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);