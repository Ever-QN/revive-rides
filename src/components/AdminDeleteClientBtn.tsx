import { Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { createClient } from '@supabase/supabase-js'

type customerType = {
    id: string
    first_name: string
    last_name: string
    phone_number: string
    email: string
}

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const service_role_key = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!

export default function AdminDeleteClientBtn({ customer }: { customer: customerType }) {

    const supabase = createClient(supabase_url, service_role_key, {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      })
      
    const { toast } = useToast()
    const adminAuthClient = supabase.auth.admin


    async function confirmAction() {
       const { error } = await adminAuthClient.deleteUser(customer.id)

        if (error) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            
            })
            return;
        }
        if (!error) {
            toast({
                title: "Client Deleted",
                description: `${customer.first_name} ${customer.last_name} has been deleted.`,
                className: "bg-green-500 text-white",
            })
        }
    }   

    return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant="outline"><Trash2/></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
            This action cannot be undone. This will permanently delete {customer.first_name} {customer.last_name}&apos;s account and remove your data from our servers.
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction}>
                Continue
            </AlertDialogAction>
        </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    )

}