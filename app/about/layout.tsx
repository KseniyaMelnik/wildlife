import {ReactNode} from "react";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About | Wildlife',
}

export default function AboutLayout({children}: {children: ReactNode}) {
    return <div>
        <h1>About us</h1>
        {children}
    </div>
}