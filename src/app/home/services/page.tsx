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
                justifyContent: 'center'
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
                paddingTop: '2rem'
            }}>
                <div style={{
                    textTransform: 'uppercase',
                    fontSize: '1.5vw',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '3rem'
                    }}>
                    <div style={{ 
                        marginRight: '3rem', 
                        textAlign: 'center' 
                    }}>
                        <img src="/images/estimate_icon.png" alt="Icon 1" style={{ 
                            width: '5rem', 
                            marginBottom: '1rem' }} />
                        <h2>Complimentary Repair Estimates</h2>
                    </div>
                </div>

                    <div style={{ 
                        marginRight: '3rem', 
                        textAlign: 'center' 
                    }}>
                        <img src="/images/wgrepair_icon.png" alt="Icon 2" style={{ 
                            width: '5rem', 
                            marginBottom: '1rem' }} />
                        <h2>Windshield & Glass Repair</h2>
                    </div>

                    <div style={{ 
                        marginRight: '3rem', 
                        textAlign: 'center' 
                        }}>
                        <img src="/images/paint_icon.png" alt="Icon 3" style={{ 
                            width: '5rem', 
                            marginBottom: '1rem' }} />
                        <h2>Paint Refinishing</h2>
                    </div>

                    <div style={{
                    textTransform: 'uppercase',
                    fontSize: '1.5vw',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <div style={{ marginRight: '3rem', textAlign: 'center' }}>
                        <img src="/path/to/icon4.png" alt="Icon 4" style={{ width: '5rem', marginBottom: '1rem' }} />
                        <h2>Interior/Exterior Details</h2>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <img src="/path/to/icon5.png" alt="Icon 5" style={{ width: '5rem', marginBottom: '1rem' }} />
                        <h2>Dent Removal</h2>
                    </div>
                </div>
                    
                
            </section>
        </main>
    );
};

export default ServicePage;