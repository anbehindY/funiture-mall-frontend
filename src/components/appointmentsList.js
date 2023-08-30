import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await axios.get('/api/appointments'); // Replace with your API endpoint
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments List</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <>
              <strong>Date:</strong>
              {' '}
              {appointment.date}
              <br />
              <strong>City:</strong>
              {' '}
              {appointment.city}
              <br />
              {/* Other appointment details */}
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsList;
