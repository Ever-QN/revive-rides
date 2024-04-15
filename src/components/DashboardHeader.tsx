import { createClient } from "@/app/utils/supabase/server"

type usersType = {
    id: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
  }


export default async function DashboardHeader() {
    let currentUser = {} as usersType

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        const { data: users, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()
        
        if (error) {
            console.error(error)
        }
        currentUser = users;
      }
    
    return (
        <h1 className="text-lg font-semibold text-center md:text-2xl">Welcome back, {currentUser.first_name} {currentUser.last_name}</h1>
    )
}