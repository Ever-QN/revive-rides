import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClient } from "../utils/supabase/server";
import { redirectToPath } from "../utils/auth-helpers/server";

export default async function Dashboard() {

    const supabase = createClient();
    const {
        data: { user },
      } = await supabase.auth.getUser();

    if (!user) {
        return redirectToPath("/sign-in");
      }

    return (
        <div className='flex w-full justify-center items-center h-screen'>
            <h1 className='text-black'>Loading...</h1>
            {!user && redirectToPath('/sign-in')}
            {user && redirectToPath('/dashboard/overview')
            }
        </div>
    )
}