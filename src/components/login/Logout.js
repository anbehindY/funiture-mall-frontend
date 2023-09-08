import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logout = ({ setCurrUser }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
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

Logout.propTypes = {
  setCurrUser: PropTypes.func.isRequired,
};
