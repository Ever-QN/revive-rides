"use client";

<<<<<<< Updated upstream
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createClient } from '@/app/utils/supabase/client';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { User } from '@supabase/supabase-js';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  carInfo: string;
  bookingType: string;
  date: string;
  time: string;
  message: string;
  booking_id: string;
};
=======
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { createClient } from "@/app/utils/supabase/client"
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
>>>>>>> Stashed changes

export default function EditAppointment() {
  const [bookingId, setBookingId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
  const supabase = createClient();

<<<<<<< Updated upstream
  useEffect(() => {
    // Fetch the logged-in user's details
    const fetchUser = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.auth.getUser();
      setIsLoading(false);
      if (error) {
        alert('Error fetching user information. Please try again later.');
        console.error('Error fetching user information:', error);
      } else {
        setLoggedInUser(data.user);
      }
    };

    fetchUser();
  }, []);

  const fetchBookingDetails = async (bookingId: string) => {
=======
  const { toast } = useToast();
  const router = useRouter();

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

  const handleProceed = async () => {
>>>>>>> Stashed changes
    setIsLoading(true);
    const { data, error } = await supabase
      .from('user_bookings')
      .select('*')
      .eq('booking_id', bookingId)
      .single();
    setIsLoading(false);

    if (error) {
      alert('Please enter valid Booking ID');
      console.error('Please enter valid Booking ID', error);
    } else if (data) {
      if (loggedInUser && data.email !== loggedInUser.email) {
        alert('Please enter valid Booking ID');
        return;
      }
<<<<<<< Updated upstream
      // Set form values here
      setValue('firstName', data.first_name || '');
      setValue('lastName', data.last_name || '');
      setValue('phone', data.phone_number || ''); 
      setValue('email', data.email || '');
      setValue('carInfo', data.car_info || '');
      setValue('bookingType', data.booking_type || '');
      setValue('date', data.booking_date || '');
      setValue('time', data.booking_time || '');
      setValue('message', data.booking_notes || '');
=======

      // Calculate the start and end time of the appointment within a 2-hour window
      const selectedTime = new Date(`${date}T${time}`);
      const startTime = new Date(selectedTime.getTime() - 2 * 60 * 60 * 1000);
      const endTime = new Date(selectedTime.getTime() + 2 * 60 * 60 * 1000);

      // Check for existing overlapping appointments within the 2-hour window
      const { data:existingBooking, error: existingBookingError} = await supabase
          .from("user_bookings")
          .select("booking_time")
          .eq("booking_date", date)
          .gte("booking_time", startTime.toTimeString().slice(0, 5))
          .lte("booking_time", endTime.toTimeString().slice(0, 5));

      if (existingBooking && existingBooking.length > 0) {
          const existingBookingTime =existingBooking.map(booking => {
              // Split the time string into hours and minutes
              const [hours, minutes] = booking.booking_time.split(':');
              
              // Construct a new date object with today's date and the provided time
              const bookingTime = new Date();
              bookingTime.setHours(parseInt(hours, 10));
              bookingTime.setMinutes(parseInt(minutes, 10));

              return bookingTime.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
          }).join(", ");
          
          toast({
              title: "OVERLAPPING APPOINTMENT SCHEDULED", 
              description: `Please select a different time within 2 hours of this time (${existingBookingTime}).`,
              variant: "destructive",
          });
          return;
      }
  
      const { data, error } = await supabase
        .from('user_bookings')
        .select("*")
        .eq("booking_id", appointmentID)
        .single();
  
      if (data) {

        // Update state with fetched data
        setDate(data.booking_date);
        setTime(data.booking_time);
        setType(data.booking_type);
        setEmail(data.email);
        setCarInfo(data.car_info);
        setMessage(data.booking_notes);

        // Set the state to indicate that the appointment ID has been entered and data has been fetched
        setIsAppointmentIDEntered(true);
        console.log("Appointment data:", data);
      } else {
        console.log("Appointment not found");

        // Reset form fields and state variables
        setDate("");
        setTime("");
        setType("");
        setEmail("");
        setCarInfo("");
        setMessage("");
        
        // Set the state to indicate that the appointment ID has not been entered or the data fetch failed
        setIsAppointmentIDEntered(false);
      }
    } catch (error) {
      console.log(error);
>>>>>>> Stashed changes
    }
  };

  const onSubmit = async (formData: FormData) => {
    if (!loggedInUser || loggedInUser.email !== formData.email) {
      alert('Please enter valid Booking ID');
      return;
    }
  
    setIsLoading(true);
<<<<<<< Updated upstream
    const { error } = await supabase
      .from('user_bookings')
      .update({
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phone,
        email: formData.email,
        car_info: formData.carInfo,
        booking_type: formData.bookingType,
        booking_date: formData.date,
        booking_time: formData.time,
        booking_notes: formData.message,
      })
      .eq('booking_id', bookingId);
=======
    try {
      const { data, error } = await supabase
        .from('user_bookings')
        .update({
          booking_date: date,
          booking_time: time,
          booking_type: type,
          email: email,
          car_info: carInfo,
          booking_notes: message
        })
        .eq("booking_id", appointmentID);
      
      if (error) {
        console.log("Error updating appointment", error);
      } else {
        toast({
          title: "Success", 
          description: `Appointment Successfully Changed.`,
          className: "bg-green-500",
        });
      }

    } catch (error) {
      console.log(error);
    }

>>>>>>> Stashed changes
    setIsLoading(false);
  
    if (error) {
      alert('Failed to update appointment. Please try again later.');
      console.error('Error updating the booking:', error);
    } else {
      alert('Appointment updated successfully!');
      window.location.href = 'edit-appointment/confirm';
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input {...register('firstName')} id="first-name" className="border border-gray-500" required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input {...register('lastName')} id="last-name" className="border border-gray-500" required/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input {...register('phone')} id="phone" className="border border-gray-500" required/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input {...register('email')} id="email" className="border border-gray-500" type="email" required/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="car-info">Vehicle information</Label>
              <Input {...register('carInfo')} id="car-info" className="border border-gray-500" required/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="booking-type">Booking type</Label>
              <select {...register('bookingType')} id="booking-type" className="border border-gray-500" required>
                <option value="diagnostic">Diagnostic</option>
                <option value="repair">Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="painting">Painting</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Preferred appointment date</Label>
              <Input {...register('date')} id="date" className="border border-gray-500" type="date" required/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input {...register('time')} id="time" className="border border-gray-500" type="time" min="08:00" max="19:00" required/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Issue description</Label>
              <Textarea {...register('message')} id="message" className="border border-gray-500" required/>
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
