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

type Booking = {
    booking_id: string
    booking_type: string
    booking_date: string
    booking_time: string
    booking_status: "pending" | "confirmed" | "completed" | "cancelled"
    email: string
    car_info: string
  }

export default function UserBookingsTable({ user }: any) {

  const [bookings, setBookings] = useState<Booking[]>([]);

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
      {bookings.length === 0 ? (
        <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        >
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
        <Card>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking</TableHead>
                  {/* <TableHead className="hidden xl:table-column">Type</TableHead>
                  <TableHead className="hidden xl:table-column">Status</TableHead>
                  <TableHead className="hidden xl:table-column">Date</TableHead> */}
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {bookings.map((booking) => (
                  <TableRow key={booking.booking_id} className='hover:bg-slate-200 cursor-pointer'>
                    <TableCell>
                      <div className="font-medium">{booking.booking_type} ({booking.car_info})</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">{formatDate(booking.booking_date)} @ {formatTime(booking.booking_time)}</div>
                    </TableCell>
                    {/* <TableCell className="hidden xl:table-column">{booking.type}</TableCell> */}
                    {/* <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        {booking.status}
                      </Badge>
                    </TableCell> */}
                    {/* <TableCell className="hidden md:table-cell lg:hidden xl:table-column">{booking.date}</TableCell> */}
                    <TableCell className="text-right">{booking.booking_status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) 
      }
      

      </>
      
      

    )}