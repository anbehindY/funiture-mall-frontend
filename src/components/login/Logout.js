import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/');
  };

  return (
    <div>
      <input type="button" value="Logout" onClick={handleClick} />
    </div>
  );
};
export default Logout;
