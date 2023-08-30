import React, { useEffect, useState } from 'react';

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