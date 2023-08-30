import { DashboardProvider } from './dashboardprovider';
import Dashboard from './dashboard';

const Home = (data) => {
  const { children } = data;
  return (
    <DashboardProvider>
      {children}
      <Dashboard />
    </DashboardProvider>
  );
};

export default Home;
