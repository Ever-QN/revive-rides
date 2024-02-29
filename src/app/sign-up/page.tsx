"use client"

import { useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    // Perform signup logic here
    setIsLoading(false);
  };

  return (
    <div className="relative flex items-center justify-center bg-gray-300 py-12 h-screen -mb-16">
      <div className="absolute inset-0">
        <Image
          src="/images/dualbrokencars2.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4]"
        />
      </div>
      <div className="rounded-[22px] max-w-8xl mt-6 p-8 sm:p-10 bg-white dark:bg-zinc-900 z-10 border border-black">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-gray-500 dark:text-gray-400 pb-4">Create a new account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span className="text-red-500">First name is required</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <span className="text-red-500">Last name is required</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <span className="text-red-500">Confirm password is required</span>}
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
            <div className="flex justify-center space-x-4 p-4">
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
              Already have an account?{" "}
              <Link className="underline text-red-600" href="/login">
                Log in
              </Link>
            </div>
      </div>
    </div>
  );
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