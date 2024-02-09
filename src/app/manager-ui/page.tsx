"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './style.css'

const LoginPage: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState(''); 

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Logging in with:' ${username} ${password}`);
    };

    return (
        <>
            <header className="header bg-color">
                <img src="/images/logo2.png" alt="Logo2" />
            </header>

            <main>
                <div style={{
                    backgroundImage: `url('/images/booking-page.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    color: 'white',
                    height: '87vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div className="w-1/3 h-3/4 bg-white bg-opacity-80 rounded-vl shadow">
                        <img src="/images/logo.png" alt="Logo" className="w-3/4 m-auto mb-4 pt-8 rotate-5" />
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-center items-center mb-8 text-black">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    placeholder="Name"
                                    className="w-80 h-16 px-6 py-3 border rounded-3xl text-lg bg-gray-300 libre-franklin"
                                />
                            </div>

                            <div className="flex justify-center items-center mb-5 text-black">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="******"
                                    className="w-80 h-16 px-6 pt-3 border rounded-3xl text-lg bg-gray-300 libre-franklin"
                                />
                            </div>

                            <div className="flex justify-center items-center">
                                <Link href="/manager-ui/manager-home">
                                    <div className="w-72 bg-black text-white px-3 py-3 rounded-lg text-s font-bold underline text-center">Log in</div>
                                </Link>
                            </div>

                            <ul className="text-s text-center text-gray-400 mt-2 dm-sans">Forget Password?</ul>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default LoginPage;

