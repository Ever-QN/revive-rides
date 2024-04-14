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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Shield } from "lucide-react"


export default async function AdminDashboard() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirectToPath("/sign-in");
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
          <div className="flex-1 flex">
            <nav className="flex flex-col px-2 text-sm font-medium lg:px-4">
              <div className="flex flex-col">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:text-primary text-muted-foreground transition-all "
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/appointments"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:text-primary text-muted-foreground transition-all "
              >
                <Users className="h-4 w-4" />
                Your Appointments
              </Link>
              <Link
                href="/dashboard/appointments"
                className="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted hover:text-primary"
              >
                <Shield className="h-4 w-4" />
                Admin
              </Link>
              </div>

              <div className="">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex flex-row-reverse justify-center md:justify-start md:flex-row h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Welcome back, {user.email} (Admin View)</h1>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Tabs defaultValue="pending-appointments" className="w-full">
            <TabsList>
              <TabsTrigger value="pending-appointments">
                Pending Appointments
              </TabsTrigger>
              <TabsTrigger value="confirmed-appointments">
                Confirmed Appointments
              </TabsTrigger>
              <TabsTrigger value="appointments">
                All Appointments
              </TabsTrigger>

              <TabsTrigger value="customers">
                Customers
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pending-appointments">
              pa
            </TabsContent>
            <TabsContent value="confirmed-appointments">
              ca
            </TabsContent>
            <TabsContent value="appointments">
              a
            </TabsContent>
            <TabsContent value="customers">
              c
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
