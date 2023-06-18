import { ReactNode } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

type GlobalLayoutProps = {
    children: ReactNode
}

export const GlobalLayout = ({children}: GlobalLayoutProps) => {
    return <div className='w-[100%] min-h-[100vh] flex flex-col items-center justify-between'>
        <Header />
        <main className='w-[100%] bg-green-950'>
            {children}
        </main>
        <Footer />
    </div>
}