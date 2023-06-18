import './globals.css'
import { Open_Sans } from 'next/font/google'
import { ReactNode } from "react";
import { Metadata } from "next";
import Provider from "@/components/Provider";

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
    <>
        <html lang="en">
        <body className={`${openSans.className} flex flex-col items-center relative bg-stone-300`}>
        <Provider>
            {children}
        </Provider>
        </body>
        </html>
    </>
  )
}
