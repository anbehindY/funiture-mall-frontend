import React, { useState } from 'react';

function Reserve() {
    const [username, setUsername] = useState(''); // Set the username if available
    const [selectedItem, setSelectedItem] = useState(''); // Autofill the selected item
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
  
    const handleReserve = () => {
      // Handle the reservation process, e.g., send data to the server
    };

    return (
        <div>
          <h2>Reserve an Appointment</h2>
          <form onSubmit={handleReserve}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}