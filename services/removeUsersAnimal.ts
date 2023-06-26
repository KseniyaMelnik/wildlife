export const removeUsersAnimal = async (userID: string, animalId: string) => {
    const response = await fetch(`/api/users/${userID}/animals`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            animalId
        })
    });
    if (!response.ok) throw new Error ('Animal not found')
    return response.json();
}
