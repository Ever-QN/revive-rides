'use client';

import Link from 'next/link';
import { useState } from 'react';
import './GlobalHeader.css';

export default function GlobalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
    <header className='bg-gray-900 text-white p-4 relative'>
      <div className='container flex justify-between items-center'>
        <Link href='/'>
          <img
            src='/images/logo.png'  // Update the path to your actual logo
            alt='S&D Autobody Logo'
            className='logo'
            style={{ width: '100px', height: '25px'}}
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className='lg:hidden text-xl highlight hover:text-gray-300 cursor-pointer'
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>

        {/* Overlay for Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black opacity-100 z-50'
            onClick={toggleMobileMenu}
          />
        )}

        {/* Navigation Menu */}
        <nav
          className={`lg:flex space-x-4 gap-4 z-50 bg-gray-900 ${
            isMobileMenuOpen ? 'flex flex-col' : 'hidden'
          }`}
        >
            <Link href='/'>
                <div className='nav-item'>Home</div>
            </Link>
            <Link href='/about'>
                <div className='nav-item'>About Us</div>
            </Link>
            <Link href='/services'>
                <div className='nav-item'>Services</div>
            </Link>
            <Link href='/reviews'>
                <div className='nav-item'>Review us online</div>
            </Link>
            <Link href='/contact'>
                <div className='nav-item'>Contact us</div>
            </Link>

            <Link href='/booking'>
                <div className='nav-item'>Book an Appointment</div>
            </Link>
        </nav>
      </div>
    </header>
  );
}
