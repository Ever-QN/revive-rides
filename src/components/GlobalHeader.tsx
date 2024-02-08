'use client';

import Link from 'next/link';
import { useState } from 'react';

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
          className={`lg:flex space-x-4 gap-4 z-50 absolute w-full h-full bg-gray-900 ${
            isMobileMenuOpen ? 'flex flex-col' : 'hidden'
          }`}
        >
          <Link href='/'>
            <div className='hover:text-gray-300 cursor-pointer'>Home</div>
          </Link>
          <Link href='/about'>
            <div className='hover:text-gray-300 cursor-pointer'>About Us</div>
          </Link>
          <Link href='/services'>
            <div className='hover:text-gray-300 cursor-pointer'>Services</div>
          </Link>
          <Link href='/reviews'>
            <div className='hover:text-gray-300 cursor-pointer'>Review us online</div>
          </Link>
          <Link href='/contact'>
            <div className='hover:text-gray-300 cursor-pointer'>Contact us</div>
          </Link>

          <Link href='/booking'>
            <div className='hover:text-gray-300 cursor-pointer gap-4'>Book an Appointment</div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
