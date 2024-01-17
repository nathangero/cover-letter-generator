// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { config } from "dotenv";
config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.VITE_PROJECT_KEY,
  authDomain: process.env.VITE_PROJECT_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_PROJECT_BUCKET,
  messagingSenderId: process.env.VITE_PROJECT_MESSAGING,
  appId: process.env.VITE_PROJECT_APP_ID,
  measurementId: process.env.VITE_PROJECT_MEASUREMENT,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, analytics, auth, db };