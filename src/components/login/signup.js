import './login.css';

const Signup = () => (
  <div className="container-login">
    <div className="container-form">
      <form className="form-login" action="#" method="post">
        <h2>Signup Online Furniture Account</h2>
        <div className="form-row">
          <label htmlFor="full_name">
            Full Name
            <input type="text" name="full_name" id="full_name" className="input-text" placeholder="Your Name Your fathername" pattern="^([A-Za-z]{2,15})\s([A-Za-z]{2,15})$" required minLength={6} maxLength={50} />
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="your-email">
            Your Email
            <input type="text" name="email" id="your-email" className="input-text" placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" minLength={8} maxLength={30} />
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="password">
            New Password
            <input type="password" name="password" id="password" className="input-text" placeholder="Your Password" required minLength={6} maxLength={50} />
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="confirm-password">
            Confirm Password
            <input type="password" name="confirm-password" id="confirm-password" className="input-text" placeholder="Retype Password" required minLength={6} maxLength={50} />
          </label>
        </div>
        <div className="form-row-last">
          <input type="submit" name="register" className="register" value="Register" />
        </div>
      </form>
    </div>
  </div>
);

export default Signup;
