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
import { toast, useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();

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
      toast({
        title: "Error",
        description: "Please enter a valid booking ID. Try again.",
        variant: "destructive"
        })
      console.error('Please enter valid Booking ID', error);
    } else if (data) {
      if (loggedInUser && data.email !== loggedInUser.email) {
        toast({
          title: "Error",
          description: "You must be signed in to edit an appointment",
          variant: "destructive"
          })
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

  const onSubmit = async (formData: FormData) => {
    if (!loggedInUser || loggedInUser.email !== formData.email) {
      toast({
        title: "Error",
        description: "Invalid booking ID. Try again",
        variant: "destructive"
        })
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
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
        })
      console.error('Error updating the booking:', error);
    } else {
      toast({
        title: "Success!",
        description: "Successfully updated the appointment.",
        className: "bg-green-500 text-white"
        })
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
                <option value="Auto Body Repair">Auto Body Repair</option>
                <option value="Paintless Dent Repair">Paintless Dent Repair</option>
                <option value="Auto Detailing">Auto Detailing</option>
                <option value="Frame Straightening">Frame Straightening</option>
                <option value="Graphics and Decals">Graphics and Decals</option>
                <option value="Custom Paint Jobs">Custom Paint Jobs</option>
                <option value="Other">Other</option>
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
