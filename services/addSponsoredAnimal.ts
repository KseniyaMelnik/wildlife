import {IAnimal} from "@/types";

export const AddSponsoredAnimal = async (userID: string, animal: IAnimal) => {
    const response = await fetch(`/api/users/${userID}/animals`, {
        method: "POST",
        body: JSON.stringify({
            title: animal.title,
            description: animal.description,
            body: animal.body,
            image: animal.image,
            id: animal.id
        })
    });
    if (!response.ok) console.log('Error adding animal');
    return response.json();
}