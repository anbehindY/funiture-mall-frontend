import { Routes, Route, Outlet } from 'react-router-dom';
import './dashboard.css';
import LeftSidebar from './sidebar/leftsidebar';
import FurnitureList from './furniture/FurnitureList';

const Dashboard = ({ currUser, setCurrUser }) => {
  return (
    <div className="dashboard-layout">
      <LeftSidebar />
      <FurnitureList currUser={currUser} setCurrUser={setCurrUser} />

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

