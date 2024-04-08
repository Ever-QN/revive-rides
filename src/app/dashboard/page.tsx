import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { redirectToPath } from "../utils/auth-helpers/server";
import { createClient } from "../utils/supabase/server";

export default async function Dashboard() {

    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();


    return (
        <div className='flex w-full justify-center items-center h-screen'>
            <h1 className='text-black'>Loading...</h1>
            {!user && redirectToPath('/signin')}
            {user && redirectToPath('/dashboard/overview')
            }
        </div>
    )
}