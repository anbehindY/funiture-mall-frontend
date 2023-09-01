import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../store/appointmentSlice'; // Replace with the actual import path

function AppointmentsList() {
  const appointments = useSelector((state) => state.appointments);
    const error = useSelector((state) => state.appointments.error);
  const dispatch = useDispatch();
