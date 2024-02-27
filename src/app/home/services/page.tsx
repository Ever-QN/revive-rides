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
                        <div style={{
                            margin: 'auto',
                            height: '12rem',
                            width: '12rem'
                        }}>
                            <img src="/images/services/service1.png" alt="Service 1" style={{ 
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain'
                            }}/>
                        </div>
                        <h2>Complimentary Repair Estimates</h2>
                    </div>

                    <div style={{ 
                        alignItems: 'center',
                        width: '33.333%'
                    }}>
                        <div style={{
                            margin: 'auto',
                            height: '12rem',
                            width: '12rem'
                        }}>
                            <img src="/images/services/service2.png" alt="Service 2" style={{ 
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain'
                            }} />
                        </div>
                        <h2>Windshield & Glass Repair</h2>
                    </div>

                    <div style={{ 
                        alignItems: 'center',
                        width: '33.333%'
                    }}>
                        <div style={{
                            margin: 'auto',
                            height: '12rem',
                            width: '12rem'
                        }}>
                            <img src="/images/services/service3.png" alt="Service 3" style={{ 
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain'
                            }} />
                        </div>
                        <h2>Paint Refinishing</h2>
                    </div>
                </div>
                            
                <div style={{
                    textTransform: 'uppercase',
                    fontSize: '1.5vw',
                    textAlign: 'center',
                    color: 'white',
                    display: 'flex',
                    paddingBottom: '3rem'
                }}>
                    <div style={{ 
                        marginRight: '3rem', 
                        textAlign: 'center',
                        width: '50%'
                    }}>
                        <div style={{
                            margin: 'auto',
                            height: '12rem',
                            width: '12rem'
                        }}>
                            <img src="/images/services/service4.png" alt="Service 4" style={{ 
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain'
                            }}/>
                        </div>
                        <h2>Interior/Exterior Details</h2>
                    </div>

                    <div style={{ 
                        textAlign: 'center',
                        width: '50%'
                    }}>
                        <div style={{
                            margin: 'auto',
                            height: '12rem',
                            width: '12rem'
                        }}>
                            <img src="/images/services/service5.png" alt="Service 5" style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain'
                            }} />
                        </div>
                        <h2>Dent Removal</h2>
                    </div>
                </div>      
            </section>
        </main>
    );
};

export default ServicePage;