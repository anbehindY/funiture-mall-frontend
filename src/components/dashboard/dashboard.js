import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { DashboardContext } from './dashboardprovider';
import './dashboard.css';
import LeftSidebar from './sidebar/leftsidebar';

const Dashboard = () => {
  const { Verifylogin } = useContext(DashboardContext);
  Verifylogin();
  return (
    <div className="dashboard-layout">
      <LeftSidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
