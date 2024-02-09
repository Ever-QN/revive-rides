import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
      <section style={{
        position: 'relative',
        minHeight: "100vh",
        color: 'white',
        backgroundImage: `url(/images/background.png)`, //doesn't work, also need to replace image with the right one for home page
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        {/*title*/}
        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "50px",
          marginBottom: "20px",
          maxWidth: "65%"
        }}>
            <h1 style={{
              textTransform: "uppercase",
              fontSize: '5vw',
              fontWeight: 900,
              color: 'white',
              textAlign: "left",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginBottom: "5px"
            }}>S&D Autobody</h1>
            <h2 style={{
              textTransform: "uppercase",
              fontSize: '3vw',
              fontWeight: '700',
              color: "#dc2626",
              textAlign: "left",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginTop: "-20px",
              marginLeft: "0"
            }}>on the road to serve you</h2>
        </div>
        
        {/*background img*/}
        <div className="bg-image"></div>
        
        {/*booking button*/}
        <div style={{
          position: 'absolute',
          bottom: '110px',
          right: '120px'
        }}>
            <Link href="/booking">
                <button style={{
                  borderRadius: "9999px", 
                  padding: "10px 20px",
                  fontSize: "1.5rem",
                  backgroundColor: "#dc2626",
                  color: 'white',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center'
                }}>Let&apos;s book
                <svg style={{
                  transform: 'rotate(0deg)',
                  width: '0.8rem', 
                  height: '0.8rem',
                  marginLeft: '0.5rem'
                }} 
                aria-hidden='true'
                xmlns="http://www.w3.org/2000/svg"
                fill='none'
                viewBox='0 0 14 10'
                >
                  <path 
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'></path>
                </svg>
                </button>
            </Link>
        </div> 
    </section>
  );
};

export default HomePage;