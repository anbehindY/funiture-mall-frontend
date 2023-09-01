import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import NotFound from './components/pagenotfound.js/notfound';
import FurnitureList from './components/dashboard/furniture/FurnitureList';
import Furniture from './components/dashboard/furniture/Furniture';
import Customer from './components/dashboard/customer/customer';
import Product from './components/dashboard/product/product';
import Reserve from './components/dashboard/reserve/reserve';
import History from './components/dashboard/history/history';
import Home from './components/dashboard/home';
import Signup from './components/login/signup';
import AppointmentsList from './components/appointmentsList';

function App() {
  return (

    <Routes>
      <Route path="/" exact element={<Home />}>
        <Route path="/" exact element={<FurnitureList />} />
        <Route path="/furnitures" exact element={<FurnitureList />} />
        <Route path="/furnitures/:id" element={<Furniture />} />
        <Route path="/customers" exact element={<Customer />} />
        <Route path="/products" exact element={<Product />} />
        <Route path="/appointments" exact element={<AppointmentsList />} />
        <Route path="/histories" exact element={<History />} />
      </Route>
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>

  );
}

export default App;
