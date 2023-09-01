import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/userSllice';

import './login.css';

const Login = () => {
  // const { user } = useSelector((store) => store.user);

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    dispatch(userLogin(userData));

    // try {
    //   await axios
    //     .post('http://localhost:3001/login', user, { withCredentials: true })
    //     .then((response) => {
    //       if (response.data) {
    //         navigate('/furnitures');
    //       }
    //       setMessage(() => 'Username or password is incorrect.');
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         setMessage(() => `${error.response.data}`);
    //       } else if (error.request) {
    //         setMessage(() => `${error.request}`);
    //       } else {
    //         setMessage(() => `${error.message}`);
    //       }
    //     });
    // } catch (error) {
    //   setMessage(
    //     () =>
    //       'You cannot access the system.<br> Please contact your administrator.'
    //   );
    // } finally {
    //   e.target.reset();
    // }
  };

  return (
    <div className="container-login">
      <div className="container-form">
        <form className="form-login" onSubmit={loginHandler}>
          <h2>Login Furniture Mall</h2>
          <div className="form-row">
            <input
              type="text"
              name="username"
              id="username"
              className="input-text"
              placeholder="Enter username"
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
