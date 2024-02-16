import { NextPage } from "next";
import React from "react";

const ServicePage: NextPage = () => {
    return (
        <main style={{
            backgroundColor: '#0f172a',
            minHeight: '100vh',
        }}>
            <section style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
            }}>
                <div style={{
                    textTransform: 'uppercase',
                    fontSize: '5vw',
                    fontWeight: 800,
                    color: 'white',
                    paddingTop: '6rem'
                }}>
                    <h1>Our services</h1>
                </div>

            </section>

            <section style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    textTransform: 'uppercase',
                    fontSize: '1.5vw',
                    textAlign: 'center',
                    color: 'white',
                    display: 'flex',
                    paddingBottom: '3rem'
                    }}>
                    <div style={{
                        alignItems: 'center',
                        width: '33.333%' 
                    }}>
                        <img src="/images/services/services1.png" alt="Icon 1" style={{ 
                            alignItems: 'center',
                            height: '9rem',
                            width: '9rem'
                        }} />
                        <h2>Complimentary Repair Estimates</h2>
                    </div>

                    <div style={{ 
                        alignItems: 'center',
                        width: '33.333%'
                    }}>
                        <img src="/images/services/services2.png" alt="Icon 2" style={{ 
                            height: '9rem',
                            width: '9rem'
                        }} />
                        <h2>Windshield & Glass Repair</h2>
                    </div>

                    <div style={{ 
                        alignItems: 'center',
                        width: '33.333%'
                        }}>
                        <img src="/images/services/services3.png" alt="Icon 3" style={{ 
                            height: '9rem',
                            width: '9rem'
                        }} />
                        <h2>Paint Refinishing</h2>
                    </div>
                </div>
                            
                <div style={{
                    textTransform: 'uppercase',
                    fontSize: '1.5vw',
                    textAlign: 'center',
                    color: 'white',
                    display: 'flex'
                }}>
                    <div style={{ 
                        marginRight: '3rem', 
                        textAlign: 'center',
                        alignItems: 'center',
                        width: '50%'
                    }}>
                        <img src="/images/services/services4.png" alt="Icon 4" style={{ 
                            height: '9rem',
                            width: '9rem'
                        }} />
                        <h2>Interior/Exterior Details</h2>
                    </div>

                    <div style={{ 
                        textAlign: 'center',
                        width: '50%'
                    }}>
                        <img src="/images/services/services5.png" alt="Icon 5" style={{
                            height: '9rem',
                            width: '9rem'
                        }} />
                        <h2>Dent Removal</h2>
                    </div>
                </div>  
                
            </section>
        </main>
    );
};

export default ServicePage;