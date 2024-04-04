import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import GlobalHeader from "../components/global-header";
import GlobalFooter from "../components/global-footer";
import { createClient } from "./utils/supabase/server";

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
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
