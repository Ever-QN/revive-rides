import { useEffect } from "react";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const supabase = createClient();

    const {data : { user }} = await supabase.auth.getUser()

    if (!user) { redirect('/signin') }
    if (user) { redirect('/dashboard/overview') }

    return (
        <div className='flex w-full justify-center items-center h-screen'>
            <h1 className='text-black'>Loading...</h1>
        </div>
    )
}