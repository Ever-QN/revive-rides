"use client";

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

export default function EditAppointment() {
  const [bookingId, setBookingId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
  const supabase = createClient();

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
    }
  };

<<<<<<< Updated upstream
  const onSubmit = async (formData: FormData) => {
    if (!loggedInUser || loggedInUser.email !== formData.email) {
      alert('Please enter valid Booking ID');
      return;
    }
  
    setIsLoading(true);
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
    setIsLoading(false);
  
    if (error) {
      alert('Failed to update appointment. Please try again later.');
      console.error('Error updating the booking:', error);
    } else {
      alert('Appointment updated successfully!');
      window.location.href = 'edit-appointment/confirm';
=======
  const onSubmit = async () => {
    setIsLoading(true);
  
    try {
      // Define date before proceeding
      if (!date) {
        throw new Error("Please select a date for the appointment.");
      }
  
      // Convert time to HH:mm format for comparison
      const formattedTime = time.slice(0, 5);
  
      // Calculate time range for overlapping appointments (2 hours before and after the selected time)
      const startTime = new Date(date);
      startTime.setHours(Number(time.slice(0, 2)) - 2, Number(time.slice(3))); // 2 hours before the selected time
      const formattedStartTime = startTime.toISOString().slice(11, 16); // Format as HH:mm string
  
      const endTime = new Date(date);
      endTime.setHours(Number(time.slice(0, 2)) + 2, Number(time.slice(3))); // 2 hours after the selected time
      const formattedEndTime = endTime.toISOString().slice(11, 16); // Format as HH:mm string
  
      // Check for overlapping appointments
      const { data: existingBooking, error: existingBookingError } = await supabase
        .from("user_bookings")
        .select("booking_time")
        .eq("booking_date", date.toISOString().slice(0, 10)) // Convert date to ISO string for comparison
        .lte("booking_time", formattedEndTime) // Check if existing appointment ends before the new appointment starts
        .gte("booking_time", formattedStartTime) // Check if existing appointment starts after calculated start time
        .neq("booking_status", "Cancelled") // Exclude cancelled appointments
        .neq("booking_id", bookingId); // Exclude the current appointment being edited
  
      if (existingBookingError) {
        throw existingBookingError;
      }
  
      if (existingBooking.length > 0) {
        // Handle overlapping appointments
        const existingAppointments = existingBooking.map(booking => {
          const [hours, minutes] = booking.booking_time.split(':');
          const bookingTime = new Date(date);
          bookingTime.setHours(Number(hours), Number(minutes));
          return bookingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }).join(", ");
  
        throw new Error(`There is already an appointment scheduled at ${existingAppointments} for ${date.toDateString()}. Please select a different time.`);
      }
  
      // Update booking information into the user_bookings table
      const { data: updatedBooking, error: updateError } = await supabase
        .from('user_bookings')
        .update({
          first_name: firstName,
          last_name: lastName,
          phone_number: phone,
          email: email.toLowerCase(),
          car_info: carInfo,
          booking_date: date.toISOString().slice(0, 10),
          booking_time: formattedTime,
          booking_details: details
        })
        .eq('booking_id', bookingId);
  
      if (updateError) {
        throw updateError;
      }
  
      // Show success message
      toast({
        title: "SUCCESS",
        description: "Appointment updated successfully.",
        variant: "default"
      });
  
      // Redirect to confirmation page
      window.location.href = 'edit-appointment/confirm';
    } catch (error: any) {
      // Handle errors
      toast({
        title: "ERROR",
        description: (error as Error).message || "Failed to update appointment. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
>>>>>>> Stashed changes
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
