
export const removeAnimal = async (id: string) => {
    const response = await fetch(`/api/animals/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error ('Post not found')
    return response.json();
}