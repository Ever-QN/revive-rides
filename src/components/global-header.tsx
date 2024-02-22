/* eslint-disable @next/next/no-img-element */
/**
 * @see https://v0.dev/t/Dterm7GA3RV
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, Popover, PopoverContent } from "@/components/ui/popover"

export default function GlobalHeader() {
  return (
    <header className="flex items-center justify-between w-full p-6 border-b">
      <Link className="flex items-center space-x-2" href="#">
        <img alt="S&D Autobody Logo" className="h-12 w-48" src="../images/logo2.png" />
      </Link>

      <nav className="hidden lg:flex md:flex items-center space-x-4 mr-16">
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/home">
          Home
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/services">
          Services
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/reviews">
          Reviews
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="/contact">
          Contact
        </Link>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/booking">
          <Button size="lg" variant="outline">
            Book Online
          </Button>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="ghost" className="bg-slate-400">
              <img alt="Menu" className="w-6 h-6" src="../svg/hamburger.svg" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-48">
            <div>
              <div className="flex flex-col space-y-2 p-2">
                <Link
                  className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                  href="#"
                >
                  <img alt="Home" className="w-4 h-4" src="/placeholder.svg" />
                  Home
                </Link>
                <Link
                  className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                  href="#"
                >
                  <img alt="Features" className="w-4 h-4" src="/placeholder.svg" />
                  Features
                </Link>
                <Link
                  className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                  href="#"
                >
                  <img alt="Pricing" className="w-4 h-4" src="/placeholder.svg" />
                  Pricing
                </Link>
                <Link
                  className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                  href="#"
                >
                  <img alt="Team" className="w-4 h-4" src="/placeholder.svg" />
                  Team
                </Link>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

