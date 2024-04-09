'use client';

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { createClient } from "@/app/utils/supabase/client"

export default function EditAppointment() {
  const supabase = createClient();
  const [appointmentID, setAppointmentID] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useForm();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [carInfo, setCarInfo] = useState("");
  const [message, setMessage] = useState("");
  const [isAppointmentIDEntered, setIsAppointmentIDEntered] = useState(false);

  const handleProceed = async () => {
    setIsLoading(true);
    try {
      if (!appointmentID.trim()) {
        console.log("Appointment ID is required");
        return;
      }
  
      const { data, error } = await supabase
        .from('user_bookings')
        .select("*")
        .eq("booking_id", appointmentID)
        .single();
  
      if (data) {

        // Update state with fetched data
        setDate(data.booking_date);
        setTime(data.booking_time);
        setType(data.booking_type);
        setEmail(data.email);
        setCarInfo(data.car_info);
        setMessage(data.booking_notes);

        // Set the state to indicate that the appointment ID has been entered and data has been fetched
        setIsAppointmentIDEntered(true);
        console.log("Appointment data:", data);
      } else {
        console.log("Appointment not found");

        // Reset form fields and state variables
        setDate("");
        setTime("");
        setType("");
        setEmail("");
        setCarInfo("");
        setMessage("");
        
        // Set the state to indicate that the appointment ID has not been entered or the data fetch failed
        setIsAppointmentIDEntered(false);
      }
    } catch (error) {
      console.log(error);
    }
  
    setIsLoading(false);
  };

  const handleUpdateAppointment = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_bookings')
        .update({
          booking_date: date,
          booking_time: time,
          booking_type: type,
          email: email,
          car_info: carInfo,
          booking_notes: message
        })
        .eq("booking_id", appointmentID);
      
      if (error) {
        console.log("Error updating appointment", error);
      } else {
        console.log("Appointment updated successfully");
      }

    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="relative flex items-center justify-center bg-gray-300 h-screen">
        {!isAppointmentIDEntered && (
          <Card className="flex flex-col justify-center border-2 border-black scale-125">
          <CardHeader>
              <CardTitle>Enter Appointment ID</CardTitle>
              <CardDescription>Please enter your appointment ID to proceed to editing it.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center space-y-4">
              <form className="w-full space-y-4">
                <Input placeholder="Enter appointment ID" type="text" value={appointmentID}/>
                <Button className="w-full" onClick={handleProceed} disabled={isLoading}>
                  {isLoading ? "Loading..." : "Proceed"}
                </Button>
              </form>
          </CardContent>
          </Card>
        )}

        {isAppointmentIDEntered && (
          <Card className="flex flex-col justify-center border-2 border-black scale-125 mt-8">
            <CardHeader>
              <CardTitle>Edit Appointment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input {...register("date")} type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Input {...register("time")} type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Input {...register("type")} type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input {...register("email")} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carInfo">Car Info</Label>
                  <Input {...register("carInfo")} type="text" name="carInfo" value={carInfo} onChange={(e) => setCarInfo(e.target.value)} />
                </div>

                <div className="space-y-2"> 
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                      className="min-h-[100px] border border-gray-500 max-h-[150px]"
                      {...register("message")}
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter a description of the issue that you want to update"
                  />
                </div>

            </CardContent>
            <CardContent className="flex justify-end">
              <Button onClick={handleUpdateAppointment} disabled={isLoading}>
                {isLoading ? "Updating..." : "Update"}
              </Button>
            </CardContent>
          </Card>
        )}
    </div>
  )
}