import React from "react";
import { NextPage } from "next";

const InfoPage: NextPage = () => {
  return (
    <main style={{
        backgroundColor: 'white',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <section style={{
            width: '50%', 
            paddingLeft: '40px', 
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                marginBottom: '1rem'
            }}>
                <img src='/images/guy.png' alt='mechanic' />
            </div>
        </section>
        <section style={{
            width: '50%', 
            padding: '10px',
            alignItems: 'center'
        }}>
            <div style={{
                color: 'black',
                textAlign: 'left'
            }}>
                <h1 style={{
                    textTransform: 'uppercase',
                    fontSize: '3vw',
                    fontWeight: '700',
                    marginBottom: '1rem'
                }}>Why S&D Autobody?</h1>
                <h2 style={{
                    fontSize: '1.5vw',
                    fontWeight: '400'
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h2>
            </div>
        </section>
    </main>
  );
};

export default InfoPage;