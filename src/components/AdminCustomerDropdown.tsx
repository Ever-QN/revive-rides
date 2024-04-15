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

type customerType = {
  first_name: string
  last_name: string
  phone_number: string
  email: string
}
  
  export function AdminCustomerDropdown({ customer }: { customer: customerType }) {

    const { toast } = useToast();
    const supabase = createClient();
    
    async function onConfirm() {
      const { error } = await supabase
      .schema('public')
      .from('user_bookings')
      .update({ booking_status: 'Confirmed' })

      if (!error) {
        toast({
          title: "Booking Confirmed",
          description: ``,
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
              onClick={() => {
                onConfirm();
              }
              }
            > 
              Confirm
            </DropdownMenuItem>
            <DropdownMenuItem>
              Edit Client
            </DropdownMenuItem>
            <DropdownMenuItem>
              Delete Client
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    )
  }
  