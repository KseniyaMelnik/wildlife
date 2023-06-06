import './globals.css'
import { Open_Sans } from 'next/font/google'
import { ReactNode } from "react";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wildlife',
  description: 'Wildlife rescue',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} flex flex-col items-center relative`}>
      {children}
      </body>
    </html>
  )
}
