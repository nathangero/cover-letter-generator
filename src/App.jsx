import { useState } from 'react'
import './App.css';
import Nav from "./components/Navbar";
import { Outlet } from "react-router";

function App() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
