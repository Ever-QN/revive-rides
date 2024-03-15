import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ForgotPassword() {
  return (
    <div className="relative flex items-center justify-center bg-gray-300 py-12 pt-24 z-0 h-screen -mb-16">
        <div className="absolute inset-0">
            <Image
            src="/images/forgot-password-bg.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="brightness-[0.4]"
            />
        </div>
        <div className="flex justify-center items-center h-screen z-10">
            <Card className="flex flex-col w-full max-w-md mx-auto border-2 border-black scale-125">
                <CardHeader className="text-center space-y-1">
                    <CardTitle>Forgot Password</CardTitle>
                    <CardDescription>Enter your email below to reset your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="m@example.com" required type="email" className="border border-gray-500" />
                    </div>
                    <Button className="w-full">Reset Password</Button>
                </CardContent>
                <CardFooter className="flex justify-around">
                    <Link className="text-sm underline text-red-600" href="/login">
                    Cancel
                    </Link>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}

