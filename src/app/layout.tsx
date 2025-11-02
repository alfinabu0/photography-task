import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import ForceBrowser from "@/components/ForceBrowser";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inekas PhotoGraphy Printing",
  description: "Photo Printing Service by Inekas PhotoGraphy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ForceBrowser/>
        <ThemeProvider>
            <Navbar />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
