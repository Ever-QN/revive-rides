"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createClient } from '@/app/utils/supabase/client';
import { CardHeader } from '@/components/ui/card';
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SubmitHandler } from 'react-hook-form';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [carInfo, setCarInfo] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, formState: { errors } } = useForm();

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
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setPhone(data.phone);
        setCarInfo(data.car_info);
        setBookingType(data.booking_type);
        setDate(data.booking_date);
        setTime(data.booking_time);
        setMessage(data.booking_notes);
      }
    } catch (error) {
      console.error('Error fetching booking details:', error);
      alert('Error fetching booking details.');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    
    try {
      const { error: userError } = await supabase
        .from('users')
        .update({ 
          first_name: data.firstName, 
          last_name: data.lastName, 
          phone: data.phone 
        })
        .eq('email', data.email);
  
      if (userError) {
        throw new Error("Error updating user information");
      }
  
      const { error: bookingError } = await supabase
        .from('user_bookings')
        .update({ 
          booking_date: data.date, 
          booking_time: data.time, 
          booking_type: data.bookingType, 
          car_info: data.carInfo, 
          booking_notes: data.message
        })
        .eq('booking_id', bookingId);
  
      if (bookingError) {
        throw new Error("Error updating booking information");
      }
  
      alert("Appointment updated successfully!");
  
    } catch (error) {
      console.error("Error updating user or booking:", error);
      alert("Failed to update appointment. Please try again later.");
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
          {bookingId && (
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <select value={bookingType} id="booking-type" onChange={(e) => setBookingType(e.target.value)} className="border border-gray-500" required>
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
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
