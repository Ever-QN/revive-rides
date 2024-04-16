import Link from "next/link"
import {
  LayoutDashboard,
  Home,
  LogOut,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  User,
  Settings
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { createClient } from "@/app/utils/supabase/server"
import UserBookingsTable from "@/components/UserBookingsTable"
import { redirectToPath } from "@/app/utils/auth-helpers/server"

type usersType = {
  id: string
  email: string
  first_name: string
  last_name: string
  phone_number: string
}

export default async function DashboardAppointments() {

  const supabase = createClient();
  let currentUser = {} as usersType

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirectToPath("/sign-in");
  }

  if (user) {
    const { data: users, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

    if (error) {
      console.error(error)
    }

    if (users) {
      currentUser = users
    }
  }
  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] pt-4">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <LayoutDashboard className="h-6 w-6" />
              <span className="">S&D Autobody</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:text-primary text-muted-foreground transition-all "
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/appointments"
                className="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Your Appointments
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Settings className="h-4 w-4" />
                  Settings
               </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex flex-row-reverse justify-center md:justify-start md:flex-row h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Welcome back, {currentUser.first_name} {currentUser.last_name}</h1>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <UserBookingsTable />
        </main>
      </div>
    </div>
  )
}
