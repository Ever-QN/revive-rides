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
    const [isOpen, setIsOpen] = useState(false);
    const userDropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

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