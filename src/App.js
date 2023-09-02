import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import User from './User';

function App() {
  const [currUser, setCurrUser] = useState(null);

  console.log(currUser);
  if (currUser) {
    console.log(currUser);
    return (
      <div>
        Hello {currUser.email}
        <h1>I am a private message</h1>
        <FurnitureList currUser={currUser} />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" exact element={<Home />}>
        <Route path="/" exact element={<Furnitures />} />
        <Route path="/furnitures" exact element={<Furnitures />} />
        <Route path="/customers" exact element={<Customer />} />
        <Route path="/products" exact element={<Product />} />
        <Route path="/reserves" exact element={<Reserve />} />
        <Route path="/histories" exact element={<History />} />
      </Route>
      <Route
        path="/login"
        exact
        element={<Login currUser={currUser} setCurrUser={setCurrUser} />}
      />
      <Route
        path="/signup"
        exact
        element={<Signup currUser={currUser} setCurrUser={setCurrUser} />}
      />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
}

export default App;
