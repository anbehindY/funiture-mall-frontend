import { useEffect, useState } from 'react';
// import { Link, redirect, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment } from '../../../store/appointmentsSlice';
import { getLoginStatus } from '../../store/userSllice';
import { getFurnitures } from '../../../store/furnitureSlice';

const AppointmentForm = () => {
  const { user } = useSelector((store) => store.user);
  const { furnitures } = useSelector((state) => state.furniture);

    const location = useLocation();
    const furnitureState = location.state;
    const { fromFurniture } = furnitureState;

  const [appointmentDetail, setAppointmentDetail] = useState({
    city: '',
    appoint_date: '',
    furniture_id: '',
    user_id: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());
    dispatch(getFurnitures());
  }, []);

  const handleChange = (e) => {
    setAppointmentDetail({
      ...appointmentDetail,
      furniture_id: '',
      user_id: '',
      [e.target.name]: e.target.value,
    });
  };

  const appointmentHandler = (e) => {
    e.preventDefault();

    console.log(appointmentDetail);
    dispatch(addAppointment(appointmentDetail));
  };

  return (
    <div className="container-login">
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
