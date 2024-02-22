"use client"
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link'; 

const BookingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>S&D Autobody New Appointment</title>
      </Head>
      <main style={{
        backgroundImage: 'url(/images/bookingpage_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        minHeight: 'calc(100vh)', // Adjust the minHeight if needed since the header is removed. 'calc(100vh - 30px)'
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0',
        margin: '0',
      }}>
        <h1 style={{
          fontSize: '4em',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          margin: '0.5em 0',
        }}>
          Book Your Visit at S&D Autobody
        </h1>
        <div style={{
          display: 'flex',
          gap: '1em',
          marginTop: '2em',
        }}>
          <Link href="/booking/appointment" passHref>
            <p className="button">Book an Appointment</p>
          </Link>
          <Link href="/booking/edit" passHref>
            <p className="button">Edit Booking</p>
          </Link>
          <Link href="/booking/quote" passHref>
            <p className="button">Request a Quote</p>
          </Link>
        </div>
      </main>
      <style jsx>{`
        .button {
          background-color: #E10600;
          color: white;
          padding: 1em 2em;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          font-size: 1em;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          transition: text-decoration 0.3s;
        }
        
        .button:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default BookingPage;
