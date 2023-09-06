import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFurnitures } from '../../../store/furnitureSlice';
import {
  deleteAppointment,
  fetchAppointments,
  addWarrantyToAppointment,
} from '../../../store/appointmentsSlice';

function AppointmentsList() {
  const dispatch = useDispatch();
  const { appointments, status } = useSelector((state) => state.appointments);
  const error = useSelector((state) => state.appointments.error);
  const { furnitures, message } = useSelector((state) => state.furniture);

  const { user } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(fetchAppointments());
    dispatch(getFurnitures());
  }, [dispatch, message]);

  const handleDeleteAppointment = (id) => {
    dispatch(deleteAppointment(id));
  };

  const currentUserFurnitures = furnitures[0]?.map((item) => {
    if (item.id === user.id) {
      return item;
    }
    return item;
  });

  const addWarranty = (id) => {
    dispatch(addWarrantyToAppointment(id));
  };

  const findFuniture = (id, kind) => {
    let result = null;
    if (message === 'loaded') {
      const selected = currentUserFurnitures?.find((item) => item.id === id);
      if (selected) {
        if (kind === 'price') {
          result = selected.price;
        } else if (kind === 'warranty') {
          result = selected.warranty;
        } else {
          result = selected.name;
        }
      }
    }
    return result;
  };

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
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
                <td>{findFuniture(appointment.furniture_id, 'name')}</td>
                <td>{findFuniture(appointment.furniture_id, 'price')}</td>
                <td>{findFuniture(appointment.furniture_id, 'warranty')}</td>
                <td>{appointment.city}</td>
                <td>{appointment.appoint_date}</td>

                <td>
                  <button
                    type="button"
                    onClick={(e) => handleDeleteAppointment(appointment.id)}
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
