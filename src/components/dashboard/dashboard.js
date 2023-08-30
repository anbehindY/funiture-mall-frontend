import { Outlet } from "react-router-dom";
import DashboardContext from "./dashboardprovider";
import { useContext } from "react";
import "./dashboard.css";
import LeftSidebar from "./sidebar/leftsidebar";

const Dashboard = () => {
    const { Verifylogin } = useContext(DashboardContext);
    Verifylogin();
    return (
        <div className="dashboard-layout">
            <LeftSidebar />
            <div class="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;