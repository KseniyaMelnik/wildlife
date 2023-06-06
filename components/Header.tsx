'use client'

import Link from "next/link";
import Image from "next/image";
import {CSSProperties, useEffect, useState} from "react";
import {BurgerMenu} from "@/components/BurgerMenu";

export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const windowHeight = 300;
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

                <nav>
                    <ul className='items-center justify-center gap-x-8 lg:gap-x-16
                    text-xl lg:text-2xl text-white sm:flex hidden'>
                        <li><Link href="/blog" className='hover:text-amber-600'>Blog</Link></li>
                        <li><Link href="/contacts" className='hover:text-amber-600'>Contacts</Link>
                        </li>
                        <li><a href="#">
                            <Image src="/assets/icons/find-item.svg"
                                   alt="find"
                                   width={24}
                                   height={24}
                            />
                        </a></li>
                        <li><Link href="login" className='rounded
                    border border-2 border-amber-700 hover:bg-amber-700
                    py-1.5 px-3 '>Sign in</Link></li>
                    </ul>

                    <div onClick={toggleMenu} className='sm:hidden'>
                        <svg width="40" height="24" viewBox="0 0 20 12" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 2L19 2C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.480429 19.7071 0.292892C19.5196 0.105356 19.2652 0 19 0L9 0C8.73478 0 8.48043 0.105356 8.29289 0.292892C8.10536 0.480429 8 0.734784 8 1C8 1.26522 8.10536 1.51957 8.29289 1.70711C8.48043 1.89464 8.73478 2 9 2ZM19 10L1 10C0.734784 10 0.480429 10.1054 0.292892 10.2929C0.105356 10.4804 0 10.7348 0 11C0 11.2652 0.105356 11.5196 0.292892 11.7071C0.480429 11.8946 0.734784 12 1 12L19 12C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10V10ZM1 7L19 7C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5L1 5C0.734784 5 0.480429 5.10536 0.292892 5.29289C0.105356 5.48043 0 5.73478 0 6C0 6.26522 0.105356 6.51957 0.292892 6.70711C0.480429 6.89464 0.734784 7 1 7Z" fill="#FFFFFF"/>
                        </svg>
                    </div>
                </nav>
            </div>
        </header>
        {openMenu && <BurgerMenu setOpenMenu={setOpenMenu} />}
    </>
}
