'use client';

import { SessionProvider } from "next-auth/react";
import {ReactNode} from "react";
import {Session} from "next-auth";

const Provider = ({ children}: {children: ReactNode}) => (
    <SessionProvider>
        {children}
    </SessionProvider>
)

export default Provider;