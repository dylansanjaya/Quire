import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quire",
  description: "Your career solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>
        <Navbar />
        {children}
        </body> */}
      <body className="mb-36 mt-[7vh] md:mt-36">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
