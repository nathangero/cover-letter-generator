import './App.css';
import Nav from "./components/Navbar";
import { Outlet } from "react-router";
import { useEffect } from 'react';
import { auth } from "../firebase.js";

function App() {

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      // console.log("@onAuthStateChanged");
      if (user?.uid) {
        console.log("logging in user:", user.uid);
      }
    });
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
