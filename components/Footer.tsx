import Image from "next/image";
import Link from "next/link";

export const Footer = () => {

    const backgroundStyle = {
        backgroundImage: "url('assets/images/Footer-bg.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }

    const facebook = {
        backgroundImage: "url('assets/icons/socials/facebook.svg')",
        backgroundPosition: "center center",

    }

    const instagram = {
        backgroundImage: "url('assets/icons/socials/instagram.svg')",
        backgroundPosition: "center center",
    }

    const pinterest = {
        backgroundImage: "url('assets/icons/socials/pinterest.svg')",
        backgroundPosition: "center center",
    }

    const telegram = {
        backgroundImage: "url('assets/icons/socials/telegram.svg')",
        backgroundPosition: "center center",
    }

    return (
        <footer className='h-[359px] flex items-center justify-center w-[100%]' style={backgroundStyle}>
            <div className='flex max-w-[1200px] w-[90vw] text-amber-50 justify-between items-center gap-10 flex-wrap'>
                <Link href='/' className='flex items-center gap-[17px]'>
                    <Image src="/assets/icons/logo.svg" alt='wild' width={70} height={60}/>
                    <span className='font-light text-3xl uppercase text-white'>wildlife</span>
                </Link>

                <ul className='flex list-none items-center justify-center gap-[42px] flex-wrap'>
                    <li><a className='text-amber-50 decoration-0 text-2xl hover:text-amber-600' href="#articles">Articles</a>
                    </li>
                    <li><Link className='text-amber-50 decoration-0 text-2xl hover:text-amber-600' href="/about">About us</Link>
                    </li>
                    <li><Link className='text-amber-50 decoration-0 text-2xl hover:text-amber-600' href="/blog">Learn
                        more</Link></li>
                </ul>

                <ul className='flex list-none items-center justify-between gap-[27px]'>
                    <li><a
                        className='bg-amber-50 block w-[40px] h-[40px] rounded-3xl bg-no-repeat hover:bg-amber-700'
                        style={facebook}
                        href="#"></a></li>
                    <li ><a
                        className='bg-amber-50 block w-[40px] h-[40px] rounded-3xl bg-no-repeat hover:bg-amber-700'
                        style={instagram}
                        href="#"></a></li>
                    <li><a
                        className='bg-amber-50 block w-[40px] h-[40px] rounded-3xl bg-no-repeat hover:bg-amber-700'
                        style={pinterest}
                        href="#"></a></li>
                    <li><a
                        className='bg-amber-50 block w-[40px] h-[40px] rounded-3xl bg-no-repeat hover:bg-amber-700'
                        style={telegram}
                        href="#"></a></li>
                </ul>

            </div>
        </footer>
    )
}