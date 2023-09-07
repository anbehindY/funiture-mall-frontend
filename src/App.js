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
import DeleteFurniture from './components/dashboard/furniture/DeleteFurniture';
import AdminSignUp from './components/login/Admin';
import Sidebar from './Sidebar';

function App() {
  return (
    <>
      <div className="Sidebarmain">
        {' '}
        <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/furnitures/:id" element={<Furniture />} />
        <Route path="/new-furniture" exact element={<FurnitureForm />} />
        <Route path="/new-appointment" exact element={<AppointmentForm />} />
        <Route path="/my-appointments" exact element={<AppointmentsList />} />
        <Route path="/delete-furniture" exact element={<DeleteFurniture />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin" exact element={<AdminSignUp />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
