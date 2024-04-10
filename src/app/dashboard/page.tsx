import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClient } from "../utils/supabase/server";

export default async function Dashboard() {

    const supabase = createClient();
    const { data } = await supabase.auth.getUser();

    if (data) {
        redirect("/dashboard");
    } else {
        redirect("/sign-in");
    
    }

    return (
        <div className='flex w-full justify-center items-center h-screen'>
            <h1 className='text-black'>Loading...</h1>
        </div>
    )
}