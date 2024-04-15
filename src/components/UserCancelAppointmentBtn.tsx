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
      X,
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
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
  
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
    
    export function UserCancelAppointmentBtn({ booking }: { booking: booking }) {
  
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
            description: `Your booking has been cancelled. (Booking ID: ${booking.booking_id})`,
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
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className='scale-90'><X className="h-4 w-4"/></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                This action cannot be undone. This will cancel your appointment for your {booking.car_info} ({booking.booking_type}).
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onCancel}>
                    Continue
                </AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      )
    }
    