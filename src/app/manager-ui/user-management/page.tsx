import Link from 'next/link';
import '../style.css';

export default function UserManagementPage() {
    return (
        <>
            <header className="header bg-color">
                <img src="/images/logo2.png" alt="Logo2" />

                <div className="flex justify-start">
                    <img src="/images/grid-icon.png" alt="Grid" className="pr-5 scale-85" />
                    <img src="/images/bell-icon.png" alt="Notification" className="pr-5 scale-105" />
                    <img src="/images/chat-icon.png" alt="Chat" className="pr-11 scale-85" />
                    <img src="/images/envelope-icon.png" alt="Mail" className="pr-14 scale-125" />
                    <ul className="ml-auto pr-14 text-2xl libre-franklin pt-2">Sign In as <span className="underline">Dani Martinez</span></ul>
                    <img src="/images/setting-icon.png" alt="Setting" className="pr-14" />
                </div>
            </header>

            <main className="bg-cyan-200 flex justify-start">
                <div className="bg-red-500 h-screen w-1/5 flex-col justify-center space-y-12">

                    <div className="flex justify-start">
                        <img src="/images/avatar-icon.png" alt="Avatar" className="absolute top-40 left-10 scale-105" />
                        <ul className="barlow-condensed text-3xl font-bold pt-14 pl-28">Dani Martinez</ul>
                    </div>
                    
                    <Link href="./manager-home" className="hover:bg-red-600 pt-1 ml-10 w-4/5 h-14 rounded-lg flex justify-start space-x-5">
                        <img src="/images/home-icon.png" alt="Home" className="pb-1 pl-2" />
                        <span className="poppins-medium text-xl font-bold text-center pt-3">Home</span>
                    </Link>

                    <div className="hover:bg-red-600 pt-1 ml-10 w-4/5 h-14 rounded-lg flex justify-start space-x-5">
                        <img src="/images/user-management-icon.png" alt="User Management" className="pb-1 pl-2" />
                        <ul className="poppins-medium text-xl font-bold uppercase text-center pt-3">User Management</ul>
                    </div>
                    
                    <div className="hover:bg-red-600 pt-1 ml-10 w-4/5 h-14 rounded-lg flex justify-start space-x-5">
                        <img src="/images/booking-management-icon.png" alt="Booking Management" className="pb-1 pl-2" />
                        <ul className="poppins-medium text-xl font-bold uppercase text-center pt-3">View Booking</ul>
                    </div>

                    <div className="hover:bg-red-600 pt-1 ml-10 w-4/5 h-14 rounded-lg flex justify-start space-x-5">
                        <img src="/images/other-icon.png" alt="Other" className="pb-1 pl-2" />
                        <ul className="poppins-medium text-xl font-bold uppercase text-center pt-3">Other</ul>
                    </div>

                </div>

                <div className="flex-col justify-start">
                    <ul className="txt-color text-5xl font-bold barlow-condensed pl-12 pt-6">User Management</ul>
                    <input type="text" placeholder="Search" className="bg-white wd-110 h-12 rounded-yl border-2 border-black px-6 mt-8 ml-12 text-black text-md glacial-indiff" />
                </div>
            </main>
        </>
    );
}