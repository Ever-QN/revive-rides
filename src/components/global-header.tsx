/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, Popover, PopoverContent } from "@/components/ui/popover"

export default function GlobalHeader() {

  return (
    <header className="flex items-center justify-between w-full max-h-24 p-6 overflow fixed bg-primary text-primary-foreground z-50">
      <Link className="flex items-center space-x-2" href="/home">
        <img alt="S&D Autobody Logo" className="h-12 w-48 md:min-h-12 md:min-w-48 hover:scale-110 active:scale-125 hover:duration-200" src="/images/header-logo.png" />
      </Link>

      <nav className="hidden lg:flex text-nowrap ml-40 items-center space-x-8">
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/home">
          Home
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/services">
          About Us
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/reviews">
          Services
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/booking">
          Gallery
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500 transform hover:-translate-y-1 transition duration-400 active:-translate-y-3" href="/contact">
          Contact Us
        </Link>
      </nav>
      <div className="hidden lg:flex items-center space-x-4 ">
        <Link href="/login" className='text-white font-semibold transform hover:-translate-y-1 transition duration-400 active:-translate-y-3 hover:text-blue-500 dark:hover:text-blue-500'>
            Login or Sign Up
        </Link>
        <Link href="/booking" className='max-w-64 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:border-slate-500'>
            Book an Appointment
        </Link>
      </div>
      <div className="lg:hidden flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="default" className='hover:bg-slate-700'>
              <img alt="Menu" className="w-6 h-6" src="../svg/hamburger.svg" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-screen overflow-scroll overflow-x-hidden  bg-slate-900">
            <div className="flex flex-col space-y-2">
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                href="/home"
              >
                Home
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                href="/reviews"
              >
                Reviews
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                href="/booking"
              >
                Book Online
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                href="/contact"
              >
                Contact Us
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                href="/booking"
              >
                Login
              </Link>
              <Link
                className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                href="/booking"
              >
                Sign Up
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

