'use client';

import type { NextPage } from 'next';
import { useState } from 'react';

const NewAppointment = () => {

  const services = ['Service A', 'Service B', 'Service C'];
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = () => {
    // Implement booking logic (e.g., show a confirmation message). This is just a placeholder for now
    alert(`Booking confirmed for ${selectedService} on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div>
      <h1>Book Your Appointment</h1>

      {/* Services Section */}
      <div>
        <h2>Select a Service</h2>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Date Section */}
      <div>
        <h2>Select a Date</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Time Section */}
      <div>
        <h2>Select a Time</h2>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="5:00 PM">5:00 PM</option>
        </select>
      </div>

      {/* Book Appointment Button */}
      <button onClick={handleBooking} disabled={!selectedService || !selectedDate || !selectedTime}>
        Book Appointment
      </button>
    </div>
  );
};

export default NewAppointment;
