// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PROJECT_KEY,
  authDomain: import.meta.env.VITE_PROJECT_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_PROJECT_BUCKET,
  messagingSenderId: import.meta.env.VITE_PROJECT_MESSAGING,
  appId: import.meta.env.VITE_PROJECT_APP_ID,
  measurementId: import.meta.env.VITE_PROJECT_MEASUREMENT,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };