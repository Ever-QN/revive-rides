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

type Booking = {
    booking_id: string;
    car_info: string;
    booking_date: string;
    booking_time: string;
    booking_status: "pending" | "confirmed" | "completed" | "cancelled";
    booking_notes: string;
}

type User = {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
}

export default function NewAppointment() {
    const supabase = createClient();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [carInfo, setCarInfo] = useState("");
    const [bookingType, setBookingType] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [message, setMessage] = useState("");
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async () => {
        setIsLoading(true);
    
        try {
        //    const { data: userData, error: userError } = await supabase
        //        .from('users')
        //        .insert([{ email, first_name: firstName, last_name: lastName, phone_number: phone }]);
    
        //    if (userError) {
        //        throw new Error("Error creating user");
        //    }
    
            const { data: bookingData, error: bookingError } = await supabase
                .from('user_bookings')
                .insert([{ 
                    booking_date: date, 
                    booking_type: bookingType, 
                    booking_time: time, 
                    car_info: carInfo, 
                    booking_status: "Pending",
                    email: email,
                    booking_notes: message
                }]);
    
            if (bookingError) {
                throw new Error("Error creating booking");
            }
    
            reset();
            alert("Appointment request submitted successfully!");
        } catch (error) {
            console.error("Error creating user or booking:", error);
            alert("Failed to submit appointment request. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="relative flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl">
        <CardHeader>
            <CardTitle className="text-2xl text-center">Schedule an appointment</CardTitle>
            <CardDescription className="text-center">Enter your information below to request an appointment.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 border-col">
                    <Label htmlFor="first-name">First name</Label>
                    <Input value={firstName} id="first-name" onChange={(e) => setFirstName(e.target.value)} className="border border-gray-500" placeholder="Enter your first name" required/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input value={lastName} id="last-name" onChange={(e) => setLastName(e.target.value)} className="border border-gray-500"  placeholder="Enter your last name" required/>
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input value={phone} id="phone" onChange={(e) => setPhone(e.target.value)} className="border border-gray-500" placeholder="Enter your phone number" required/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input value={email} id="email" onChange={(e) => setEmail(e.target.value)} className="border border-gray-500" placeholder="Enter your email" type="email" required/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="car-info">Vehicle information</Label>
                <Input value={carInfo} id="car-info" onChange={(e) => setCarInfo(e.target.value)} className="border border-gray-500" placeholder="Enter your vehicle's make, model, and year" required/>
            </div>
            <div className="space-y-2 space-x-4">
                <Label htmlFor="booking-type">Booking type</Label>
                <select  value={bookingType} id="booking-type"  onChange={(e) => setBookingType(e.target.value)} className="border border-gray-500" required>
                    <option value="diagnostic">Diagnostic</option>
                    <option value="repair">Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="painting">Painting</option>
                    <option value="other">Other</option>
                </select>

            </div>
            <div className="space-y-2">
                <Label htmlFor="date">Preferred appointment date</Label>
                <Input value={date} id="date" onChange={(e) => setDate(e.target.value)} className="border border-gray-500"  type="date" required/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input value={time} id="time"  onChange={(e) => setTime(e.target.value)} className="border border-gray-500" type="time" min="08:00" max="19:00" required/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Issue description</Label>
                <Textarea
                    className="min-h-[100px] border border-gray-500 max-h-[150px]"
                    value={message}
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter a description of the issue with your vehicle, as well details about the vehicle"
                />
            </div>
        </CardContent>
        <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit(onSubmit)} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
        </Button>
        </CardFooter>
        </Card>
    </div>
    
  )
}