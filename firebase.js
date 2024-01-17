// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBTnTccFVac8FA4lyRXmYC02Ot95zVgF4w",
  authDomain: "cover-letter-generator-4f23b.firebaseapp.com",
  projectId: "cover-letter-generator-4f23b",
  storageBucket: "cover-letter-generator-4f23b.appspot.com",
  messagingSenderId: "318151125534",
  appId: "1:318151125534:web:7ef6e2e05e3d6f5cd59c0f",
  measurementId: "G-E7JECVZVVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, analytics, auth, db };