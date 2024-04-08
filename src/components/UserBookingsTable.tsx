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

type Booking = {
    booking_id: string
    booking_type: string
    booking_date: string
    booking_time: string
    booking_status: "pending" | "processing" | "success" | "failed"
    email: string
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

    return (
      <Card>
      <CardHeader className="px-7">
        <CardTitle>Your Appointments</CardTitle>
        <CardDescription>A table of all your previous and upcoming appointments.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead className="hidden sm:table-cell">Booking Type</TableHead>
              <TableHead className="hidden sm:table-cell">Booking Time</TableHead>
              <TableHead className="hidden md:table-cell">Booking Date</TableHead>
              <TableHead className="text-right">Booking Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.booking_id}>
                <TableCell>
                    {booking.booking_id}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                    {booking.booking_type}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                    {booking.booking_time}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                    {booking.booking_date}
                </TableCell>
                <TableCell className="hidden sm:table-cell text-right">
                    {booking.booking_status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    )}