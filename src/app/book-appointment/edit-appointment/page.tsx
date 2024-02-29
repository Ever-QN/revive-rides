import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function EditAppointment() {
  return (
    <div className="relative flex items-center justify-center bg-gray-300 py-12 pt-24 z-0 h-screen -mb-16">
        <div className="absolute inset-0">
        <Image
          src="/images/edit-appointment-bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4]"
        />
      </div>
        <Card className="flex flex-col justify-center border-2 border-black scale-125">
        <CardHeader>
            <CardTitle>Enter Appointment ID</CardTitle>
            <CardDescription>Please enter your appointment ID to proceed to editing it.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center space-y-4">
            <form className="w-full space-y-4">
            <Input placeholder="Enter appointment ID" type="text" />
            <Button className="w-full">Proceed</Button>
            </form>
        </CardContent>
        </Card>
    </div>

  )
}

