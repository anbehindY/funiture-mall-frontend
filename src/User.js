import Signup from './components/login/signup';
import Login from './components/login/login';
// import Logout from './components/login/Logout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FurnitureList from './components/dashboard/furniture/FurnitureList';

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  if (currUser) {
    console.log(currUser);
    return (
      <div>
        Hello {currUser.email}
        <h1>I am a private message</h1>
        <FurnitureList />
      </div>
    );
  }

  return (
    <div>
      {show ? (
        <Login setCurrUser={setCurrUser} setShow={setShow} />
      ) : (
        <Signup setCurrUser={setCurrUser} setShow={setShow} />
      )}
    </div>
  );
};
export default User;
