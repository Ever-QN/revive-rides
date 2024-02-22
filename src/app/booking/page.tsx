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
            <div style={buttonStyle}>Book an Appointment</div>
          </Link>
          <Link href="/booking/edit" passHref>
            <div style={buttonStyle}>Edit Booking</div>
          </Link>
          <Link href="/booking/quote" passHref>
            <div style={buttonStyle}>Request a Quote</div>
          </Link>
        </div>
      </main>
    </>
  );
};

// Style for the main buttons remains the same
const buttonStyle = {
  backgroundColor: '#E10600',
  color: 'white',
  padding: '1em 2em',
  border: 'none',
  borderRadius: '25px',
  fontWeight: 'bold',
  fontSize: '1em',
  textDecoration: 'none',
  display: 'inline-block',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  cursor: 'pointer',
};

export default BookingPage;
