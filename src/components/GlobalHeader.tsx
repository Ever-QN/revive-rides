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
    
    <header className='bg-gray-900 text-white p-2 border-b-2 border-zinc-800 relative'>
      <div className='container flex justify-between items-center'>
        <Link href='/'>
          <img
            src='/images/logo.png'  // We need to update this path to our actual logo
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
            className='fixed top-0 left-0 w-full h-full bg-black opacity-100 z-50 p-4 flex items-center justify-center'
            onClick={toggleMobileMenu}
            
          />
        )}

        {/* Navigation Menu */}
        <nav
          className={`lg:flex space-x-4 gap-4 z-50 items-center ${
            isMobileMenuOpen ? 'flex flex-col w-full' : 'hidden'
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
                <div className='nav-item'>Reviews </div>
            </Link>
            <Link href='/contact'>
                <div className='nav-item'>Contact Us</div>
            </Link>

            <Link href='/booking'>
                <div className='nav-item bg-red-500 rounded-full py-2 px-4'>Book an Appointment</div>
            </Link>
        </nav>
      </div>
    </header>
  );
}
