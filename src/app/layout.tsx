import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "./utils/supabase/server";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "S&D Autobody",
  description: "Discover excellence in automotive care at S&D Autobody",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={user}/>
          <main>
            {children}
          </main>
          <Toaster />
        <Footer />
      </body>
    </html>
  );
}
