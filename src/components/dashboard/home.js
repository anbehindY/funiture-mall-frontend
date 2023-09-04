import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginStatus } from '../../store/userSllice';
import SplashPage from './SplashPage';
import Dashboard from './dashboard';

const Home = () => {
  const { isAuthenticated } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  return (
    <div>
      {!isAuthenticated && <SplashPage />}
      {isAuthenticated && <Dashboard />}
    </div>
  );
};

export default Home;
