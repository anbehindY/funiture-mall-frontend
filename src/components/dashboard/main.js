import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/dashboard');
  }, 10000);
  return (
    <div>
      <h2>Login successful</h2>
    </div>
  );
};
export default Main;
