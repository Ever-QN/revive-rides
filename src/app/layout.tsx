import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import GlobalHeader from "../components/GlobalHeader";

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
      <body className={inter.className}>
        <GlobalHeader />
        {children}
      </body>
    </html>
  );
}
