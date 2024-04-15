import {
  Check,
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    MoreHorizontal,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/app/utils/supabase/client";

type booking = {
  booking_id: string
  first_name: string
  last_name: string
  phone_number: string
  booking_type: string
  booking_date: string
  booking_time: string
  booking_status: "Pending" | "Confirmed" | "Completed" | "Cancelled"
  booking_details: string
  email: string
  car_info: string
}
  
  export function AdminConfirmDropdown({ booking }: { booking: booking }) {

    const { toast } = useToast();
    const supabase = createClient();

    async function onCancel() {
      const { error } = await supabase
      .schema('public')
      .from('user_bookings')
      .update({ booking_status: 'Cancelled' })
      .eq('booking_id', booking.booking_id)

      if (!error) {
        toast({
          title: "Booking Cancelled Successfully",
          description: `Booking for ${booking.first_name} ${booking.last_name} has been Cancelled. (Booking ID: ${booking.booking_id})`,
          className: "bg-green-500 text-white",
        
        })
      }

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
        return;
      }
    }

    return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0 hover:bg-slate-300">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            onClick={
              () => {
                onCancel();
              }
            }>
              Complete Appointment
              </DropdownMenuItem>
            <DropdownMenuItem
            onClick={
              () => {
                onCancel();
              }
            }>
              Cancel Appointment
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    )
  }
  