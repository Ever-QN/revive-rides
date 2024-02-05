import { NextPage } from 'next';
import Head from 'next/head';

const BookingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Booking System</title>
      </Head>
      <main style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>BOOKING SYSTEM OF S&D</h1>
        <div style={{ display: 'flex', gap: '1em' }}>
          <button style={{ backgroundColor: 'red', color: 'white', padding: '1em 2em', border: 'none', borderRadius: '10px' }}>BOOK AN APPOINTMENT</button>
          <button style={{ backgroundColor: 'red', color: 'white', padding: '1em 2em', border: 'none', borderRadius: '10px' }}>EDIT BOOKING</button>
          <button style={{ backgroundColor: 'red', color: 'white', padding: '1em 2em', border: 'none', borderRadius: '10px' }}>REQUEST A QUOTE</button>
        </div>
      </main>
    </>
  );
};

export default BookingPage;

