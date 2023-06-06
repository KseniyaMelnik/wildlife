import { ReactNode } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

type GlobalLayoutProps = {
    children: ReactNode
}

export const GlobalLayout = ({children}: GlobalLayoutProps) => {
    return <>
        <Header />
        <main className='w-[100%]'>
            {children}
        </main>
        <Footer />
    </>
}