import Link from "next/link";

export default function AuthCodeError() {
    return (
        <div className='flex flex-col w-full justify-center items-center h-screen'>
            <div className='text-red-600 font-bold text-5xl'>The link you tried to visit is invalid or has expired.</div>
            <div>
                <Link href="/" className="text-red-500 underline">Click here to go back home</Link>
            </div>
        </div>
    )
}