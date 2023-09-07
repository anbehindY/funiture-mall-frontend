import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logout from '../../login/Logout';
import logo from './logo.png';

const LeftSidebar = ({ setCurrUser }) => (
  <div className="leftsidebar-container">
    <div className="upper-part">
      <div className="app-logo">
        <div className="logo-image">
          <img src={logo} alt="Application Logo" />
          <h3>Dashboard</h3>
        </div>
      </div>
    </div>
    <div className="left-content">
      <ul className="action-list">
        <li className="item">
          <NavLink to="/furnitures" className="menubar-link">
            <span>Furnitures</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/my-appointments" className="menubar-link">
            <span> My Appointments</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/new-appointment" className="menubar-link">
            <span>Add Appointment</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/products" className="menubar-link">
            <span>Add Furniture</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/histories" className="menubar-link">
            <span>Delete Furniture</span>
          </NavLink>
        </li>
      </ul>
      <ul className="category-list">
        <li className="item">
          <Logout setCurrUser={setCurrUser} />
        </li>
      </ul>
    </div>
  </div>
);

export default LeftSidebar;

LeftSidebar.propTypes = {
  setCurrUser: PropTypes.func.isRequired,
};
