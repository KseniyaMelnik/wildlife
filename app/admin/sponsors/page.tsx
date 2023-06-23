"use client"

import {useEffect, useState} from "react";
import {getAllUsers} from "@/services/getUsers";
import {IUser} from "@/types";
import DeerLoader from "@/components/loaders/DeerLoader";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(true)
    const [collapsed, setCollapsed] = useState(true)

    useEffect(() => {
        getAllUsers()
            .then(setUsers)
            .finally(() => setLoading(false))
    }, [])

    const sponsors = users.filter(({animals}) => animals.length > 0)

    return <section className='w-full p-10 bg-white'>
        {loading ? (
            <DeerLoader/>
        ) : (
            <>
                <h2 className='text-2xl text-center mb-3.5'> Sponsors </h2>
                <div className='w-90% max-w-[1000px] text-lg m-auto'>
                    <div className='grid grid-cols-[0.5fr_1fr_1fr] bg-amber-700 p-2 rounded-t-lg'>
                        <span> Number </span>
                        <span> Image </span>
                        <span> Email </span>
                    </div>
                    {sponsors.map((user, idx) => <div key={user._id}>
                            <div
                                className='grid grid-cols-[0.5fr_1fr_1fr_0.2fr] p-2
                            bg-stone-200
                            items-center
                            odd:bg-stone-100
                            last:rounded-b-lg'>
                                <span>{idx + 1}</span>
                                <div>
                                    <img src={user.image} alt={user.username} width={50}/>
                                </div>
                                <span> {user.email} </span>
                                <svg onClick={() => setCollapsed(!collapsed)}
                                     className="cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#B45309"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                <polyline points="6 9 12 15 18 9"/>
            </svg>
                            </div>
                            {!collapsed && <div className="bg-stone-200 last:rounded-b-lg odd:bg-stone-100">
                                <h2 className='text-center text-lg text-neutral-700'>sponsorship applications</h2>
                                {user.animals.map(a => <div
                                    key={a.id}
                                    className='flex gap-10 items-center justify-center
                            p-2'>
                                    <span>{a.title}</span>
                                    <div>
                                        <img src={a.image} alt={a.description} width={50}/>
                                    </div>
                                </div>)}
                            </div>}
                        </div>
                    )}
                </div>
            </>
        )}

    </section>
}
export default UsersPage;