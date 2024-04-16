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
import { Input } from './ui/input';
import AdminDeleteClientBtn from './AdminDeleteClientBtn';
import { createClient as CreateAdminClient } from "@supabase/supabase-js"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Edit } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { Label } from './ui/label';


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
  const supabase = createClient();

  useEffect(() => {

    fetchData();

  }, []);

  async function fetchData() {

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
  
  async function refreshTable() {
    setLoading(true);
    await fetchData();
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
              Existing Clients
            </CardTitle>
            <CardDescription>
              A list of existing clients who have an account with S&D Autobody in the database.
            </CardDescription>
          </div>

          <Button onClick={refreshTable} size="sm" className="ml-auto">
            <RotateCw size={20} />
          </Button>

          </CardHeader>

          <CardContent>
          <Table className='flex flex-col h-screen'>
              <TableHeader className=''>
                <TableRow className='flex justify-between'>
                  <TableHead>Client</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='flex flex-col'>
              {customers.map((customer) => (
                    <TableRow key={customer.id} className='flex justify-between'>
                      <TableCell className='text-left'>
                        <div className="font-medium">{customer.first_name} {customer.last_name} | ({customer.email}, {customer.phone_number})</div>
                        <div className='text-sm text-muted-foreground md:inline'>
                          {customer.id}
                        </div>
                      </TableCell>
                      <TableCell className="flex flex-row text-right p-0 md:p-2">
                        <div className='flex flex-col md:flex-row'>
                          <AdminEditClientBtn customer={customer} refreshTable={refreshTable} />
                          <AdminDeleteClientBtn customer={customer} />
                        </div>
                        </TableCell>
                    </TableRow>
                    
                ))}

              </TableBody>

            </Table>
          </CardContent>
        </Card>
      ) )}
      </>
    )}

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const service_role_key = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!

const supabaseAdmin = CreateAdminClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const adminAuthClient = supabaseAdmin.auth.admin
  

export function AdminEditClientBtn({ customer, refreshTable }: { customer: User; refreshTable: () => Promise<void>; }) {

  const { toast } = useToast();
  let [newEmail, setNewEmail] = useState(customer.email)
  let [newPhone, setNewPhone] = useState(customer.phone_number)
  let [newName, setNewName] = useState(customer.first_name)
  let [newSurname, setNewSurname] = useState(customer.last_name)
  
  async function editClient() {
    const { error} = await adminAuthClient.updateUserById(
      customer.id,
      { 
        email: newEmail,
      }
    )

    const { data: user, error: error2 } = await supabaseAdmin
    .from('users')
    .update({
      phone_number: newPhone,
      first_name: newName,
      last_name: newSurname
    })
    .eq('id', customer.id)

    if (!error && !error2) {
      toast({
        title: "Successfully edited client!",
        description: `The client has been edited successfully.`,
        className: "bg-green-500 text-white",
      
      })
    }

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
      return;
    }

    if (error2) {
      toast({
        title: "Error",
        description: error2.message,
        variant: "destructive",
      })
      return;
    }
  }

  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline"><Edit className="w-4 h-4"/></Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to this client&apos;s profile here
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value={newName} className="col-span-3" placeholder="John" onChange={(e) => setNewName(e.target.value)} required/>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Surname
          </Label>
          <Input id="username" value={newSurname} className="col-span-3" placeholder="Doe" onChange={(e) => setNewSurname(e.target.value)} required/>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Email
          </Label>
          <Input id="username" value={newEmail} className="col-span-3" placeholder="email@email.com" type="email" onChange={(e) => setNewEmail(e.target.value)} required/>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Phone
          </Label>
          <Input id="username" value={newPhone} className="col-span-3" minLength={10} maxLength={10} type='tel' placeholder="1234567890" onChange={(e) => setNewPhone(e.target.value)} required/>
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit" onClick={() => {
            editClient()
            refreshTable()
            }}
          >
            Save changes
            </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
      
  )
}




