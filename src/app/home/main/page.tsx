"use client"
import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const MainPage: NextPage = () => {
  return (
      <section style={{
        position: 'relative',
        minHeight: "100vh",
        color: 'white',
        backgroundImage: 'url(/images/home_background.png)',
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
              marginBottom: "2px"
            }}>S&D Autobody</h1>
            <h2 style={{
              textTransform: "uppercase",
              fontSize: '3vw',
              fontWeight: '900',
              color: "#dc2626",
              textAlign: "left",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginTop: "-10px",
              marginLeft: "0"
            }}>on the road to serve you</h2>
        </div>
      
        {/*booking button*/}
        <div style={{
          position: 'absolute',
          bottom: '110px',
          right: '150px'
        }}>
            <Link href="/booking">
                <button className={'button-hover'}>Let&apos;s book
                <svg style={{
                  transform: 'rotate(0deg)',
                  width: '1rem', 
                  height: '1rem',
                  marginLeft: '0.5rem',
                  verticalAlign: 'middle'
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

            <style jsx>{`
              .button-hover {
                border-radius: 9999px; 
                padding: 0.8rem 1.6rem;
                font-size: 1.5rem;
                font-weight: 600;
                background-color: #dc2626;
                color: white;
                border: none;
                cursor: pointer;
                transition: background-color 0.2s ease;
                display: inline-flex;
                align-items: center;
                @media (max-width:768px) {
                  font-size: 1.2rem;
                  padding: 0.6rem 1.2rem;
                }
              }

              .button-hover:hover {
                background-color: #991b1b;
                color: #d1d5db;
              }
            `}</style>
        </div> 
    </section>
  );
};

export default MainPage;