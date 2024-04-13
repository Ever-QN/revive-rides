"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { createClient } from '@supabase/supabase-js';
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL!, NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const formSchema: any = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(3, "Password must be at least 8 characters"),
    confirmPassword: z.string()
}).refine((data) => {
    return data.password === data.confirmPassword;
}, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

type User = {
    id: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;
}

export default function SignUp() {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    const { toast } = useToast();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber: "",
        },
    });

    async function handleSubmit() {
        
        const formData = form.getValues();

        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                emailRedirectTo: window.location.origin,
                data: {
                    email: formData.email,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    phone_number: formData.phoneNumber
                },
            }
        });


        if (error) {
            console.log(error)
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive"
              })
        }
        else if (data) {
            setSuccessMessage("Account created successfully! Please check your inbox to verify your account! If nothing is in your inbox, check your junk folder!");
            setIsSubmitted(true);
            {toast({
                title: "Success!",
                description: successMessage,
                className: "bg-green-500",
            })}
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 h-screen">
            {!isSubmitted ? (
                
                <Card className="flex flex-col justify-center items-center w-full max-w-sm mx-auto border-2 border-black p-8">
                    <CardHeader>
                        <CardTitle className="text-xl">S&D Autobody Sign Up</CardTitle>
                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form 
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="max-w-md w-full flex flex-col gap-4"
                            >
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                        <FormField control={form.control} name="firstName" render={({field}) => {
                                            return (
                                                <FormItem>
                                                    <FormLabel>First Name</FormLabel>
                                                    <FormControl>
                                                        <Input 
                                                            placeholder="John" 
                                                            type="text" 
                                                            {...field} 
                                                            
                                                            onChange={(e) => field.onChange(e.target.value)}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )
                                        }}
                                        />
                                        </div>
                                        <div className="grid gap-2">
                                            <FormField control={form.control} name="lastName" render={({field}) => {
                                                return (
                                                <FormItem>
                                                    <FormLabel>Last Name</FormLabel>
                                                    <FormControl>
                                                    <Input 
                                                    placeholder="Doe" 
                                                    type="text" 
                                                    {...field} 
                                                    onChange={(e) => field.onChange(e.target.value)}
                                                    />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                                )
                                            }}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="grid gap-2">
                                        <FormField control={form.control} name="email" render={({field}) => {
                                        return (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                            <Input 
                                            placeholder="Enter your email" 
                                            type="email" 
                                            {...field} 
                                            onChange={(e) => field.onChange(e.target.value)}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )
                                        }}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <FormField control={form.control} name="phoneNumber" render={({field}) => {
                                        return (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                            <Input 
                                            placeholder="Enter your phone number" 
                                            type="phoneNumber" 
                                            {...field} 
                                            onChange={(e) => field.onChange(e.target.value)}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )
                                        }}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <FormField control={form.control} name="password" render={({field}) => {
                                        return (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                            <Input 
                                            placeholder="Enter your password" 
                                            type="password" 
                                            {...field} 
                                            onChange={(e) => field.onChange(e.target.value)}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )
                                        }}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <FormField control={form.control} name="confirmPassword" render={({field}) => {
                                        return (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                            <Input 
                                            placeholder="Confirm your password" 
                                            type="password" 
                                            {...field} 
                                            onChange={(e) => field.onChange(e.target.value)}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )
                                        }}
                                        />
                                    </div>
                                </div>
                                
                            <Button type="submit" className="w-full" >Sign Up</Button>
                            {errorMessage && (
                                <div className="bg-red-500">
                                    <Toaster/>
                                </div>
                            )}
                            {successMessage && <div className="text-green-600">{successMessage}</div>}
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link className="underline text-red-600" href="/sign-in">
                                    Log in
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card> 
            ) : (
                <div className="flex items-center justify-center">
                    <div className="max-w-md text-center">
                        <h2 className="text-2xl font-semibold mb-4">Success!</h2>
                        <p className="text-green-600">{successMessage}</p>
                        <p className="mt-4">
                            You can login by clicking here:{" "}
                            <Link href="/sign-in" className="underline text-red-600">Log in</Link>
                        </p>
                    </div>
                </div>
            )}
            
        </div>
    
    );
}