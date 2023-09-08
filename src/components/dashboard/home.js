import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SplashPage from './SplashPage';
import Dashboard from './dashboard';

const Home = () => {
  const currentUserToken = JSON.parse(localStorage.getItem('user'));
  const apiToken = localStorage.getItem('token');
  return (
    <div>
      {!currentUserToken && !apiToken && <SplashPage />}
      {currentUserToken && apiToken && <Dashboard />}
    </div>
  );
};
export default Home;
