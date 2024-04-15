import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
 

import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/app/utils/supabase/client";
import AdminDeleteClientBtn from "./AdminDeleteClientBtn";
import { Edit } from "lucide-react";

type customerType = {
  first_name: string
  last_name: string
  phone_number: string
  email: string
}
  
  export function AdminEditClientBtn({ customer }: { customer: customerType }) {

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
      <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Edit className="w-4 h-4"/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to this client&apos;s profile here
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              First Name
            </Label>
            <Input id="name" value="" className="col-span-3" placeholder="John" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Last Name
            </Label>
            <Input id="username" value="" className="col-span-3" placeholder="Doe" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input id="username" value="" className="col-span-3" placeholder="email@email.com" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Phone
            </Label>
            <Input id="username" value="" className="col-span-3" minLength={10} maxLength={10} placeholder="1234567890" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
        
    )
  }
  