import { redirectToPath } from '@/app/utils/auth-helpers/server';
import { createClient } from '@/app/utils/supabase/client';
import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { set } from 'date-fns';


type UserDropdownProps = {
    user: any;
  };  

export default function UserDropdown({ user }: UserDropdownProps) {
    const supabase = createClient();
    const [isOpen, setIsOpen] = useState(false);
    const userDropdownRef = useRef<HTMLDivElement>(null);

    async function handleSignOut() {
        const { error } = await supabase.auth.signOut()
        redirectToPath("/");
    }
    
    const handleClickOutside = (e: any) => {
        if (userDropdownRef.current && !userDropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    }, []);

    return (
        <div className="relative">
            <Avatar
            className="cursor-pointer"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            onClick={() => {
                setIsOpen(!isOpen);
            }}
            
            >
                <AvatarImage src="../../../images/avatar.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        {isOpen && (
            <div
            id="userDropdown"
            className="z-10 absolute top-full left-0 w-44 rounded-lg shadow-md bg-white dark:bg-gray-700 divide-y divide-gray-100 dark:divide-gray-600"
            ref={userDropdownRef}
            >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">{user.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                </a>
                </li>
                <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Settings
                </a>
                </li>
            </ul>
            <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Sign out
                </a>
            </div>
            </div>
        )}
        </div>
    );
}