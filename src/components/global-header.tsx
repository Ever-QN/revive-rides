import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, Popover, PopoverContent } from "@/components/ui/popover"

export default function GlobalHeader() {

  return (
    <header className="flex items-center justify-between w-full p-6 overflow fixed bg-primary text-primary-foreground z-50 text-nowrap ">
      <Link className="flex items-center space-x-2" href="/home">
        <img alt="S&D Autobody Logo" className="h-12 w-48 md:min-h-12 md:min-w-48 hover:scale-110 active:scale-125 hover:duration-200" src="/images/header-logo.png" />
      </Link>

      <nav className="hidden lg:flex text-nowrap ml-40 items-center space-x-8">
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
      </nav>
      <div className="hidden lg:flex items-center space-x-4 ">
        <Link href="/login-or-sign-up" className='text-white font-semibold transform hover:-translate-y-1 transition duration-400 active:-translate-y-3 hover:text-blue-500 dark:hover:text-blue-500'>
            Login or Sign Up
        </Link>
        <Link href="/book-appointment" className='max-w-64 inline-flex h-12 hover:animate-shimmer items-center justify-center rounded-full border border-red-400 bg-[linear-gradient(110deg,#FF0000,45%,#8B0000,55%,#FF0000)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors hover:border-slate-500 active:scale-110 hover:scale-105 transition-transform duration-800 '>
            Book an Appointment →
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
    </header>
  )
}

