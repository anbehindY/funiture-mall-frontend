// import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './components/login/login';
// import NotFound from './components/pagenotfound.js/notfound';
// import Furniture from './components/dashboard/furniture/Furniture';
// import Home from './components/dashboard/home';
// import Signup from './components/login/signup';
// import Dashboard from './components/dashboard/dashboard';
// import FurnitureForm from './components/dashboard/furniture/FurnitureForm';

//  function App() {
//    const [currUser, setCurrUser] = useState(null);

// //   // const navigate = useNavigate();

// //   // if (currUser) {
// //   //   navigate('/furnitures');
// //   // } else {
//   //   navigate('/login');
//   // }

//   return (
//     <>
//       <Routes>
//         <Route path="/" exact element={<Home />} />
//         <Route
//           path="/dashboard"
//           exact
//           element={<Dashboard />}
//           currUser={currUser}
//           setCurrUser={setCurrUser}
//         />

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './components/login/login';
// import NotFound from './components/pagenotfound.js/notfound';
// import FurnitureList from './components/dashboard/furniture/FurnitureList';
// import Furniture from './components/dashboard/furniture/Furniture';
// import Customer from './components/dashboard/customer/customer';
// import Product from './components/dashboard/product/product';
// import Reserve from './components/dashboard/reserve/reserve';
// import History from './components/dashboard/history/history';
// import Home from './components/dashboard/home';
// import Signup from './components/login/signup';
// import AppointmentsList from './components/appointmentsList';

// function App() {
//   return (

//     <Routes>
//       <Route path="/" exact element={<Home />}>
//         <Route path="/" exact element={<FurnitureList />} />
//         <Route path="/furnitures" exact element={<FurnitureList />} />
//         <Route path="/furnitures/:id" element={<Furniture />} />
//         <Route path="/customers" exact element={<Customer />} />
//         <Route path="/products" exact element={<Product />} />
//         <Route path="/appointments" exact element={<AppointmentsList />} />
//         <Route path="/histories" exact element={<History />} />
//       </Route>
//       <Route path="/login" exact element={<Login />} />
//       <Route path="/signup" exact element={<Signup />} />
//       <Route path="*" exact element={<NotFound />} />
//     </Routes>

//   );
// }

// export default App;

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
<<<<<<< HEAD
import AppointmentForm from './components/dashboard/reserve/reserveForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/furnitures/:id" element={<Furniture />} />
        <Route path="/new-furniture" exact element={<FurnitureForm />} />
        <Route path="/new-appointment" exact element={<AppointmentForm />} />
        <Route path="/login" exact element={<Login />} />

        <Route path="/signup" exact element={<Signup />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </>
=======
import FurnitureList from './components/dashboard/furniture/FurnitureList';
import Customer from './components/dashboard/customer/customer';
// import Product from './components/dashboard/product/product';
import Reserve from './components/dashboard/reserve/reserve';
// import History from './components/dashboard/history/history';
import AppointmentsList from './components/dashboard/reserve/appointmentsList';

function App() {
  const [currUser, setCurrUser] = useState(null);

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route
        path="/dashboard"
        exact
        element={<Dashboard />}
        currUser={currUser}
        setCurrUser={setCurrUser}
      />
      <Route path="/furnitures/:id" element={<Furniture />} />
      <Route path="/login" exact element={<Login currUser={currUser} setCurrUser={setCurrUser} />} />
      <Route path="/new-furniture" exact element={<FurnitureForm currUser={currUser} setCurrUser={setCurrUser} />} />
      <Route path="/signup" exact element={<Signup currUser={currUser} setCurrUser={setCurrUser} />} />
      <Route path="/furnitures" exact element={<FurnitureList />} />
      <Route path="/customers" exact element={<Customer />} />
      {/* <Route path="/products" exact element={<Product />} /> */}
      <Route path="/reserve" exact element={<Reserve />} />
      {/* <Route path="/histories" exact element={<History />} /> */}
      <Route path="/appointments" exact element={<AppointmentsList />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
>>>>>>> dev
  );
}

export default App;
