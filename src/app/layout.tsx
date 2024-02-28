import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import GlobalHeader from "@/components/global-header";
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "S&D Autobody Login",
  description: "S&D Autobody Login Page",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <GlobalHeader />
        {children}
      </body>
    </html>
  )
}
