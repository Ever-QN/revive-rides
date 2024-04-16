"use client";

import { Button } from "@/components/ui/button"
import {  CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import React, { useEffect, useState } from "react"
import { useToast } from '@/components/ui/use-toast';
import { createClient } from "@supabase/supabase-js"
import { set } from "date-fns";
import { redirectToPath } from "@/app/utils/auth-helpers/server";

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
  
export default function SettingsPage({ customer }: { customer: User }) {

    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    let [newFirstName, setNewFirstName] = useState(customer.first_name)
    let [newLastName, setNewLastName] = useState(customer.last_name)
    let [newEmail, setNewEmail] = useState(customer.email)
    let [newPhone, setNewPhone] = useState(customer.phone_number)
    const [originalUserData, setOriginalUserData] = useState(customer);

    useEffect(() => {
        async function fetchUser() {
            const { data: { user } } = await supabaseAdmin.auth.getUser();

            if (user) {
                const { data: userData, error } = await supabaseAdmin
                    .from("users")
                    .select("*")
                    .eq("id", user.id)
                    .single();

                if (userData) {
                    setNewFirstName(userData.first_name);
                    setNewLastName(userData.last_name);
                    setNewEmail(userData.email);
                    setNewPhone(userData.phone_number);
                    setOriginalUserData(userData);
                }
            }
        }
        fetchUser();
    }, [])

    async function updateUserInfo() {
        setLoading(true);
        const { error } = await adminAuthClient.updateUserById(
            customer.id,
            { 
            email: newEmail,
            }
        );
    
        const { data: user, error: error2 } = await supabaseAdmin
            .from('users')
            .update({
                phone_number: newPhone,
                first_name: newFirstName,
                last_name: newLastName
            })
            .eq('id', customer.id)
    
        if (!error && !error2) {
            toast({
                title: "USER INFORMATION UPDATED",
                description: "Your user information has been successfully updated.",
                className: "bg-green-500 text-white",
                variant: "default"
            });
        }
        setLoading(false);
    }

    const resetForm = () => {
        setNewFirstName(originalUserData.first_name);
        setNewLastName(originalUserData.last_name);
        setNewEmail(originalUserData.email);
        setNewPhone(originalUserData.phone_number);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full md:w-1/2">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Your Information</CardTitle>
                    <CardDescription className="text-center">Update your personal information here</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-center">
                    <div className="md:grid grid-cols-2 gap-8">
                        <div className="space-y-2 pb-2 md:pb-4">
                            <Label htmlFor="newFirstName">First Name</Label>
                            <Input type="text" name="newFirstName" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} className="border border-gray-500" required/>
                        </div>

                        <div className="space-y-2 pb-2 md:pb-4">
                            <Label htmlFor="newLastName">Last Name</Label>
                            <Input type="text" name="newLastName" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} className="border border-gray-500" required/>
                        </div>
                    </div>

                    <div className="space-y-2 pb-2 md:pb-4">
                        <Label htmlFor="newPhone">Phone</Label>
                        <Input type="text" name="newPhone" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} className="border border-gray-500" required/>
                    </div>

                    <div className="space-y-2 pb-2 md:pb-4">
                        <Label htmlFor="newEmail">Email</Label>
                        <Input type="text" name="newEmail" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className="border border-gray-500" required/>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="secondary" type="reset" onClick={resetForm}>Cancel</Button>
                    <Button type="submit" disabled={loading} onClick={() => {
                        updateUserInfo()
                        redirectToPath("/dashboard")
                        }}
                    >
                        {loading ? "Updating..." : "Update"}
                    </Button>
                </CardFooter>
            </div>
        </div>
    )
}