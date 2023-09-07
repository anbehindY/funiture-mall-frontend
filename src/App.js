import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import NotFound from './components/pagenotfound.js/notfound';
import Furniture from './components/dashboard/furniture/Furniture';
import Home from './components/dashboard/home';
import Signup from './components/login/signup';
import Dashboard from './components/dashboard/dashboard';
import FurnitureForm from './components/dashboard/furniture/FurnitureForm';
import AppointmentForm from './components/dashboard/appointment/appointmentForm';
import AppointmentsList from './components/dashboard/appointment/appointmentsList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/furnitures/:id" element={<Furniture />} />
        <Route path="/new-furniture" exact element={<FurnitureForm />} />
        <Route path="/new-appointment" exact element={<AppointmentForm />} />
        <Route path="/my-appointments" exact element={<AppointmentsList />} />
        <Route path="/login" exact element={<Login />} />

        <Route path="/signup" exact element={<Signup />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
