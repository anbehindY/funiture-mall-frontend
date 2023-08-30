import { DashboardProvider } from "./dashboardprovider";
import Dashboard from "./dashboard";

const Home = ({ children }) => {
    return (
        <DashboardProvider>
            {children}
            <Dashboard />
        </DashboardProvider>
    );
};

export default Home;