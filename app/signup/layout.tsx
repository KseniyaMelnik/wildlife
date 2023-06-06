import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Sign Up | Wildlife',
}

export default function SignupLayout({children}: {children: ReactNode}) {
    return <>
        {children}
    </>
}