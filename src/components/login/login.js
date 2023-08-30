import axios from 'axios';
import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const signin = async (e) => {
    e.preventDefault();
    const user = { user: { email: e.target.email.value, password: e.target.password.value } };
    try {
      await axios.post('http://localhost:3001/login', user, { withCredentials: true })
        .then((response) => {
          if (response.data) {
            navigate('/furnitures');
          }
          setMessage(() => 'Username or password is incorrect.');
        })
        .catch((error) => {
          if (error.response) {
            setMessage(() => `${error.response.data}`);
          } else if (error.request) {
            setMessage(() => `${error.request}`);
          } else {
            setMessage(() => `${error.message}`);
          }
        });
    } catch (error) {
      setMessage(() => 'You cannot access the system.<br> Please contact your administrator.');
    } finally {
      e.target.reset();
    }
  };
  return (
    <div className="container-login">
      <div className="container-form">
        <form className="form-login" onSubmit={signin}>
          <h2>Login Furniture Mall</h2>
          <div className="form-row">
            <label htmlFor="email_id">
              Your Email
              <input type="text" name="email" id="email_id" className="input-text" placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" minLength={8} maxLength={30} />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="password_id">
              Password
              <input type="password" name="password" id="password_id" className="input-text" placeholder="Your Password" required minLength={6} maxLength={50} />
            </label>
          </div>
          <div className="form-row-last">
            <input type="submit" name="register" className="register" value="Login" />
          </div>
          <strong>
            {message}
            {' '}
          </strong>
        </form>
      </div>
    </div>
  );
};

export default Login;
