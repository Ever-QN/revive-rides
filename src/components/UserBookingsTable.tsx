'use client'

import { redirectToPath } from '@/app/utils/auth-helpers/server';
import { createClient } from '@/app/utils/supabase/client';
import React, { useState, useRef, useEffect } from 'react';
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Label } from '@radix-ui/react-label';
import { Input } from 'postcss';

type Booking = {
    booking_id: string
    booking_type: string
    booking_date: string
    booking_time: string
    booking_status: "pending" | "confirmed" | "completed" | "cancelled"
    booking_details: string
    email: string
    car_info: string
  }

export default function UserBookingsTable({ user }: any) {

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [user]);

  async function fetchData() {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.error("User not found.");
      return;
    }

    const { data: bookings, error } = await supabase
      .from('user_bookings')
      .select('*')
      .eq('email', user.email);

    if (error) {
      console.error(error);
      return;
    }

      if (bookings) {
        setBookings(bookings);
        setLoading(false);
        console.log(bookings)
      }

  }

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

  function formatTime(timeString: string): string {
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const [hours, minutes] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.toLocaleTimeString('en-US', options);
  }
  

    return (
      <>
      {loading ? (
        <p className="flex justify-center font-bold">Loading Appointments...</p>
      ) : (  
      bookings.length === 0 ? (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no appointments
            </h3>
            <p className="text-sm text-muted-foreground">
              Book an appointment to get started
            </p>
            <Button className="mt-4">New Appointment</Button>
          </div>
        </div>
      ) : (
        <Card className='mt-4'>
          <CardHeader className="flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <CardTitle>
              Your Appointments
            </CardTitle>
            <CardDescription>
              Click on the appointment to view additional details.
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto">
            <Link href="/book-appointment">
              New Appointment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>

          </CardHeader>

          <CardContent>
            <Table className='flex flex-col'>
              <TableHeader className=''>
                <TableRow className='flex justify-between'>
                  <TableHead>Booking</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='flex flex-col'>
              {bookings.map((booking) => (
                  <Popover key={booking.booking_id}>
                  <PopoverTrigger>
                    <TableRow className='flex justify-between hover:bg-slate-200 cursor-pointer'>
                      <TableCell className='text-left'>
                        <div className="font-medium">{booking.booking_type} ({booking.car_info})</div>
                        <div className="text-sm text-muted-foreground md:inline">{formatDate(booking.booking_date)} @ {formatTime(booking.booking_time)}</div>  
                      </TableCell>
                      <TableCell className="text-right">{booking.booking_status}</TableCell>
                    </TableRow>
                  </PopoverTrigger>
                                    
                  <PopoverContent className="w-96">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">{booking.booking_type} ({booking.car_info})</h4>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(booking.booking_date)} @ {formatTime(booking.booking_time)}
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className='font-bold'>
                          Additional Details:
                        </div>
                        <p className="">
                          {booking.booking_details}
                        </p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                ))}

              </TableBody>

            </Table>

          </CardContent>
        </Card>
      ) )}
      </>
    )}