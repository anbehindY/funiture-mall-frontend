import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { userLogin } from '../../store/userSllice';

import './login.css';

const Login = ({ setCurrUser }) => {
  // const { user } = useSelector((store) => store.user);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const login = async (userData, setCurrUser) => {
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

      const { status } = await response.json();
      if (!response.ok) throw data.error;
      localStorage.setItem('token', response.headers.get('Authorization'));
      const { data } = status;
      setCurrUser(data.user);

      navigate('/furnitures');
    } catch (error) {
      console.log(error);
    }
  };

  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const userInfo = {
      user: { ...userData },
    };
    login(userInfo, setCurrUser);
  };

  return (
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
        <p>
          Don&apos;t have an account?
          <Link to="/signup">Click here to Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
