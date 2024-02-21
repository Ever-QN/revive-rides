import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import './globals.css';
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "../components/ui/theme-provider"

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
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        />
        {children}
      </body>
    </html>
  );
}
