import {ReactNode} from "react";
import Link from "next/link";

export default function AdminLayout({children}: {
    children: ReactNode
}) {
    return (
        <div className='w-full flex'>
            <nav className='flex flex-col gap-4 h-[100vh] bg-green-900 text-amber-50 p-7 min-w-[250px] text-lg'>
                <p>Dashboard</p>

                <Link href='admin/posts' className='flex gap-2'>
                    <img src="/assets/icons/article.svg" alt=""
                         width={30} height={30}
                    /> Posts </Link>
                <Link href='admin/animals' className='flex gap-2'>
                    <img src="/assets/icons/paw.svg" alt=""
                         width={30} height={30}
                    />Animals </Link>
                <Link href='admin/create-content' className='flex gap-2'>
                    <img src="/assets/icons/publish.svg" alt=""
                         width={30} height={30}
                    />
                    Create content </Link>
                <Link href='/' className='flex gap-2'>
                    <img src="/assets/icons/logo.svg" alt=""
                         width={30} height={30}
                    />
                    Back to main </Link>
            </nav>
            {children}
        </div>
    )
}
