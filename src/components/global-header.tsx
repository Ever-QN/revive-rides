/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, Popover, PopoverContent } from "@/components/ui/popover"

export default function GlobalHeader() {

  return (
    <header className="flex items-center justify-between w-full p-6 overflow fixed bg-primary text-primary-foreground z-50">
      <Link className="flex items-center space-x-2" href="/home">
        <img alt="S&D Autobody Logo" className="h-12 w-48 hover:scale-110 active:scale-125 hover:duration-200" src="../images/logo2.png" />
      </Link>

      <nav className="hidden lg:flex md:flex items-center space-x-12">
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/home">
          Home
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/services">
          Services
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/reviews">
          Reviews
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/booking">
          Book Online
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/contact">
          Contact Us
        </Link>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/login">
          <Button className='bg-primary' size="lg" variant="outline">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button className='bg-primary' size="lg" variant="outline">
            Sign Up
          </Button>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="default" className='hover:bg-slate-700'>
              <img alt="Menu" className="w-6 h-6" src="../svg/hamburger.svg" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-screen overflow-scroll overflow-x-hidden">
            <div>
              <div className="flex flex-col space-y-2 p-2">
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
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

