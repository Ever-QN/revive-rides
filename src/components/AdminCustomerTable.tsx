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
import { RotateCw } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Label } from '@radix-ui/react-label';
import { Input } from 'postcss';
import { AdminPendingDropdown } from './AdminPendingDropdown';

type User = {
    id: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
  }

export default function AdminCustomerTable({ user }: any) {

  const [customers, setCustomers] = useState<User[]>([]);
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

    const { data: customers, error } = await supabase
      .from('users')
      .select('*')

    if (error) {
      console.error(error);
      return;
    }

      if (customers) {
        setCustomers(customers);
        setLoading(false);
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
        <p className="flex justify-center font-bold">Loading Client Database...</p>
      ) : (  
      customers.length === 0 ? (
        <div className="mt-4 flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-screen">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              No existing customers found.
            </h3>
            <p className="text-sm text-muted-foreground">
                There are no existing clients in the database.
            </p>
          </div>
        </div>
      ) : (
        <Card className='mt-4'>
          <CardHeader className="flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <CardTitle className=''>
              Existing Customers
            </CardTitle>
            <CardDescription>
              A list of existing customers in the database
            </CardDescription>
          </div>

          <Button size="sm" className="ml-auto">
            <RotateCw size={20} />
          </Button>

          </CardHeader>

          <CardContent>
          <Table className='flex flex-col'>
              <TableHeader className=''>
                <TableRow className='flex justify-between'>
                  <TableHead>Customer</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='flex flex-col'>
              {customers.map((customer) => (
                  <Popover key={customer.id}>
                  <PopoverTrigger>
                    <TableRow className='flex justify-between hover:bg-slate-200 cursor-pointer'>
                      <TableCell className='text-left'>
                        <div className="font-medium">{customer.first_name} {customer.last_name}</div>
                        <div className='text-sm text-muted-foreground md:inline'>{customer.email} | {customer.phone_number}</div>
                      </TableCell>
                      <TableCell className="text-right"><AdminPendingDropdown /></TableCell>
                    </TableRow>
                  </PopoverTrigger>
                                    
                  <PopoverContent className="w-96">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Account ID</h4>
                        <p className="text-sm text-muted-foreground">
                            {customer.id}
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className='font-bold'>
                          Additional Details:
                        </div>
                        <p className="">
                          test
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