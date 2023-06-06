import {FC} from "react";
import Link from "next/link";

type BurgerMenuProps = {
    setOpenMenu: (openMenu: boolean) => void
}

export const BurgerMenu: FC<BurgerMenuProps> = ({setOpenMenu}) => {
    const closeMenu = () => {
        setOpenMenu(false)
    }
    return (
        <>
            <div className="fixed top-0 left-0 w-[100%] h-[100%] backdrop-blur-sm bg-black/50 transition-all z-20"/>
            <div className="fixed z-30 left-[20%] w-[80%] h-[100%]
            flex items-start justify-end
            overflow-hidden transition-all animate-[openModal_1s_ease-out_forwards]
            bg-black/50">
                <nav className="flex flex-col items-start justify-center gap-[5.6vw] mt-[30vw] mr-[20vw]">
                    <Link
                        href="blog"
                        className="border-0 text-amber-50 font-semibold text-3xl"
                        onClick={closeMenu}
                    >
                        Blog
                    </Link>
                    <Link
                        href="contacts"
                        className="border-0 text-amber-50 font-semibold text-3xl"
                        onClick={closeMenu}
                    >
                        Contacts
                    </Link>
                    <Link
                        href="login"
                        className="border-0 text-amber-50 font-semibold text-3xl"
                        onClick={closeMenu}
                    >
                        Sign in
                    </Link>
                </nav>
                <button
                    onClick={closeMenu}
                    className="top-[5%] right-[10%] w-[7.5vw] h-[7.5vw]
                    flex items-center justify-center text-amber-50
                    border-amber-50 border-2 rounded
                    absolute text-3xl
                    ">
                    &times;
                </button>
            </div>
        </>
    )
}