'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import * as z from 'zod';
import { useForm  } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createClient } from "../utils/supabase/client"
import { permanentRedirect, redirect, useRouter }  from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { title } from "process"
import { redirectToPath } from "../utils/auth-helpers/server"


export default function SignIn() {

  const { toast }  = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  useEffect(() => {
    async function checkUser() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        redirectToPath("/");
          toast({
              title: "You are already logged in!",
              description: "No need to login again. Redirecting to home page.",
              variant: "destructive"
          })
      }
    }
    checkUser()
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  async function handleSubmit () {
    const formData = form.getValues();
    const supabase = createClient();
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      })
      setIsLoading(false);
    } else {
      toast({
        title: "Success!",
        description: "Succesfully logged in. Redirecting to dashboard.",
        className: "bg-green-500 text-white",
    })
      redirectToPath("/dashboard")
    }
  }


  return (

    <div className="flex flex-col justify-center items-center p-8 h-screen">
      <Card className="w-full max-w-sm mx-auto border-2 border-black p-8">
        <CardHeader>
            <CardTitle className="text-xl text-center">S&D Autobody Sign In</CardTitle>
            <CardDescription className="text-center">
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
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link className="underline text-red-600" href="/sign-up">
                    Sign up
                </Link>
            </div>
            <div className="text-center text-sm">
                Forgot your password?{" "}
                <Link className="underline text-red-600" href="/forgot-password">
                    Reset Password
                </Link>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
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