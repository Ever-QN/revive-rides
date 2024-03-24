import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import GlobalHeader from "../components/global-header";
import GlobalFooter from "../components/global-footer";

const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "S&D Autobody",
  description: "Discover excellence in automotive care at S&D Autobody",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <GlobalHeader />
        <main className="flex-grow pt-24">{children}</main>
        <GlobalFooter />
      </body>
    </html>
  );
}
