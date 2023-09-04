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

import './home.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="containerhome">
    <h1>Home to Furniture Mall</h1>
    <Link to="/login" className="LinkhomeL_login">
      Sign in
      <i className="fa fa-arrow-circle-o-right" />
    </Link>
  </div>
);
export default Home;
