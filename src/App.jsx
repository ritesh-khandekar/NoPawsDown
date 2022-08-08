import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import NavbarLight from './website/navbar/NavbarLight';
import Header from './website/navbar/Header';

import Login from "./website/user/Login";
import DonatePage from './website/pet/Donate';
import RescueForm from './website/pet/Rescue';
import Register from './website/user/Register';
import NGODetails from './website/pet/NGODetails';

function App() {
  return <>
    <NavbarLight />
    <Routes>
      <Route path="/" element={<Header />}  />
      <Route path="login" element={<Login />}  />
      <Route path="donate" element={<DonatePage />}  />
      <Route path="rescue" element={<RescueForm />}  />
      <Route path="register" element={<Register />}  />
    </Routes>
    </>

}
export default App;
