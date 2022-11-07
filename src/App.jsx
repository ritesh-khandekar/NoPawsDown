import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import NavbarLight from './website/navbar/NavbarLight';
import Home from './website/components/Home';

import Login from "./website/user/Login";
import Register from './website/user/Register';

import DonatePage from './website/pet/Donate';
import RescueForm from './website/pet/Rescue';

import About from './website/components/About';
import User from './website/components/User';

import Adopt from './website/pet/Adopt';
import AdoptPetDetails from './website/pet/AdoptPetDetails';
import AdoptResults from './website/pet/AdoptResults';
import GivePet from './website/pet/GivePet';
import GivePetResults from './website/pet/GivePetResults';
import DonateTrustDetails from './website/pet/DonateTrustDetails';
import DonateTrustResults from './website/pet/DonateTrustResults';

import NGOMainPage from './website/ngo/NGOMainPage';
import NGOLogin from './website/ngo/NGOLogin';
import NGORegister from './website/ngo/NGORegister';

import Admin from './website/admin/Admin';
import AdminNGOs from './website/admin/AdminNGOs';
import AdminNGODonations from './website/admin/AdminNGODonations';
import AdminPets from './website/admin/AdminPets';
import AdminAdoptRequests from './website/admin/AdminAdoptRequests.jsx';
import AdminUsers from './website/admin/AdminUsers';


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
      <Route path="donate/:id" element={<DonateTrustDetails />} />
      <Route path="donate/:id/results" element={<DonateTrustResults />} />
      <Route path="rescue" element={<RescueForm />} />
      <Route path="register" element={<Register />} />
      
      <Route path="ngo" element={<NGOMainPage />} />
      <Route path="ngo/register" element={<NGORegister />} />
      <Route path="ngo/login" element={<NGOLogin />} />

      <Route path="admin" element={<Admin />} />
      <Route path="admin/login" element={<NGOLogin />} />
      <Route path="admin/ngo" element={<AdminNGOs />} />
      <Route path="admin/pets" element={<AdminPets />} />
      <Route path="admin/donations" element={<AdminNGODonations />} />
      <Route path="admin/users" element={<AdminUsers />} />
      <Route path="admin/adoptrequests" element={<AdminAdoptRequests />} />

    </Routes>
  </>

}
export default App;
