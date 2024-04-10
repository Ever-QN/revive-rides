'use client';

import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useForm } from "react-hook-form";
import { createClient } from "@/app/utils/supabase/client";


// Define the structure of the form data based on your form and Supabase schema
type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    carInfo: string;
    bookingType: string;
    date: string;
    time: string;
    message: string;
    id: string;
};

export default function NewAppointment() {
    const supabase = createClient();
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<FormData>();
  
    const onSubmit = async (formData: FormData) => {
      try {
        // The column names here should match your Supabase "users" table
        const { error: userError } = await supabase.from('users').insert([
          {
            id: formData.id,    
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone_number: formData.phone, // Ensure this column exists in your table
          },
        ]);
  
        if (userError) throw new Error(userError.message);
  
        // Convert 12-hour time format to 24-hour format if necessary
        const time24hr = formData.time; // If your input gives you a 24-hour format, use it directly
  
        // The column names here should match your Supabase "user_bookings" table
        const { error: bookingError } = await supabase.from('user_bookings').insert([
          {
            car_info: formData.carInfo,
            booking_date: formData.date,
            booking_time: time24hr,
            booking_type: formData.bookingType,
            booking_status: 'pending', // Assuming 'pending' is the default status
            email: formData.email,
            booking_notes: formData.message,
          },
        ]);
  
        if (bookingError) throw new Error(bookingError.message);
  
        reset(); // Clear the form
        alert('Appointment request submitted successfully!');
      } catch (error) {
        alert('Failed to submit appointment request. Please try again later.');
        console.error('Error:', error);
      }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex items-center justify-center p-4">
            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Schedule an Appointment</CardTitle>
                    <CardDescription className="text-center">Enter your information below to request an appointment.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input {...register('firstName')} id="first-name" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input {...register('lastName')} id="last-name" placeholder="Enter your last name" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input {...register('phone')} id="phone" placeholder="Enter your phone number" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input {...register('email')} id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="car-info">Vehicle Information</Label>
                        <Input {...register('carInfo')} id="car-info" placeholder="Enter your vehicle's make, model, and year" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="booking-type">Booking Type</Label>
                        <select {...register('bookingType')} id="booking-type" required>
                            <option value="diagnostic">Diagnostic</option>
                            <option value="repair">Repair</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="painting">Painting</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="date">Preferred Appointment Date</Label>
                        <Input {...register('date')} id="date" type="date" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Input {...register('time')} id="time" type="time" min="08:00" max="19:00" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Issue Description</Label>
                        <Textarea {...register('message')} id="message" placeholder="Enter a description of the issue with your vehicle" required />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button type="submit" disabled={isSubmitting}>Submit</Button>
                </CardFooter>
            </Card>
        </form>
    );
}
