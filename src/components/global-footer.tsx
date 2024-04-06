import Image from 'next/image';
import Link from 'next/link';


export default function GlobalFooter() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-slate-900">
      <div className="grid grid-cols-1 gap-8 py-12 text-white transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-slate-900">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2 border-zinc-700">
                <Image alt="S&D Autobody Logo" width={48} height={48} unoptimized={true} className="h-12 w-48 md:min-h-12 md:min-w-48 hover:scale-110 active:scale-125 hover:duration-200" src="/images/header-logo.png" />
            </span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-400"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/home#about"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-400"
              >
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/home#services"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-400"
              >
                Frequently Asked Questions
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-400"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold text-white transition duration-150 ease-in-out">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-400"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 text-white lg:col-span-6 lg:justify-end">
          <div className="flex items-center h-10 space-x-6">
              <Image alt="Menu" width={250} height={250} src="../svg/sait-logo_horz.svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4 space-y-4 md:flex-row bg-slate-900 text-white">
        <div>
          <span>
            &copy; {new Date().getFullYear()} S&D Autobody, Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}