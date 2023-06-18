'use client'

import Link from "next/link";
import Image from "next/image";
import {CSSProperties, useEffect, useState} from "react";
import {BurgerMenu} from "@/components/BurgerMenu";
import {getProviders} from "next-auth/react";
import {Nav} from "@/components/Nav";

export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const windowHeight = 50;
        const scrollY = window.scrollY;
        (scrollY >= windowHeight) ? setScrolled(true) : setScrolled(false)
    }

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const headerScrolledStyle: CSSProperties = {
        backgroundColor: 'rgba(2, 22, 11, 0.8)',
        transition: 'background-color 0.5s ease',
    }

    return <>
        <header
            style = {scrolled ? headerScrolledStyle : {background: 'none'}}
            className='flex items-center justify-center w-[100%] z-10 fixed'>
            <div className='flex justify-between items-center max-w-[1200px] w-[90vw] my-2'>
                <Link href='/' className='flex items-center gap-[17px]'>
                    <Image src="/assets/icons/logo.svg" alt='wild' width={70} height={60}/>
                    <span className='font-light text-3xl uppercase text-white'>wildlife</span>
                </Link>

                <Nav setOpenMenu={setOpenMenu} openMenu={openMenu}/>
            </div>
        </header>
        {openMenu && <BurgerMenu setOpenMenu={setOpenMenu} />}
    </>
}
