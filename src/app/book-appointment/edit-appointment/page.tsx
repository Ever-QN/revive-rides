"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createClient } from '@/app/utils/supabase/client';
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { User } from '@supabase/supabase-js';
import { CalendarIcon } from "lucide-react";
import { Calendar } from '@/components/ui/calendar';
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { SelectGroup, SelectLabel } from "@radix-ui/react-select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from '@/components/ui/use-toast';
import { redirectToPath } from '@/app/utils/auth-helpers/server';

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

export default function EditAppointment() {

  const supabase = createClient();
  const { register } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [bookingId, setBookingId] = useState("");
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

  const { reset } = useForm();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Fetch the logged-in user's details
    const fetchUser = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.auth.getUser();
      setIsLoading(false);

      if (error) {
        toast({
          title: "ERROR",
          description: "Failed fetching user information. Please try again later.",
          variant: "destructive"
        });
      } else {
        setLoggedInUser(data.user);
      }
    };

    fetchUser();
  }, []);

  const fetchBookingDetails = async (bookingId: string) => {
    setIsLoading(true);

    const { data: bookingDetails, error: bookingDetailsError } = await supabase
      .from('user_bookings')
      .select('*')
      .eq('booking_id', bookingId)
      .single();
   
    setIsLoading(false);

    if (bookingDetailsError) {
      toast({
        title: "INVALID BOOKING ID",
        description: "Please enter a valid booking ID. Try again.",
        variant: "destructive"
      });

    } else if (bookingDetails) {
      if (loggedInUser && bookingDetails.email !== loggedInUser.email) {
        router.push("/sign-in");
        toast({
          title: "ERROR",
          description: "You must be signed in to edit an appointment",
          variant: "destructive"
          })
        return;
      }

      // Update the state with fetched booking details
      setFirstName(bookingDetails.first_name);
      setLastName(bookingDetails.last_name);
      setEmail(bookingDetails.email);
      setPhone(bookingDetails.phone_number);
      setCarInfo(bookingDetails.car_info);
      setType(bookingDetails.booking_type);
      setDate(new Date(bookingDetails.booking_date));
      setTime(bookingDetails.booking_time);
      setDetails(bookingDetails.booking_details);
    }
  };

  const onSubmit = async () => {
    setIsLoading(true);
  
    try {
      // Define date before proceeding
      if (!date) {
        throw new Error("Please select a date for the appointment.");
      }
  
      const selectedTime = new Date();
      selectedTime.setHours(Number(time.slice(0, 2)), Number(time.slice(3))); // Set the selected time
  
      const selectedHour = selectedTime.getHours();
      const selectedMinute = selectedTime.getMinutes();
  
      if (selectedHour <= 9 || selectedHour >= 19 || (selectedHour === 18 && selectedMinute > 0)) {
        toast({
          title: "WORKSHOP CLOSED",
          description: "Accepted Booking Hours: 10:00 AM - 6:00 PM. Please reselect a time slot within the working hours.",
          variant: "destructive"
        });
        return;
      }
  
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
          description: `Overlapping appointment at (${existingAppointments}). Please reselect a time slot within 2 hours of the existing appointment`,
          variant: "destructive",
        });
        return;
      }
  
      // Insert booking information into the "user_bookings" table
      const { data, error: newBookingError } = await supabase
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
  
      if (newBookingError) {
        throw newBookingError;
      }
  
      redirectToPath('/book-appointment/edit-appointment/confirm')
      toast({
        title: "APPOINTMENT SUCCESSFULLY SCHEDULED",
        description: "Your appointment request has been submitted. We will contact you shortly to confirm your appointment.",
        className: "bg-green-500 text-white",
        variant: "default"
      });
  
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
    <div className="relative flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Edit Appointment</CardTitle>
          <CardDescription className="text-center">Update your appointment details below.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter your booking ID"
            type="text"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
          />
          <Button onClick={() => fetchBookingDetails(bookingId)} disabled={!bookingId || isLoading}>
            Fetch Booking
          </Button>
          <div className="md:grid grid-cols-2 gap-8">
            <div className="space-y-2 pb-2 md:pb-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input {...register("firstName")} type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border border-gray-500" placeholder="Enter your first name" required/>
            </div>

            <div className="space-y-2 pb-2 md:pb-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input {...register("lastName")} type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border border-gray-500"  placeholder="Enter your last name" required/>
            </div>
          </div>

          <div className="space-y-2 pb-2 md:pb-2">
            <Label htmlFor="phone">Phone</Label>
            <Input {...register("phone")} type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-gray-500" placeholder="Enter your phone number" required/>
          </div>

          <div className="space-y-2 pb-2 md:pb-2">
            <Label htmlFor="email">Email</Label>
            <Input {...register("email")} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-500" placeholder="Enter your email" required/>
          </div>

          <div className="space-y-2 pb-2 md:pb-2">
            <Label htmlFor="carInfo">Vehicle Information</Label>
            <Input {...register("carInfo")} type="text" name="carInfo" value={carInfo} onChange={(e) => setCarInfo(e.target.value)} className="border border-gray-500" placeholder="Year, make and model (i.e 2007 Honda Civic)" required/>
          </div>

          <div className="space-y-2 pb-2 md:pb-6">
            <Label htmlFor="type">Service Type</Label>
            <Select onValueChange={(value) => setType(value)}>
              <SelectTrigger className="w-[200px]">
                <span>{type || "Select a service type"}</span>
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
            <Label htmlFor="date">Preferred Appointment Date</Label>
            <div>
              <PopoverTrigger asChild className="w-[200px]">
                <Button variant={"outline"} className={cn("w-[200px] pl-3 text-left font-normal", !date && "text-muted-foreground")}>
                  {date ? (date.toLocaleDateString(undefined, { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }) ) : ( <span className="font-normal">Pick a date</span>)}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-70" />
                </Button>
              </PopoverTrigger>
            </div>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={setDate} 
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6} 
                  initialFocus/>
              </PopoverContent>
          </Popover>

          <div className="space-y-2 pb-2 md:pb-2 mt-4">
            <Label htmlFor="time">Time (Shop hours are between 10:00AM - 6:00PM)</Label>
            <Input {...register("time")} type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} className="border border-gray-500" min="10:00" max="18:00" required/>
          </div>

          <div className="space-y-2 pb-2 md:pb-2">
            <Label htmlFor="details">Booking Details</Label>
            <Textarea
              className="min-h-[100px] border border-gray-500 max-h-[150px]"
              {...register("details")}
              value={details}
              name="details"
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Update a description of the issue with your vehicle, as well as any notes about the vehicle"
              required
            />
          </div>

        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={onSubmit} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
