"use client";

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
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    car_info: string;
    booking_date: string;
    booking_time: string;
    booking_status: "pending" | "confirmed" | "completed" | "cancelled";
    booking_notes: string;
}


export default function NewAppointment() {
    const supabase = createClient();
    const { register, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [carInfo, setCarInfo] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [message, setMessage] = useState("");


    const onSubmit = async () => {
        setIsLoading(true);
    
        try {
            // Insert booking information into the "user_bookings" table
            const { data, error: bookingError } = await supabase
                .from("user_bookings")
                .insert([{ 
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phone,
                    email: email,
                    booking_date: date, 
                    booking_type: type, 
                    booking_time: time, 
                    car_info: carInfo, 
                    booking_status: "Pending",
                    booking_notes: message
                }]);
            
            if (bookingError) {
                throw new Error("Error inserting booking data");
            }
    
            alert("Appointment request submitted successfully!");
        } catch (error) {
            console.error("Error submitting appointment request:", error);
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
                    <Label htmlFor="firstName">First name</Label>
                    <Input {...register("firstName")} type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border border-gray-500" placeholder="Enter your first name" required/>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input {...register("lastName")} type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border border-gray-500"  placeholder="Enter your last name" required/>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input {...register("phone")} type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-gray-500" placeholder="Enter your phone number" required/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input {...register("email")} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-500" placeholder="Enter your email" required/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="carInfo">Vehicle Information</Label>
                <Input {...register("carInfo")} type="text" name="carInfo" value={carInfo} onChange={(e) => setCarInfo(e.target.value)} className="border border-gray-500" placeholder="Enter your vehicle's make, model, and year" required/>
            </div>

            <div className="space-y-2 space-x-4">
                <Label htmlFor="type">Booking type</Label>
                <select {...register("type")} name="type" value={type} onChange={(e) => setType(e.target.value)} className="border border-gray-500" required>
                    <option value="Diagnostic">Diagnostic</option>
                    <option value="Repair">Repair</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Painting">Painting</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="date">Preferred appointment date</Label>
                <Input {...register("date")} type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className="border border-gray-500" required/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input {...register("time")} type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} className="border border-gray-500" min="08:00" max="19:00" required/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Issue description</Label>
                <Textarea
                    className="min-h-[100px] border border-gray-500 max-h-[150px]"
                    {...register("message")}
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter a description of the issue with your vehicle, as well details about the vehicle"
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
  )
}