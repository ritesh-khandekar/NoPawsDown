import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import NavbarLight from './website/navbar/NavbarLight';
import Home from './website/components/Home';

import Login from "./website/user/Login";
import DonatePage from './website/pet/Donate';
import RescueForm from './website/pet/Rescue';
import Register from './website/user/Register';
import NGODetails from './website/pet/NGODetails';
import About from './website/components/About';
import Adopt from './website/pet/Adopt';
import SponsorPet from './website/pet/SponsorPet';

function App() {
  return <>
    <NavbarLight />
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="login" element={<Login />}  />
      <Route path="adopt" element={<Adopt />}  />
      <Route path="sponsor" element={<SponsorPet />}  />
      <Route path="about" element={<About />}  />
      <Route path="donate" element={<DonatePage />}  />
      <Route path="rescue" element={<RescueForm />}  />
      <Route path="register" element={<Register />}  />
    </Routes>
    </>

}
export default App;
