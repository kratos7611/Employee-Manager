import './App.css'
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./Pages/Login/Login";
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path={"/"} element={<Login />}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
