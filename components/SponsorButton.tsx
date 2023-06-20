"use client"

import {useSession} from "next-auth/react";

type SponsorButtonProps = {
    animal: {
        title: string,
        description: string,
        body: string,
        image: string,
        id: string
    }
}

export const SponsorButton = ({animal}: SponsorButtonProps) => {

    const { data: session } = useSession();

     const handleClick = async () => {

        try {
            const response = await fetch(`http://localhost:3000/api/users/${session?.user.id}/animals`, {
                method: "POST",
                body: JSON.stringify({
                    title: animal.title,
                    description: animal.description,
                    body: animal.body,
                    image: animal.image,
                    id: animal.id
                })
            });

            if (response.ok) {
                console.log('Animal added');
            } else {
                console.error('Error adding animal');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return <button
        className='self-end bg-amber-700 text-lg font-semibold
                        text-amber-50 py-2 px-4 rounded'
        onClick={handleClick}
    > Become a sponsor </button>
}