'use client'

import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";

export const GoogleButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || "/profile"

    return (
        <button
            className='border-amber-700 border-2 rounded p-2.5 flex items-center gap-2.5'
            onClick={()=> signIn('google', {callbackUrl})}>
            <img src='assets/icons/socials/google.png' alt="" width={30} height={30}/>
            Continue with Google
        </button>
    )
}