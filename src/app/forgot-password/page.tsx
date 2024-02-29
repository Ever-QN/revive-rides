import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex justify-center items-center h-screen">
        <Card className="flex flex-col items-center justify-center w-full max-w-md mx-auto border-2 border-black">
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
            <CardFooter className="flex justify-center">
                <Link className="text-sm underline text-red-600" href="#">
                Login
                </Link>
            </CardFooter>
        </Card>
    </div>
  )
}

