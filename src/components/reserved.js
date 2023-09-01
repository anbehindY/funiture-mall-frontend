import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../redux/reservationActions';

function Reserve({ username, setUsername }) {
  return (
    <div>
      <h2>Reserve an Appointment</h2>
      <form onSubmit={handleReserve}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Selected Item:
          <input
            type="text"
            value={selectedItem}
            onChange={(event) => setSelectedItem(event.target.value)}
          />
        </label>
        <label>
          Select Date:
          <input
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          />
        </label>
        <label>
          Select City:
          <input
            type="text"
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
          />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  username: state.username,
});
const mapDispatchToProps = {
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reserve);
