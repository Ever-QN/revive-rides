'use client'

import React, { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, Popover, PopoverContent } from "@/components/ui/popover"
import Image from 'next/image'
import { createClient } from '@/app/utils/supabase/client';
import { usePathname, useRouter } from 'next/navigation';
import { handleRequest } from '@/app/utils/auth-helpers/client'
import { SignOut, redirectToPath } from '@/app/utils/auth-helpers/server';
import UserDropdown from './UserDropdown'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, Package2, Home, ShoppingCart, Badge, Package, SeparatorHorizontal } from 'lucide-react'
import { Separator } from './ui/separator'


export default function Navlinks({ user } : any) {

  const supabase = createClient();

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
                <UserDropdown user={user}/>
            ) : ( 
              <Link href="/sign-in" className='shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear hover:scale-110 active:scale-125 hover:duration-200'>
                Login or Sign-Up
              </Link>
            )}

          </nav>
      </div>
        
      <div className="lg:hidden flex items-center">
      <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="default"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="flex flex-col">
              {user && (
                <div className='flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 border border-b-2'>Signed in as {user.email}</div>
              )}
              <nav className="grid gap-2 text-lg font-medium">
                <SheetClose asChild>
                  <Link
                    href="/home"
                    className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                  >
                    Home
                  </Link>
                </SheetClose>
                {user && (
                  <SheetClose asChild>
                    <Link
                    className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                    href="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </SheetClose>
                )}
                <SheetClose asChild>
                  <Link
                    href="/gallery"
                    className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                  >
                    Gallery
                  </Link>
                </SheetClose>
                {user && (
                  <SheetClose asChild>
                    <Link
                    href="#"
                    className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                    Settings
                    </Link>
                  </SheetClose>
                )}

                {user ? (
                <SheetClose asChild>
                    <Button
                    className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                    variant="secondary"
                    size="icon"
                    onClick={ async () => {
                      await supabase.auth.signOut();
                      redirectToPath("/home")
                        }
                      }
                    >
                    Sign Out
                  </Button>
                </SheetClose>
              ) : (
                <SheetClose asChild>
                  <Link
                  className="flex items-center space-x-2 font-medium rounded-md bg-gray-100 dark:bg-gray-800 transform transition duration-400 active:text-red-500 hover:text-blue-500 dark:hover:text-blue-500"
                    href={"/sign-in"}
                  >
                  Sign in or Sign up
                  </Link>
                </SheetClose>
              )}
              </nav>
            </SheetContent>
          </Sheet>

      </div>
    </div>
  )
}
