import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Login | Wildlife',
}

export default function LoginLayout({children}: {children: ReactNode}) {
    return <>
        {children}
    </>
}