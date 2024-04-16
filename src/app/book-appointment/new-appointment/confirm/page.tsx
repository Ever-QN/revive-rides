"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function EditSuccess() {
  const handleDashboardRedirect = () => {
    window.location.href = '/dashboard'; // This will redirect the user to the dashboard.
  };

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center p-8">
          <CardTitle className="text-2xl mb-4">Appointment Successfully Booked</CardTitle>
          <CardDescription className="mb-6">Your appointment has been booked. Once your appointment is confirmed, the status will change from pending to confirmed.</CardDescription>
          <Button onClick={handleDashboardRedirect} className="mt-4">
            Go to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
