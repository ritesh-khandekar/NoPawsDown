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
import User from './website/components/User';
import AdoptPetDetails from './website/pet/AdoptPetDetails';
import AdoptResults from './website/pet/AdoptResults';
import GivePet from './website/pet/GivePet';
import GivePetResults from './website/pet/GivePetResults';

function App() {
  return <>
    <NavbarLight />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="adopt" element={<Adopt />} />
      <Route path="adopt/:id/results" element={<AdoptResults />} />
      <Route path="adopt/:id" element={<AdoptPetDetails />} />
      <Route path="user" element={<User />} />
      <Route path="givepet" element={<GivePet />} />
      <Route path="givepet/results" element={<GivePetResults />} />
      <Route path="about" element={<About />} />
      <Route path="donate" element={<DonatePage />} />
      <Route path="rescue" element={<RescueForm />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </>

}
export default App;
