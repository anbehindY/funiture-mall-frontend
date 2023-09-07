import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../../../store/appointmentsSlice';
import LeftSidebar from '../sidebar/leftsidebar';

const AppointmentForm = () => {
  const location = useLocation();
  const { furniture } = location.state;

  const [appointmentDetail, setAppointmentDetail] = useState({
    city: '',
    appoint_date: '',
    furniture_id: '',
    user_id: '',
  });

  const { user } = JSON.parse(localStorage.getItem('user'));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAppointmentDetail({
      ...appointmentDetail,
      furniture_id: furniture.id,
      user_id: user.id,
      [e.target.name]: e.target.value,
    });
  };

  const appointmentHandler = async (e) => {
    e.preventDefault();
    const response = await dispatch(addAppointment(appointmentDetail));
    if (response.type === 'add/appointment/fulfilled') {
      navigate('/dashboard');
    } else {
      return;
    }
  };

  return (
    <div className="container-login">
      <LeftSidebar />
      <div className="container-form">
        <form className="form-login" onSubmit={appointmentHandler}>
          <h2>Book an appointment</h2>
          <div className="form-row">
            <select
              name="city"
              id="city"
              className="input-text"
              onChange={handleChange}
            >
              <option>Select a city</option>
              <option>Abuja</option>
              <option>Addis Ababa</option>
              <option>Lodon</option>
              <option>Nairobi</option>
              <option>New york</option>
              <option>Taipei</option>
            </select>
          </div>
          <div className="form-row">
            <input
              type="date"
              name="appoint_date"
              id="date"
              className="input-text"
              placeholder="Select a preferred date"
              required
              onChange={handleChange}
              value={appointmentDetail.date}
            />
          </div>

          <div className="form-row-last">
            <input type="submit" className="register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
