'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NewAppointments: NextPage = () => {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  return (
    <>
      {/* Head component for setting page title */}
      <Head>
        <title>Booking System - New Appointments</title>
      </Head>

      {/* Main content of the New Appointments page */}
      <main className="bg-red-600 text-white min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-2xl font-bold uppercase mb-4">BOOK AN APPOINTMENT</h1>

        {/* Service Selection Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="serviceDropdown"
            className="block text-lg mb-1"
          >
            Select a Service:
          </label>
          <select
            id="serviceDropdown"
            value={selectedService}
            onChange={handleServiceChange}
            className="p-2 text-lg rounded"
          >
            <option value="">Choose a service</option>
            <option value="haircut">Haircut</option>
            <option value="coloring">Coloring</option>
            <option value="styling">Styling</option>
            {/* Add more services as needed */}
          </select>
        </div>

        {/* Calendar and Time Selection (Replace with your preferred calendar/time component) */}
        <div className="mb-4">
          {/*We need to add our calendar and time selection component here. Not sure what to use yet */}
          <p>Select Date and Time: [Your Calendar Component]</p>
        </div>

        {/* Button to confirm the appointment (Replace with our booking logic WIP) */}
        <button
          className="bg-white text-red-600 p-2 rounded font-bold text-lg uppercase transition duration-300 hover:bg-red-600 hover:text-white"
        >
          Confirm Appointment
        </button>
      </main>
    </>
  );
};

// Exporting the NewAppointments component
export default NewAppointments;
