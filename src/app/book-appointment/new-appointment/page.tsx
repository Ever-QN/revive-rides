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
                    booking_details: details
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
        <div className="relative flex flex-col items-center justify-center p-4">
            <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Schedule an appointment</CardTitle>
                <CardDescription className="text-center">
                    Enter your information below to request an appointment.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center">
                <div className="md:grid grid-cols-2 gap-8">
                    <div className="space-y-2 pb-2 md:pb-4">
                        <Label htmlFor="firstName">First name</Label>
                        <Input {...register("firstName")} type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border border-gray-500" placeholder="Enter your first name" required/>
                    </div>

                    <div className="space-y-2 pb-2 md:pb-4">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input {...register("lastName")} type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border border-gray-500"  placeholder="Enter your last name" required/>
                    </div>
                </div>

                <div className="space-y-2 pb-2 md:pb-4">
                    <Label htmlFor="phone">Phone</Label>
                    <Input {...register("phone")} type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-gray-500" placeholder="Enter your phone number" required/>
                </div>

                <div className="space-y-2 pb-2 md:pb-4">
                    <Label htmlFor="email">Email</Label>
                    <Input {...register("email")} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-500" placeholder="Enter your email" required/>
                </div>

                <div className="space-y-2 pb-2 md:pb-4">
                    <Label htmlFor="carInfo">Vehicle Information</Label>
                    <Input {...register("carInfo")} type="text" name="carInfo" value={carInfo} onChange={(e) => setCarInfo(e.target.value)} className="border border-gray-500" placeholder="Year, make and model (i.e 2007 Honda Civic)" required/>
                </div>

                <div className="space-y-2 space-x-4 pb-2 md:pb-4">
                    <Label htmlFor="type">Booking type</Label>
                    <select {...register("type")} name="type" value={type} onChange={(e) => setType(e.target.value)} className="border border-gray-500" required>
                        <option value="Auto Body Repair">Auto Body Repair</option>
                        <option value="Paintless Dent Repair">Paintless Dent Repair</option>
                        <option value="Auto Detailing">Auto Detailing</option>
                        <option value="Frame Straightening">Frame Straightening</option>
                        <option value="Graphics and Decals">Graphics and Decals</option>
                        <option value="Graphics and Decals">Custom Paint Jobs</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="space-y-2 pb-2 md:pb-4">
                    <Label htmlFor="date">Preferred appointment date</Label>
                    <Input {...register("date")} type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className="border border-gray-500" required/>
                </div>

                <div className="space-y-2 pb-2 md:pb-4">
                    <Label htmlFor="time">Time</Label>
                    <Input {...register("time")} type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} className="border border-gray-500" min="10:00" max="18:00" required/>
                </div>

                <div className="space-y-2 pb-2 md:pb-4">
                    <Label htmlFor="details">Booking details</Label>
                    <Textarea
                        className="min-h-[100px] border border-gray-500 max-h-[150px]"
                        {...register("details")}
                        value={details}
                        name="message"
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
  )
}