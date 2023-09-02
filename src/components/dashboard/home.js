import Dashboard from './dashboard';
import Heropage from './Heropage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentUser, setCurrUser] = useState(null);

  const navigate = useNavigate();

  const checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/login')
      .then((response) => {
        const data = response.data.status.data.user;
        setCurrUser({
          ...data,
        });
      })
      .catch((error) => {
        console.log('login error', error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <>
      {!currentUser?.email && <Heropage />}
      {currentUser?.email && navigate('./furnitures')}
    </>
  );
};

export default Home;
