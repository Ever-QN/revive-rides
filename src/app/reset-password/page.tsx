'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { createClient } from "../utils/supabase/client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"


export default function ResetPassword() {

    
    const [passwordInput, setPasswordInput] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { toast } = useToast()

    async function UpdatePassword() {
        event?.preventDefault();
        const supabase = createClient();
        const { data, error } = await supabase.auth.updateUser({
            password: passwordInput
          })
        if (error) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive"
            })
            console.error(error)
        }
        if (!error) {
            toast({
                title: "Success",
                description: "Successfully reset your password!",
                className: "bg-green-500 text-white"
            })
        }
        setIsSubmitted(true)
    }

  return (
    <>
    {isSubmitted ? (
        <div className='flex flex-col w-full justify-center items-center h-screen'>
            <div className='font-bold'>
               Successfully reset your password!
            </div>
            <div>
                <Link href="/" className="text-red-500 underline">Click here to go back home</Link>
            </div>
        </div>
            ): <div className="relative flex items-center justify-center h-screen">
            <Card className="flex flex-col border-2 border-black">
                <CardHeader className="text-center space-y-1">
                    <CardTitle>Update Password</CardTitle>
                    <CardDescription>Enter a new password for you account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={UpdatePassword} className="space-y-4">
                        <div className="">
                            <Label htmlFor="password">Password</Label>
                            <Input 
                            id="email" 
                            value={passwordInput} 
                            placeholder="m@example.com" 
                            onChange={(e) => {
                                setPasswordInput(e.target.value)
                            }} 
                            required type="email" 
                            className="border border-gray-500" />
                        </div>
                        <Button type='submit' className="w-full">Update Password</Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-around">
                    <Link className="text-sm underline text-red-600" href="/sign-in">
                    Cancel
                    </Link>
                </CardFooter>
            </Card>
        </div>
        }
    
    </>
  )
}

