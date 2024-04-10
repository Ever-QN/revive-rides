import Link from "next/link";

export default function AuthCodeError() {
    return (
        <div className='flex flex-col w-full justify-center items-center h-screen'>
            <h1 className='text-red-600 font-bold text-5xl'>The link you tried to visit is invalid.</h1>
        </div>
    )
}