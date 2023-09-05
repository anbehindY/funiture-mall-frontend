import { useState } from 'react';
// import { Link, redirect, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addFurniture } from '../../../store/furnitureSlice';

const AppointmentForm = () => {
  const [appointmentDetail, setAppointmentDetail] = useState({
    city: '',
    date: '',
    furniture: '',
  });

  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setAppointmentDetail({
      ...appointmentDetail,
      [e.target.name]: e.target.value,
    });
  };

  const appointmentHandler = (e) => {
    e.preventDefault();

    // const furnitureInfo = {
    //   furniture: { ...furnitureData },
    // };
    console.log(appointmentDetail);
    // dispatch(addFurniture(furnitureInfo));
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
              name="date"
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


