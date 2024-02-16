import Link from 'next/link';
import '../style.css';

export default function ManagerHomePage() {
    return (
        <>
            <header className="header bg-color">
                <img src="/images/logo2.png" alt="Logo2" />

                <div className="flex justify-start">
                    <img src="/images/grid-icon.png" alt="Grid" className="pr-5 scale-85" />
                    <img src="/images/bell-icon.png" alt="Notification" className="pr-5 scale-105" />
                    <img src="/images/chat-icon.png" alt="Chat" className="pr-11 scale-85" />
                    <img src="/images/envelope-icon.png" alt="Mail" className="pr-14 scale-125" />
                    <ul className="ml-auto pr-14 text-2xl libre-franklin pt-2">Signed In as <span className="underline">Dani Martinez</span></ul>
                    <img src="/images/setting-icon.png" alt="Setting" className="pr-14" />
                </div>
            </header>

            <main className="bg-white h-screen">
                <div className="bg-red-500 h-72">
                        <img src="/images/avatar-icon.png" alt="Avatar" className="absolute top-48 left-48 scale-150" />
                        <h1 className="font-bold text-5xl pl-72 mb-1 pt-16 barlow-condensed">Welcome</h1>
                        <ul className="text-3xl pl-72 barlow-condensed mb-1">Dani Martinez</ul>
                        <input type="text" placeholder="Search" className="bg-white w-3/4 h-sub rounded-xl px-6 mt-3 ml-44 text-black text-2xl glacial-indiff" />
                        <img src="/images/search-icon.png" alt="Search" className="absolute right-80 top-19 scale-85" />
                </div>

                <div className="mt-6 bg-color w-5/6 ht-55 m-auto rounded-vl flex justify-around">
                    <div>
                        <h1 className="font-bold text-5xl uppercase text-cyan-300 pl-40 pt-14 barlow-condensed">Categories</h1>

                        <div className="flex w-6/7 space-x-12 mt-6 pl-12 text-black poppins-medium">
                            <Link href="./user-management" className="w-36 h-44 bg-cyan-200 rounded-yl flex flex-col justify-center items-center hover:bg-cyan-400">
                                <img src="/images/user-management-black-icon.png" alt="User Management" className="scale-90" />
                                <span className="pb-2">User Management</span>
                            </Link>

                            <div className="w-36 h-44 bg-cyan-200 rounded-yl flex flex-col justify-center items-center hover:bg-cyan-400">
                                <img src="/images/booking-management-black-icon.png" alt="Booking Management" className="scale-90"/>
                                <span className="pb-2">View Booking</span>
                            </div>

                            <div className="w-36 h-44 bg-cyan-200 rounded-yl flex flex-col justify-center items-center hover:bg-cyan-400">
                                <img src="/images/other-black-icon.png" alt="Other" className="scale-90" />
                                <span className="pb-2">Other</span>
                            </div>
                        </div>  
                        
                        <div className="font-bold flex justify-center text-xl underline mt-8 pl-12">
                            <ul className="w-36 h-10 bg-gray-700 rounded-lg flex justify-center pt-1 uppercase canva-sans">Show more</ul>
                        </div>
                    </div>

                    <div className="wd-55 bg-cyan-200 mt-8 mb-8 rounded-yl">
                        <h1 className="font-bold uppercase text-5xl txt-color pl-12 pt-2 pb-4 barlow-condensed">Announcement</h1>
                        
                        <div className="pl-8 pt-4 bg-color1 mb-5 wd-90 rounded-zl h-28 ml-6">
                            <ul className="font-bold text-3xl txt-color barlow-condensed">Meeting at 5:00 PM</ul>
                            <ul className="poppins-medium text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ul>
                        </div>

                        <div className="pl-8 pt-4 bg-color1 wd-90 rounded-zl h-28 ml-6">
                            <ul className="font-bold text-3xl txt-color barlow-condensed">Website Repair on November 23</ul>
                            <ul className="poppins-medium text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}