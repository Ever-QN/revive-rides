'use client'

import { useEffect } from "react";
import { createClient } from "../utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

    useEffect(() => {
      async function checkUser() {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
  
        if (!user) {
          router.push("/sign-in");
        }
        if (user) {
          router.push("/dashboard/overview");
        
        }
      }
      checkUser()
    }, []);

    return (
        <div className='flex w-full justify-center items-center h-screen'>
            <h1 className='text-black'>Loading...</h1>
        </div>
    )
}