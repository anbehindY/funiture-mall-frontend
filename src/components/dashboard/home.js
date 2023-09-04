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
