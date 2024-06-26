"use client";

import React, { useEffect, useState } from "react"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useForm } from "react-hook-form";
import { createClient } from "@/app/utils/supabase/client"
import { useToast } from "@/components/ui/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SelectGroup, SelectLabel } from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { redirectToPath } from "@/app/utils/auth-helpers/server";

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

type User = {
    email: string;
    phone: string;
}

export default function NewAppointment() {

    const supabase = createClient();
    const { register, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [carInfo, setCarInfo] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = React.useState<Date | undefined>();
    const [time, setTime] = useState("");
    const [details, setDetails] = useState("");

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();

    const router = useRouter();
    const { toast } = useToast();

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
    
      useEffect(() => {
        async function fetchUser() {
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                const { data: userData, error } = await supabase
                    .from("users")
                    .select("email, phone_number")
                    .eq("id", user.id)
                    .single();
        
                if (userData) {
                    setEmail(userData.email);
                    setPhone(userData.phone_number);
                }
            }
        }
        fetchUser();

    }, []);

    const onSubmit = async () => {
        setIsLoading(true);
    
        try {
            
        const validateName = (name: string | undefined, field: string) => {
            if (!name || name.trim().length === 0) {
                toast({
                    title: 'Error',
                    description: `${field} is required.`,
                    variant: 'destructive'
                });
                return false;
            } else if (name.trim().length > 20) {
                toast({
                    title: 'Error',
                    description: `${field} must be 20 characters or less.`,
                    variant: 'destructive'
                });
                return false;
            } else if (!/^[A-Za-z\s\-']+$/u.test(name)) {
                toast({
                    title: 'Error',
                    description: `${field} must only contain alphabetic characters, spaces, hyphens, and apostrophes.`,
                    variant: 'destructive'
                });
                return false;
            }
            return true;
        };
            // Validate first name
            if (!validateName(firstName, 'First Name')) {
                setIsLoading(false);
                return;
            }

            // Validate last name
            if (!validateName(lastName, 'Last Name')) {
                setIsLoading(false);
                return;
            }
            

            // Define date before proceeding
            if (!date) {
                throw new Error("Please select a date for the appointment.");
            }

            // Convert time to HH:mm format for comparison
            const formattedTime = time.slice(0, 5);

            // Calculate time range for overlapping appointments (2 hours before and after the new appointment)
            const startTime = new Date(date);
            startTime.setHours(Number(time.slice(0, 2)) - 2, Number(time.slice(3))); // 2 hours before the new appointment
            const formattedStartTime = `${startTime.getHours().toString().padStart(2, '0')}:${startTime.getMinutes().toString().padStart(2, '0')}`;

            const endTime = new Date(date);
            endTime.setHours(Number(time.slice(0, 2)) + 2, Number(time.slice(3))); // 2 hours after the new appointment
            const formattedEndTime = `${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;

            const { data: existingBooking, error: existingBookingError } = await supabase
            .from("user_bookings")
            .select("booking_time")
            .eq("booking_date", date.toISOString().slice(0, 10)) // Convert date to ISO string for comparison
            .lte("booking_time", formattedEndTime) // Check if existing appointment ends before the new appointment starts
            .gte("booking_time", formattedStartTime) // Check if existing appointment starts after calculated start time
            .neq("booking_status", "Cancelled"); // Exclude cancelled appointments

            if (existingBookingError) {
                throw existingBookingError;
            }

            if (existingBooking.length > 0) {
                const existingAppointments = existingBooking.map(booking => {
                    // Split the time string into hours and minutes
                    const [hours, minutes] = booking.booking_time.split(':');

                    // Construct a new date object with today's date and the provided time
                    const bookingTime = new Date();
                    bookingTime.setHours(hours, 10);
                    bookingTime.setMinutes(minutes, 10);

                    return bookingTime.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
                }).join(", ");

                toast({
                    title: "OVERLAPPING APPOINTMENT SCHEDULED", 
                    description: `Overlapping appointment at (${existingAppointments}). Please select a different time slot within 2 hours of the existing appointment`,
                    variant: "destructive",
                });
                return;
            }

            // Insert booking information into the "user_bookings" table
            const { data: newBooking, error: newBookingError } = await supabase
                .from("user_bookings")
                .insert([{
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phone,
                    email: email.toLowerCase(),
                    booking_date: date,
                    booking_type: type,
                    booking_time: time,
                    car_info: carInfo,
                    booking_status: "Pending",
                    booking_details: details
                }]);
    
                if (newBookingError) {
                    toast({
                      title: "ERROR",
                      description: newBookingError.message,
                      variant: "destructive"
                    })
                    return;
                }

                toast ({
                    title: "APPOINTMENT SUCCESSFULLY SCHEDULED",
                    description: "Your appointment request has been submitted. We will contact you shortly to confirm your appointment.",
                    className: "bg-green-500 text-white",
                });
                redirectToPath('/book-appointment/new-appointment/confirm');
                reset();
            } catch (error) {
                toast({
                    title: "ERROR",
                    description: "Failed to submit appointment request. Please try again later.",
                    variant: "destructive"
                });
            } finally {
                setIsLoading(false);
            }
        };

    return (
        <div className="relative flex flex-col items-center justify-center p-4">
            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Schedule an Appointment</CardTitle>
                    <CardDescription className="text-center">
                        Enter your information below to request an appointment.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-center">
                    <div className="md:grid grid-cols-2 gap-8">
                        <div className="space-y-2 pb-2 md:pb-4">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input {...register("firstName")} type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border border-gray-500" placeholder="Enter your first name" required/>
                        </div>

                        <div className="space-y-2 pb-2 md:pb-4">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input {...register("lastName")} type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border border-gray-500"  placeholder="Enter your last name" required/>
                        </div>
                    </div>

                    <div className="space-y-2 pb-2 md:pb-4">
                        <Label htmlFor="phone">Phone</Label>
                        <Input {...register("phone")} type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-gray-500" placeholder="Enter your phone number" required/>
                    </div>

                    <div className="space-y-2 pb-2 md:pb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input {...register("email")} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-500" placeholder="Enter your email" required/>
                    </div>

                    <div className="space-y-2 pb-2 md:pb-4">
                        <Label htmlFor="carInfo">Vehicle Information</Label>
                        <Input {...register("carInfo")} type="text" name="carInfo" value={carInfo} onChange={(e) => setCarInfo(e.target.value)} className="border border-gray-500" placeholder="Year, make and model (i.e 2007 Honda Civic)" required/>
                    </div>

                    <div className="space-y-2 pb-2 md:pb-6">
                        <Label htmlFor="type">Service Type</Label>
                        <Select onValueChange={(value) => setType(value)}>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Select a service type"></SelectValue>
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Service Type</SelectLabel>
                                    <SelectItem value="Auto Body Repair">Auto Body Repair</SelectItem>
                                    <SelectItem value="Paintless Dent Repair">Paintless Dent Repair</SelectItem>
                                    <SelectItem value="Auto Detailing">Auto Detailing</SelectItem>
                                    <SelectItem value="Frame Straightening">Frame Straightening</SelectItem>
                                    <SelectItem value="Graphics and Decals">Graphics and Decals</SelectItem>
                                    <SelectItem value="Custom Paint Jobs">Custom Paint Jobs</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <Popover>
                        <Label htmlFor="date" className="md:pb-3">Preferred Appointment Date</Label>
                        <PopoverTrigger asChild className="w-[200px]">
                            <Button variant={"outline"} className={cn("w-[200px] pl-3 text-left font-normal", !date && "text-muted-foreground")}>
                                {date ? (date.toLocaleDateString(undefined, { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }) ) : ( <span className="font-normal">Pick a date</span>)}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-70" />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar 
                                mode="single" 
                                selected={date} 
                                onSelect={setDate} 
                                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6} 
                                initialFocus/>
                        </PopoverContent>
                    </Popover>

                    <div className="space-y-2 pb-2 md:pb-4 mt-4">
                        <Label htmlFor="time">Time (Shop hours are between 10:00AM - 6:00PM)</Label>
                        <Input {...register("time")} type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} className="border border-gray-500" min="10:00" max="18:00" required/>
                    </div>

                    <div className="space-y-2 pb-2 md:pb-4">
                        <Label htmlFor="details">Booking Details</Label>
                        <Textarea
                            className="min-h-[100px] border border-gray-500 max-h-[150px]"
                            {...register("details")}
                            value={details}
                            name="details"
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder="Enter a description of the issue with your vehicle, as well as any notes about the vehicle"
                            required
                        />
                    </div>

                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={onSubmit} disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}