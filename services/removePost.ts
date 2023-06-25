const URL = process.env.BASE_URL

export const removePost = async (id: string) => {
    const response = await fetch(`${URL}/api/posts/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error ('Post not found')
    return response.json();
}