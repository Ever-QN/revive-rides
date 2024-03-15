'use client'

import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useForm } from "react-hook-form";

export default function NewAppointment() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async () => {
    setIsLoading(true);
    // Perform submit logic here
    setIsLoading(false);
    };
    
  return (
    <div className="relative flex items-center justify-center bg-gray-300 py-12 h-screen pt-24 z-0">
      <div className="absolute inset-0">
        <Image
          src="/images/new-appointment-bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4]"
        />
      </div>
      <div className="pt-8 z-10">
        <Card className="w-full max-w-3xl">
        <CardHeader>
            <CardTitle className="text-2xl text-center">Schedule an appointment</CardTitle>
            <CardDescription className="text-center">Enter your information below to request an appointment.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 border-col">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" className="border border-gray-500" placeholder="Enter your first name" required/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" className="border border-gray-500"  placeholder="Enter your last name" required/>
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" className="border border-gray-500" placeholder="Enter your phone number" required/>
            </div>
                <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" className="border border-gray-500" placeholder="Enter your email" type="email" required/>
            </div>
                <div className="space-y-2">
                <Label htmlFor="date">Preferred appointment date</Label>
                <Input id="date" className="border border-gray-500"  type="date" required/>
                </div>
            <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" className="border border-gray-500" type="time" min="08:00" max="19:00" required/>
            </div>
                <div className="space-y-2">
                <Label htmlFor="message">Issue description</Label>
                <Textarea
                    className="min-h-[100px] border border-gray-500 max-h-[150px]"
                    id="message"
                    placeholder="Enter a description of the issue with your vehicle, as well details about the vehicle"
                />
            </div>
        </CardContent>
        <CardFooter className="flex justify-end">
            <Button>Submit</Button>
        </CardFooter>
        </Card>

      </div>
    </div>
    
  )
}

