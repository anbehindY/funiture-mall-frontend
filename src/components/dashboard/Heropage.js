import { Link } from 'react-router-dom';
// import Login from '../login/login';
// import Signup from '../login/signup';

const Heropage = () => {
  return (
    <div>
      <h1>Welcome to Furniture mall</h1>
      <Link to="./login">Click here to sign in</Link>
    </div>
  );
};

export default Heropage;
