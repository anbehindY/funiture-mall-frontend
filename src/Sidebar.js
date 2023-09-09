import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Logout from './components/login/Logout';
import './Sidebar.css';

const sidebar = (props) => {
  const data = JSON.parse(localStorage.getItem('user'));

  const role = data && data.user.role === 'Admin' ? 'is-admin' : 'is-customer';
  return (
    <Menu className="sidemenu">
      <ul className="action-list">
        <li className="item">
          <NavLink to="/dashboard" className="menubar-link">
            <span>Furnitures</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/my-appointments" className="menubar-link">
            <span> My Appointments</span>
          </NavLink>
        </li>
        <li className={`${role} item`}>
          <NavLink to="/new-furniture" className="menubar-link">
            <span>Add Furniture</span>
          </NavLink>
        </li>
        <li className={`${role} item`}>
          <NavLink to="/delete-furniture" className="menubar-link">
            <span>Delete Furniture</span>
          </NavLink>
        </li>
      </ul>
      <ul className="category-list">
        <li className="item">
          <Logout />
        </li>
      </ul>
    </Menu>
  );
};

export default sidebar;
