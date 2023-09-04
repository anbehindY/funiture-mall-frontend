import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './login.css';

const Signup = (setCurrUser) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [userData, setUserData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const signup = async (userInfo) => {
    const url = 'http://localhost:3001/signup';
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        // const data = await response.json();
        localStorage.setItem('token', response.headers.get('Authorization'));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      throw data.error;
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    const userInfo = {
      user: { ...userData },
    };

    signup(userInfo, setCurrUser);
  };

  return (
    <div className="container-login">
      {isAuthenticated && (
        <div>
          <p>Congratulations you have successfully registered</p>
          <Link to="/login">Click here to login in</Link>
        </div>
      )}
      {!isAuthenticated && (
        <div className="container-form">
          <form className="form-login" onSubmit={signupHandler}>
            <h2>Signup Online Furniture Account</h2>
            <div className="form-row">
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="input-text"
                placeholder="Enter first and last names"
                pattern="^([A-Za-z]{2,15})\s([A-Za-z]{2,15})$"
                required
                // minLength={6}
                // maxLength={50}
                onChange={handleChange}
                value={userData.fullname}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="username"
                id="username"
                className="input-text"
                placeholder="Enter username"
                required
                // minLength={6}
                // maxLength={50}
                onChange={handleChange}
                value={userData.username}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="email"
                id="your-email"
                className="input-text"
                placeholder="Your Email"
                required
                // pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                // minLength={8}
                // maxLength={30}
                onChange={handleChange}
                value={userData.email}
              />
            </div>
            <div className="form-row">
              <input
                type="password"
                name="password"
                id="password"
                className="input-text"
                placeholder="Your Password"
                required
                minLength={6}
                maxLength={50}
                onChange={handleChange}
                value={userData.password}
              />
            </div>
            <div className="form-row">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="input-text"
                placeholder="Retype Password"
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
                value="Register"
              />
            </div>
          </form>
          <p>
            Already have an account?
            {' '}
            <Link to="/login">Click here to Login</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
