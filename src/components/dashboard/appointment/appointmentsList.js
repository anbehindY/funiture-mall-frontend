import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFurnitures } from '../../../store/furnitureSlice';
import './appointments.css';
import {
  deleteAppointment,
  fetchAppointments,
} from '../../../store/appointmentsSlice';
import LeftSidebar from '../sidebar/leftsidebar';

function AppointmentsList() {
  const dispatch = useDispatch();
  const { appointments, status } = useSelector((state) => state.appointments);
  const error = useSelector((state) => state.appointments.error);
  const { furnitures, message } = useSelector((state) => state.furniture);

  const { user } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(fetchAppointments(user.id));
    dispatch(getFurnitures());
  }, [dispatch]);

  if (error) {
    return <p>Sorry, could not load your appointments</p>;
  }

  return (
    <div className=" Appointments">
      <LeftSidebar />
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments to display.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Furniture Name</th>
              <th>Price</th>
              <th>Warranty</th>
              <th>City</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments[0].map((appointment) => (
              <tr key={appointment.id}>
                <td>
                  {
                    furnitures[0]?.find(
                      (furniture) => furniture.id === appointment.furniture_id
                    )?.name
                  }
                </td>
                <td>
                  {
                    furnitures[0]?.find(
                      (furniture) => furniture.id === appointment.furniture_id
                    )?.price
                  }
                </td>
                <td>
                  {
                    furnitures[0]?.find(
                      (furniture) => furniture.id === appointment.furniture_id
                    )?.warranty
                  }
                </td>
                <td>{appointment.city}</td>
                <td>{appointment.appoint_date}</td>

                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(deleteAppointment(appointment.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AppointmentsList;
