export const getAllAnimals = async () => {
    const response = await fetch('/api/animals');
    if (!response.ok) throw new Error ('Unable to fetch animals.')
    return response.json();
}

export const getAnimal = async (id: string) => {
    const response = await fetch(`https://wildlife-gamma.vercel.app/api/animals/${id}`, {
        next: {
            revalidate: 60
        }
    });
    return response.json()
}

export const getUsersAnimals = async (id: string) => {
    const response = await fetch(`/api/users/${id}/animals`)
    return response.json();
}