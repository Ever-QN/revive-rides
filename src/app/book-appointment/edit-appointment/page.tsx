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
  const supabase = createClient();
  const [bookingId, setBookingId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

  const fetchBookingDetails = async (bookingId: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_bookings')
        .select('*')
        .eq('booking_id', bookingId)
        .single();
  
      if (error) throw error;
  
      if (data) {
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
    } catch (error) {
      console.error('Error fetching booking details:', error);
      alert('Error fetching booking details.');
    } finally {
      setIsLoading(false);
    }
  };
  

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const { error } = await supabase
      .from('user_bookings')
      .update({
        first_name: data.firstName,     // Assuming the column name in Supabase is 'first_name'
        last_name: data.lastName,       // Assuming the column name in Supabase is 'last_name'
        phone_number: data.phone,          // The correct column name is 'phone_num', as per your table screenshot
        email: data.email,              // Column name is 'email' in Supabase
        car_info: data.carInfo,         // Column name is 'car_info' in Supabase
        booking_type: data.bookingType, // Column name is 'booking_type' in Supabase
        booking_date: data.date,        // Column name is 'booking_date' in Supabase
        booking_time: data.time,        // Column name is 'booking_time' in Supabase
        booking_notes: data.message,    // Column name is 'booking_notes' in Supabase
      })
      .eq('booking_id', bookingId);
  
    if (error) {
      console.error("Error updating the booking:", error);
      alert("Failed to update appointment. Please try again later.");
    } else {
      alert("Appointment updated successfully!");
    }
  
    setIsLoading(false);
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
