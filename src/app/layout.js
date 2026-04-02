import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LoadingWrapper from "@/components/Wrapper";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
title: "Build Hive | Construction & Architecture Experts",
  description:
    "Build Hive is a professional construction and architecture company delivering modern designs, quality building solutions, and innovative structures.",
  
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingWrapper>
        <Navbar/>
        {children}
        <Footer/> 
        </LoadingWrapper>
        </body>
    </html>
  );
}
