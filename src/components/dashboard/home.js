import { Link } from 'react-router-dom';

const Home = () => {
  // const { children } = data;
  return (
    <div>
      <h1>Home to Furniture Mall</h1>
      <Link to="/login">Click here to Sign in</Link>
    </div>
  );
};

export default Home;
