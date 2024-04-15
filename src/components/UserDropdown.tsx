import { createClient } from '@/app/utils/supabase/client';
import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { redirect, useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { CircleUser } from 'lucide-react';
import { redirectToPath } from '@/app/utils/auth-helpers/server';

export default function UserDropdown({ user }: any) {
    const supabase = createClient();

    const [isAdmin, setIsAdmin] = useState(false);

    async function getUserRole() {
      const supabase = createClient();
      
      const { data: userRole, error } = await supabase
      .from('user_roles')
      .select('is_admin')
      .eq('id', user.id).single();

      if (error) {
        console.error(error)
        return null
      }
      if (userRole.is_admin) {
        setIsAdmin(true);
      }
    }

    getUserRole();

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
          className="cursor-pointer hover:bg-slate-200"
          onClick={async () => {
            redirectToPath("/dashboard");
        }}
          >
            Dashboard
          </DropdownMenuItem>
          {isAdmin && (
          <DropdownMenuItem 
            className="cursor-pointer hover:bg-slate-200"
            onClick={async () => {
              redirectToPath("/dashboard/administrator");
            }}
          >
            Administrator
          </DropdownMenuItem>
           )}
          <DropdownMenuItem 
          className="cursor-pointer hover:bg-slate-200"
          onClick={async () => {
            redirectToPath("/account/settings");
        }}
          >
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
          className="cursor-pointer hover:bg-slate-200"
            onClick={async () => {
                await supabase.auth.signOut();
                redirectToPath("/")
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )}