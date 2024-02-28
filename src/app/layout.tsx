import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { ThemeProvider } from "../components/ui/theme-provider"
import GlobalHeader from "../components/global-header";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] });

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        /> */}
        <GlobalHeader />
        {children}
      </body>
    </html>
  );
}
