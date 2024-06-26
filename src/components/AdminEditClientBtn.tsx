'use client'

import { redirectToPath } from '@/app/utils/auth-helpers/server';
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
import { createClient } from "@supabase/supabase-js"
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

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const service_role_key = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!

const supabaseAdmin = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const adminAuthClient = supabaseAdmin.auth.admin
  


type User = {
  id: string
  email: string
  first_name: string
  last_name: string
  phone_number: string
}


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
          <Button type="button" onClick={() => {
            editClient()
            refreshTable()
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



