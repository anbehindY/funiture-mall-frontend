import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFurnitures } from '../../../store/furnitureSlice';
import { deleteAppointment, fetchAppointments, addWarrantyToAppointment } from '../../../store/appointmentsSlice';

function AppointmentsList() {
  const dispatch = useDispatch();
  const { appointments, status } = useSelector((state) => state.appointments);
  const error = useSelector((state) => state.appointments.error);
  const { furnitures, message } = useSelector((state) => state.furniture);

  useEffect(() => {
    // Fetch user appointments when the component mounts
    dispatch(fetchAppointments());
    dispatch(getFurnitures());
  }, []);

  const handleDeleteAppointment = (id) => {
    if (status === 'succeeded') {
      dispatch(deleteAppointment(id));
    }
  };

  const addWarranty = (id) => {
    dispatch(addWarrantyToAppointment(id));
  };

  const findFuniture = (id, kind) => {
    if (message === 'loaded') {
      const selected = furnitures.filter((item) => item.id === id);

      return kind === 'price' ? selected[0].price : selected[0].name;
    }
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
              <th>Item Name</th>
              <th>City</th>
              <th>Price</th>
              <th>Warranty</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{findFuniture(appointment.furniture_id, 'name')}</td>
                <td>{findFuniture(appointment.furniture_id, 'price')}</td>
                <td>{findFuniture(appointment.furniture_id, 'warranty')}</td>
                <td>{appointment.city}</td>
                <td>{appointment.appoint_date}</td>
                <td><button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


export default AppointmentsList;
