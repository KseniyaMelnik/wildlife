"use client"

import {useEffect, useState} from "react";
import DeerLoader from "@/components/loaders/DeerLoader";
import {getAllAnimals} from "@/services/getAnimals";
import {IAnimal} from "@/types";
import {removeAnimal} from "@/services/removeAnimal";

const AnimalsPage = () => {
    const [animals, setAnimals] = useState<IAnimal[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getAllAnimals()
            .then(setAnimals)
            .finally(()=>setLoading(false))
    }, [])

    const deleteAnimal = (id: string) => {
        setLoading(true)
        removeAnimal(id)
            .then(setAnimals)
            .catch((e)=> console.log(e))
            .finally(()=>setLoading(false))
    }

    return (
        <section className='w-full p-10 bg-white'>
            {loading ? (
                <DeerLoader />
            ) : (
                <>
                    <h2 className='text-2xl text-center mb-3.5'> Animals </h2>
                    <div className='w-90% max-w-[1000px] text-lg m-auto'>
                        <div className='grid grid-cols-[0.5fr_1fr_1fr_1fr_0.5fr] bg-amber-700 p-2 rounded-t-lg'>
                            <span> Number </span>
                            <span> Image </span>
                            <span> Name </span>
                            <span> Description </span>
                            <span> Actions </span>
                        </div>
                        {animals.map((animal, idx) => <div
                                className='grid grid-cols-[0.5fr_1fr_1fr_1fr_0.5fr] p-2
                            bg-stone-200
                            items-center
                            odd:bg-stone-100
                            last:rounded-b-lg'
                                key={animal.id}>
                                <span>{idx+1}</span>
                               <div>
                                   <img src={animal.image} alt={animal.title} width={50}/>
                               </div>
                                <span> {animal.title} </span>
                                <span> {animal.description} </span>
                                <div className='flex gap-4 items-center'>
                                    <button onClick={()=> {}}>
                                        <img src="/assets/icons/pencil.svg" alt="change" width={20} height={20}/>
                                    </button>
                                    <button onClick={()=>{deleteAnimal(animal.id)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" version="1.1" viewBox="0 0 32 32">
                                            <g transform="scale(2)">
                                                <circle fill="#B45309" cx="8" cy="8" r="7"/>
                                                <rect fill="#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                                                <rect fill="#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}

        </section>
    );
};

export default AnimalsPage;