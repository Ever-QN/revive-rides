"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '')

export default function Login() {

  return (
    <div className="relative flex items-center justify-center py-12 h-screen p-8">
      <div className="absolute inset-0">
        <Image
          src="/images/login-bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4]"
        />
        <div className="z-50 mt-40">
          <div className="bg-gray-500 px-24">
          <Card className="w-full max-w-md mx-auto border-2 border-black scale-110 p-8">
            <Auth
              supabaseClient={supabase}
              appearance={{ 
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'blue',
                      brandAccent: 'navy',
                    },
                  },
                },
               }}
              providers={['google', 'facebook', 'apple']}
            />
          </Card>

          </div>
        </div>
      </div>
    </div>
    
  )
}