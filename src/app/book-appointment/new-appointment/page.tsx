"use client";

import { useEffect, useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useForm } from "react-hook-form";
import { createClient } from "@/app/utils/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Booking = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    car_info: string;
    booking_date: string;
    booking_time: string;
    booking_status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
    booking_details: string;
}

const formSchema = z.object({
    firstName: z.string().email(),
    lastName: z.string(),
    phoneNumber: z.string(),
    email: z.string(),
    carInfo: z.string(),
    bookingType: z.string(),
    bookingDate: z.string(),
    bookingTime: z.string(),
    bookingDetails: z.string()
});




export default function NewAppointment() {

    const router = useRouter();
    const { toast } = useToast();

    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function checkUser() {
            const { data: { user } } = await supabase.auth.getUser();
        
            if (!user) {
                router.push("/sign-in");
                toast({
                title: "Error",
                description: "You must be signed in to book new appointments",
                variant: "destructive"
                })
            }
            }
            checkUser()
      }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
            defaultValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            carInfo: "",
            bookingType: "",
            bookingDate: "",
            bookingTime: "",
            bookingDetails: ""
        }
      })


    const onSubmit = async () => {
        setIsLoading(true);
        const formData = form.getValues();
    
        try {
            // Insert booking information into the "user_bookings" table
            const { data, error: bookingError } = await supabase
                .from("user_bookings")
                .insert([{ 
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    phone_number: formData.phoneNumber,
                    email: formData.email,
                    booking_date: formData.bookingDate, 
                    booking_type: formData.bookingType, 
                    booking_time: formData.bookingTime, 
                    car_info: formData.carInfo, 
                    booking_status: "Pending",
                    booking_details: formData.bookingDetails
                }]);
            
                if (bookingError) {
                    toast({
                      title: "Error",
                      description: bookingError.message,
                      variant: "destructive"
                    })
                    return;
                }
        } catch (error) {
            console.error("Error submitting appointment request: ", error);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="relative flex items-center justify-center p-4 h-screen">
        <Card className="w-full max-w-3xl">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Schedule an appointment</CardTitle>
                <CardDescription className="text-center">Enter your information below to request an appointment.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
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
                    
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-end">

            </CardFooter>
        </Card>
    </div>
  )
}