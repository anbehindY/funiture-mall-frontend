import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../dashboard/dashboard';

import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (userData) => {
    const url = 'http://localhost:3001/login';
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const { status } = await response.json();
        const { data } = status;
        localStorage.setItem('token', response.headers.get('Authorization'));
        localStorage.setItem('user', JSON.stringify(data));
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const userInfo = {
      user: userData,
    };

    // login(userInfo);
    const url = 'http://localhost:3001/login';
    try {
      const response = await axios.post(url, userInfo, {
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      });

      if (response.data.status.code === 200) {
        const { data } = response;
        const { status } = data;
        localStorage.setItem('token', response.headers.get('Authorization'));
        localStorage.setItem('user', JSON.stringify(status.data));
        setIsAuthenticated(true);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  if (isAuthenticated) {
    return navigate('/dashboard');
  }

  return (
    <>
      <div className="blur" />
      <div className="container-login">
        <div className="container-form">
          <form className="form-login" onSubmit={loginHandler}>
            <h2>Login Furniture Mall</h2>
            <div className="form-row">
              <input
                type="text"
                name="email"
                id="email"
                className="input-text"
                placeholder="Enter email address"
                required
                onChange={handleChange}
                value={userData.username}
              />
            </div>
            <div className="form-row">
              <input
                type="password"
                name="password"
                id="password_id"
                className="input-text"
                placeholder="Enter Password"
                required
                minLength={6}
                maxLength={50}
                onChange={handleChange}
                value={userData.password}
              />
            </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="register"
                className="register"
                value="Login"
              />
            </div>
          </form>
          <div className="P_singin">
            Don&apos;t have an account?
            <Link to="/signup" className="loginlink">
              {' '}
              <i className="fa fa-arrow-right" />
              Click here to Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
