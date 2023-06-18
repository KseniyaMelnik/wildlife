"use client"

import {ReactNode, useState} from "react";

type AccordionProps = {
    children: ReactNode,
    title: string
}

export const Accordion = ({children, title}: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(true)

    return <section className='w-full max-w-[1200px] flex-start flex-col border-2 border-amber-700 rounded'>
        <p className='p-2 text-lg flex
            justify-between items-center cursor-pointer text-amber-700 font-bold'
           onClick={() => setCollapsed(!collapsed)}>
            <span>{title}</span>
            {!collapsed && <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B45309"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="6 9 12 15 18 9" />
            </svg>}
        </p>

        {!collapsed && children}
    </section>
}