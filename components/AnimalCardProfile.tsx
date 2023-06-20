"use client"

import {removeUsersAnimal} from "@/services/removeUsersAnimal";
import {IAnimal} from "@/types";
import Link from "next/link";

type AnimalCardProfileProps = {
    animal: {
        body: string
        description: string
        id: string
        image: string
        title: string
    },
    userId: string,
    setAnimals: (animals: IAnimal[]) => void
}

export const AnimalCardProfile = ({animal, userId, setAnimals}: AnimalCardProfileProps) => {

    const deleteAnimal = () =>  {
        removeUsersAnimal(userId, animal.id).then(setAnimals)
    }

    return <div className='relative'>
        <div className='absolute top-2 right-2 cursor-pointer'
             onClick={deleteAnimal}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" version="1.1" viewBox="0 0 32 32">
                <g transform="scale(2)">
                    <circle fill="#B45309" cx="8" cy="8" r="7"/>
                    <rect fill="#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                    <rect fill="#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
                </g>
            </svg>
        </div>
        <img
            className='
                                    rounded-t-2xl
                                    w-[200px] h-[260px] object-fill'
            src={animal.image} alt={animal.description}
        />
        <p className='
                                rounded-b-2xl bg-stone-400 p-2.5
                                text-emerald-900 font-semibold
                                flex justify-between items-center
                                flex-wrap'>
            <span className='text-lg text-bold text-amber-50'>{animal.title}</span>
            <Link href={`/${animal.id}`} className='cursor-pointer text-sm'>View more</Link>
        </p>
    </div>
}