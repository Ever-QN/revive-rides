import { createClient } from '@/app/utils/supabase/client';
import React, { useState, useRef, useEffect } from 'react';

type UserDropdownProps = {
    user: any;
  };  

export default function UserDropdown({ user }: UserDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const userDropdownRef = useRef<HTMLDivElement>(null);
    
    
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
        <button
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="w-10 h-10 rounded-full cursor-pointer focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
        >
            <img src="" alt="User avatar" />
        </button>

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