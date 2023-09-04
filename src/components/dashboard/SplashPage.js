import { Link } from 'react-router-dom';

import './home.css';

const SplashPage = () => {
  return (
    <div className="containerhome">
      <h1>Welcome to Furniture mall</h1>
      <Link to="./login" className="LinkhomeL_login">
        Click here to sign in
        {/* <i className="fa fa-arrow-circle-o-right" /> */}
      </Link>
    </div>
  );
};

export default SplashPage;
