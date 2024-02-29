"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Image from "next/image"
import Link from "next/link"

export default function Login() {
  return (
    <div className="relative flex items-center justify-center bg-gray-500 py-12 h-screen -mb-16">
      <div className="absolute inset-0">
        <Image
          src="/images/fixedtruck.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4]"
        />
      </div>
        <div className="mx-auto w-full space-y-6 lg:px-12 rounded-[22px] max-w-xl p-4 sm:p-10 bg-white dark:bg-zinc-900 z-10 border-2 border-black">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Email</Label>
              <Input id="username" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link className="ml-auto text-sm underline" href="/forgot-password">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="Enter your password"/>
            </div>
            <Button className="w-full">Login</Button>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">
              <ChromeIcon className="h-6 w-6" />
            </Button>
            <Button variant="outline">
              <AppleIcon className="h-6 w-6" />
            </Button>
            <Button variant="outline">
              <FacebookIcon className="h-6 w-6" />
            </Button>
          </div>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link className="underline text-red-600" href="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
    </div>
    
  )
}

function AppleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}