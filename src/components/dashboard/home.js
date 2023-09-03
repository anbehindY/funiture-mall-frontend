import SplashPage from './SplashPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoginStatus } from '../../store/userSllice';
import Dashboard from './dashboard';

const Home = () => {
  const { isAuthenticated } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLoginStatus());
  }, []);

  return (
    <div>
      {!isAuthenticated && <SplashPage />}
      {isAuthenticated && <Dashboard />}
    </div>
  );
};

export default Home;
