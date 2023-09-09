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
  const { appointments, error } = useSelector((state) => state.appointments);
  const { furnitures } = useSelector((state) => state.furnitures);

  const { user } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(fetchAppointments(user.id));
    dispatch(getFurnitures());
  }, [dispatch, user.id]);

  const refresh = () => window.location.reload(true);

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
    refresh();
  };

  if (error) {
    return <p>Sorry, could not load your appointments</p>;
  }

  return (
    <div className=" Appointments">
      <LeftSidebar />
      <h2>My Appointments</h2>
      {appointments.length === 0 && <p>No appointments to display.</p>}
      {appointments.length !== 0 && (
        <div>
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
            {appointments.map((appointment) => (
              <tbody key={appointment.id}>
                <tr>
                  <td>
                    {
                      furnitures?.find(
                        (furniture) => furniture.id === appointment.furniture_id,
                      )?.name
                    }
                  </td>
                  <td>
                    {
                      furnitures?.find(
                        (furniture) => furniture.id === appointment.furniture_id,
                      )?.price
                    }
                  </td>
                  <td>
                    {
                      furnitures?.find(
                        (furniture) => furniture.id === appointment.furniture_id,
                      )?.warranty
                    }
                  </td>
                  <td>{appointment.city}</td>
                  <td>{appointment.appoint_date}</td>

                  <td>
                    <td>
                      <button
                        type="submit"
                        onClick={() => handleDelete(appointment.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default AppointmentsList;

//  dispatch(deleteAppointment(appointment.id)
