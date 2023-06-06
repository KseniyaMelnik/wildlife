import {CSSProperties, ReactNode} from "react";
type AuthLayoutProps = {
    children: ReactNode
}

export const AuthLayout = ({children}: AuthLayoutProps) => {

    const AuthLayoutStyle: CSSProperties = {
        backgroundImage: "url('assets/images/green_background.jpg')",
        backgroundSize: "cover"
    }
    return <>
        <main className='w-[100vw] h-[100vh] flex justify-center items-center' style={AuthLayoutStyle}>
            {children}
        </main>
    </>
}