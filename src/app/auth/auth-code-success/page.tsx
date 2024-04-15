'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SuccessEmail() {
    const router = useRouter();
    const [secondsLeft, setSecondsLeft] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft((prevSeconds) => prevSeconds - 1);
        }, 1000); // Update every second

        // Redirect when secondsLeft reaches 0
        if (secondsLeft === 0) {
            router.push("/dashboard");
        }

        // Clean up the timer to prevent memory leaks
        return () => clearInterval(timer);
    }, [secondsLeft, router]); // Empty dependency array to run effect only once

    return (
        <div className='flex flex-col w-full justify-center items-center h-screen'>
            <div className='text-green-600 font-bold'>Your email has been successfully verified! Redirecting you to the dashboard in {secondsLeft} seconds...</div>
            <div>
                <Link href="/dashboard" className="text-red-500 underline">Click here if you are not redirected</Link>
            </div>
        </div>
    )
}