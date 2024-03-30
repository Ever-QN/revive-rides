"use client"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema: any = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string()
}).refine((data) => {
    return data.password === data.confirmPassword;
}, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export default function SignUp() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleSubmit = () => {

    }

    return (
        
        <div className="flex items-center justify-center py-12 h-screen p-8">
            
            <div className="absolute inset-0">
                <Image
                    src="/images/login-bg.jpg"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-[0.4]"
                />
                <div className="z-50 mt-36">
                    <Card className="w-full max-w-md mx-auto border-2 border-black scale-110 p-8">
                        <div className="mx-auto w-full max-w-md space-y-6 lg:px-12">
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold">Sign Up</h1>
                                <p className="text-gray-500 dark:text-gray-400">Create a new account</p>
                            </div>
                            <Form {...form}>
                                <form 
                                onSubmit={form.handleSubmit(handleSubmit)}
                                className="max-w-md w-full flex flex-col gap-4"
                                >
                                    <FormField control={form.control} name="firstName" render={({field}) => {
                                        return (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                            <Input 
                                            placeholder="Enter your first name" 
                                            type="text" 
                                            {...field} 
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )
                                    }}
                                    />
                                    <FormField control={form.control} name="lastName" render={({field}) => {
                                        return (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                            <Input 
                                            placeholder="Enter your last name" 
                                            type="text" 
                                            {...field} 
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )
                                    }}
                                    />
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
                                    <FormField control={form.control} name="confirmPassword" render={({field}) => {
                                        return (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                            <Input 
                                            placeholder="Confirm your password" 
                                            type="password" 
                                            {...field} 
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )
                                        }}
                                    />
                                <Button type="submit" className="w-full" >Sign Up</Button>
                                <div className="text-center text-sm">
                                    Already have an account?{" "}
                                    <Link className="underline text-red-600" href="/login">
                                        Log in
                                    </Link>
                                </div>
                            </form>
                            </Form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}