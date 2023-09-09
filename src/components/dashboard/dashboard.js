import { Outlet } from 'react-router-dom';
import './dashboard.css';
import './sidebar/leftsidebar.css';
import LeftSidebar from './sidebar/leftsidebar';
import FurnitureList from './furniture/FurnitureList';

const Dashboard = () => (
  <div className="dashboard-layout">
    <LeftSidebar />
    <FurnitureList />
    <div className="dashboard-content">
      <Outlet />
    </div>
  </div>
);

export default Dashboard;
