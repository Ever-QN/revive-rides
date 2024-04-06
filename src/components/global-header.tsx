import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, Popover, PopoverContent } from "@/components/ui/popover"
import Image from 'next/image'
export default function GlobalHeader() {

  return (
    <header className="flex items-center justify-between w-full p-6 overflow bg-primary text-primary-foreground z-50 text-nowrap ">
      <Link className="flex items-center space-x-2" href="/home">
        <Image alt="S&D Autobody Logo" width={48} height={48} unoptimized={true} className="h-12 w-48 md:min-h-12 md:min-w-48 hover:scale-110 active:scale-125 hover:duration-200" src="/images/header-logo.png" />
      </Link>

      <nav className="hidden lg:flex text-nowrap items-center space-x-8">
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
        <Link href="/login" className='shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear hover:scale-110 active:scale-125 hover:duration-200'>
            Login or Sign-Up
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

