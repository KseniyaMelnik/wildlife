"use client"

import {useSession} from "next-auth/react";
import {AddSponsoredAnimal} from "@/services/addSponsoredAnimal";
import {IAnimal} from "@/types";
import {useEffect, useState} from "react";
import {getUsersAnimals} from "@/services/getAnimals";
import {removeUsersAnimal} from "@/services/removeUsersAnimal";
import {TracksLoader} from "@/components/loaders/TracksLoader";


export const SponsorButton = ({animal}: { animal: IAnimal }) => {

    const {data: session, status} = useSession();
    const user = session?.user

    const [loading, setLoading] = useState(false)
    const [sponsored, setSponsored] = useState(true)

    useEffect(() => {
        if (user) {
            setLoading(true)
            getUsersAnimals(user.id)
                .then(
                    animals => {
                        const isSponsored = animals.find((a: IAnimal) => a.id === animal.id)
                        setSponsored(!!isSponsored)
                    }
                ).finally(() => {
                    setLoading(false)
                }
            )
        }

    }, [])


    const handleBecomeSponsor = async () => {
        setLoading(true)
        try {
            await AddSponsoredAnimal(user!.id, animal)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
            setSponsored(true)
        }
    };

    const handleCancelSponsorship = async () => {
        setLoading(true)
        try {
            await removeUsersAnimal(user!.id, animal.id)
            setSponsored(false)

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return <>
        {loading ? <TracksLoader />
            : <div className='self-end'>
                {status === "authenticated" &&
                sponsored ? <button
                    className='text-lg text-neutral-700 text-bold p-2 border-2 border-amber-700 rounded'
                        onClick={handleCancelSponsorship}
                    > Сancel the sponsorship request </button>
                    : status === "authenticated" && <button
                    className='bg-amber-700 text-lg font-semibold
                        text-amber-50 py-2 px-4 rounded'
                    onClick={handleBecomeSponsor}
                > Become a sponsor </button>
                }
            </div>}
    </>
}