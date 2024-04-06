"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { login, signup } from './actions'
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import * as z from 'zod';
import { useForm  } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createClient } from '@/app/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function SignIn() {

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({values})
  }


  return (

    <div className="p-8 h-screen">
      <Card className="w-full max-w-sm mx-auto border-2 border-black p-8">
        <CardHeader>
            <CardTitle className="text-xl">S&D Autobody Sign In</CardTitle>
            <CardDescription>
                Login to S&D Autobody to book an appointment
            </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField control={form.control} name="email" render={({field}) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                    placeholder="Enter your email" 
                    type="email" 
                    {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )
              }}
            />
            <FormField control={form.control} name="password" render={({field}) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                    placeholder="Enter your password" 
                    type="password" 
                    {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )
              }}
            />
            <Button type="submit" className="w-full mt-4" >Login</Button>
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
          </form>
        </Form>
      </Card>
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