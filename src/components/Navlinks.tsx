'use client'

import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, Popover, PopoverContent } from "@/components/ui/popover"
import Image from 'next/image'
import { getRedirectMethod } from '@/app/utils/auth-helpers/settings'
import { usePathname, useRouter } from 'next/navigation';
import { handleRequest } from '@/app/utils/auth-helpers/client'
import { SignOut } from '@/app/utils/auth-helpers/server';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="relative flex flex-row py-4 align-center md:py-6">
      <div className="flex justify-between items-center flex-1">
          <Link href="/home">
            <Image alt="S&D Autobody Logo" width={48} height={48} unoptimized={true} className="h-12 w-48 md:min-h-12 md:min-w-48 hover:scale-110 active:scale-125 hover:duration-200" src="/images/header-logo.png" />
          </Link>
          <nav className="hidden lg:flex justify-evenly text-nowrap items-center space-x-8">
            <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/home">
              Home
            </Link>
            <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/home#about">
              About Us
            </Link>
            <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/home#services">
              Services
            </Link>
            <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/gallery">
              Gallery
            </Link>
            <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/home#contact">
              Contact Us
            </Link>
            {user ? (
                <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>First Last</div>
                  <div className="font-medium truncate">{user.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
                  <input type="hidden" name="pathName" value={usePathname()} />
                    <button type="submit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            ) : ( 
              <Link href="/signin" className='shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear hover:scale-110 active:scale-125 hover:duration-200'>
                Login or Sign-Up
              </Link>
            )}

          </nav>
      </div>
        
      <div className="lg:hidden flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="default" className='hover:bg-slate-700'>
              <img alt="Menu" className="w-6 h-6" src="../svg/hamburger.svg" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-screen overflow-x-hidden">
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                href="/home"
              >
                Home
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                href="/home#about"
              >
                About Us
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                href="/home#services"
              >
                Services
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                href="/gallery"
              >
                Gallery
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                href="/home#contact"
              >
                Contact Us
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                href="/login-or-sign-up"
              >
                Login or Sign Up
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                href="/book-appointment"
              >
                Book Online
              </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

