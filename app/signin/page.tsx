'use client'

import {AuthLayout} from "@/components/layouts/AuthLayout";
import {FormEvent, useState} from "react";
import Link from "next/link";
import {GoogleButton} from "@/components/GoogleButton";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

export default function SignIn() {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)

        try {
            setIsLoading(true)
            const res = await signIn('credentials', {
                email: formData.get('email'),
                password: formData.get('password'),
                redirect: false,
            });
            if (res && !res.error) {
                router.push('/profile')
            }
            console.log(res)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    };

    return <AuthLayout>
        <div className='border-2 rounded-2xl border-amber-700
        bg-stone-300 w-[90%] max-w-[400px] flex flex-col items-center
        gap-5 p-5'>
            {isLoading ? <p>...Loading</p>
                : <>
                    <form onSubmit={handleSubmit} className='
        w-full
        flex flex-col items-center gap-5'>
                        <h2 className='text-3xl'>Sign in</h2>
                        <div className='w-[90%]'>
                            <label htmlFor="email" className='text-base mb-1'>Email:</label>
                            <input type="email"
                                   name="email"
                                   required
                                   className='text-lg p-1.5
                       border-2 border-neutral-200 rounded w-[100%] outline-0'
                            />
                        </div>
                        <div className='w-[90%]'>
                            <label htmlFor="password" className='text-base mb-1'>Password:</label>
                            <input type="password"
                                   name="password"
                                   required
                                   className='text-lg p-1.5
                       border-2 border-neutral-200 rounded w-[100%] outline-0'
                            />
                        </div>
                        <button type="submit"
                                className='text-lg py-2.5 px-5 border-0 rounded
                    bg-amber-600 text-amber-50 cursor-pointer hover:bg-amber-500'>
                            Sign in
                        </button>

                        {/*<p>Don't have an account?
                    <Link href="/signup" className='text-amber-600 font-bold hover:text-amber-500'> Register</Link>
                </p>*/}
                    </form>
                    <GoogleButton/>
                    <p>
                        <Link href='/' className='text-amber-700'>Back to main page</Link>
                    </p>
                </>
            }

        </div>
    </AuthLayout>
}