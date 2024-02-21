/* eslint-disable @next/next/no-img-element */
/**
 * @see https://v0.dev/t/Dterm7GA3RV
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, Popover } from "@/components/ui/popover"

export default function GlobalHeader() {
  return (
    <header className="flex items-center justify-between w-full p-6 border-b">
      <Link className="flex items-center space-x-2" href="#">
        <img alt="S&D Autobody Logo" className="h-12 w-48" src="../images/logo2.png" />
      </Link>
      <nav className="hidden md:flex items-center space-x-4 mr-16">
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="#">
          Home
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="#">
          Services
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="#">
          Reviews
        </Link>
        <Link className="font-medium hover:text-blue-500 dark:hover:text-blue-500" href="#">
          Contact
        </Link>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <Button size="sm" variant="outline">
          Book Online
        </Button>
      </div>
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild />
        </Popover>
      </div>
    </header>
  )
}

