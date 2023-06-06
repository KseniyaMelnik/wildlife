'use client'

import {AuthLayout} from "@/components/layouts/AuthLayout";
import {ChangeEvent, FormEvent, useState} from "react";
import Link from "next/link";

export default function SignUp () {

    const [formDate, setFormDate] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newFormDate = {...formDate, email: event.currentTarget.value}
        setFormDate(newFormDate);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newFormDate = {...formDate, password: event.currentTarget.value}
        setFormDate(newFormDate);
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newFormDate = {...formDate, confirmPassword: event.currentTarget.value}
        setFormDate(newFormDate);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        /*onLogin(email, password);*/
        alert(`email: ${formDate.email} password: ${formDate.password} confirm: ${formDate.confirmPassword}`)
    };
    return  <AuthLayout>
        <form onSubmit={handleSubmit} className='
        w-[90%] max-w-[400px] bg-stone-300 border-amber-700 border-2 rounded-2xl
        flex flex-col items-center gap-2.5 p-2.5'>
            <h2 className='text-3xl mb-2.5'>Sign up</h2>
            <div className='w-[90%]'>
                <label htmlFor="email" className='text-base mb-1'>Email:</label>
                <input type="email"
                       id="email"
                       value={formDate.email}
                       className='text-lg p-1.5 mb-2.5
                       border-2 border-neutral-200 rounded w-[100%] outline-0'
                       onChange={handleEmailChange} />
            </div>
            <div className='w-[90%]'>
                <label htmlFor="password" className='text-base mb-1'>Password:</label>
                <input type="password"
                       id="password"
                       className='text-lg p-1.5 mb-2.5
                       border-2 border-neutral-200 rounded w-[100%] outline-0'
                       value={formDate.password}
                       onChange={handlePasswordChange} />
            </div>
            <div className='w-[90%]'>
                <label htmlFor="confirm-password" className='text-base mb-1'> Confirm password:</label>
                <input type="password"
                       id="confirm-password"
                       className='text-lg p-1.5 mb-2.5
                       border-2 border-neutral-200 rounded w-[100%] outline-0'
                       value={formDate.confirmPassword}
                       onChange={handleConfirmPasswordChange} />
            </div>
            <button type="submit"
                    className='text-lg py-2.5 px-5 mt-2.5 border-0 rounded
                    bg-amber-600 text-amber-50 cursor-pointer hover:bg-amber-500'>
                Sign up </button>

            <p>
                <Link href="/login" className='text-amber-600 font-bold hover:text-amber-500'> Already have an account? </Link>
            </p>
            <p>
                <Link href='/' className='text-amber-700'>Back to main page</Link>
            </p>
        </form>
    </AuthLayout>
}