"use client"

import {GlobalLayout} from "@/components/layouts/GlobalLayuot";
import {getUsersAnimals} from "@/services/getAnimals";
import Link from "next/link";
import {AnimalCardProfile} from "@/components/AnimalCardProfile";
import {useSession} from "next-auth/react";
import {useState, useEffect} from "react";
import DeerLoader from "@/components/loaders/DeerLoader";
import {IAnimal} from "@/types";
import {TracksLoader} from "@/components/loaders/TracksLoader";

export default function Profile() {

    const {data: session, status} = useSession();

    const user = session?.user

    const [animals, setAnimals] = useState<IAnimal[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (user) {
            setIsLoading(true)
            getUsersAnimals(user.id)
                .then(setAnimals)
                .finally(() => setIsLoading(false))
        }
    }, [user]);


    return <GlobalLayout>

        <div className='mt-[80px] bg-stone-300 flex flex-col justify-center items-center p-10 gap-10'>
            {status === 'loading'
                ? <DeerLoader/>

                : <>
                    <div className='flex gap-10 items-center'>
                        <h1 className='text-2xl text-neutral-600'>Hi, {user?.name}</h1>
                        {user?.image && <img
                            className='rounded-full'
                            src={user.image} alt={''}/>}
                    </div>

                    {isLoading && <TracksLoader /> }
                    {!isLoading && animals.length > 0 ?

                        <>
                            <p className='text-base font-semibold text-neutral-700'>
                                You have applied for sponsorship for the following pets:
                            </p>
                            <div className="flex gap-4 w-[90%] max-w-[1200px] flex-wrap justify-center items-center">
                                {animals.map(animal => (
                                    <AnimalCardProfile animal={animal} userId={user!.id} key={animal.id}
                                                       setAnimals={setAnimals}
                                    />
                                ))}
                            </div>
                            <p className='text-base font-semibold text-neutral-700'>
                                Our manager will send detailed instructions by email shortly
                            </p>
                        </>

                        : !isLoading && <div className='flex flex-col gap-2.5'>
                            <p className='text-2xl text-center text-neutral-700'>
                                You don&apos;t have sponsorship applications yet
                            </p>
                            <Link href={'http://localhost:3000/#animals'}
                                  className='self-end text-emerald-900 text-lg font-semibold'
                            >Look at the animals ➔ </Link>
                        </div>
                    }</>}
        </div>


    </GlobalLayout>
}