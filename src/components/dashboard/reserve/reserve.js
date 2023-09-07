import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from '../../../store/reservationActions';

function Reserve() {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Assuming you have a username stored in Redux state
  const usernameFromRedux = useSelector((state) => state.username);
  const dispatch = useDispatch();

  // Get the list of cities based on the selected country
  const cities = ['Abuja', 'Uyo', 'Asaba'];

  const handleReserve = (event) => {
    event.preventDefault();

    // Replace 'newUsername' with the new username value
    const newUsername = 'YourNewUsernameHere'; // Replace with your logic to get the new username

    // You can dispatch an action to update the username in Redux state
    dispatch(setUsername(newUsername));

    // Rest of your code for handling the form submission
  };

  return (
    <div>
      <h2>Reserve an Appointment</h2>
      <form onSubmit={handleReserve}>
        <label htmlFor="selectedDate">
          Select Date:
          <input
            type="date"
            id="selectedDate"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          />
        </label>
        <label htmlFor="selectedCity">
          Select City:
          {cities.length > 0 ? (
            <select
              id="selectedCity"
              value={selectedCity}
              onChange={(event) => setSelectedCity(event.target.value)}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          ) : null}
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default Reserve;
