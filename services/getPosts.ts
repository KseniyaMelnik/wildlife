export const getAllPosts = async () => {
    const response = await fetch('/api/posts');
    if (!response.ok) throw new Error ('Unable to fetch posts.')
    return response.json();
}

export const getPostsBySearch = async (search: string) => {
    const response = await fetch (
        `/api/posts?q=${search}`
    )
    if (!response.ok) throw new Error ('Unable to fetch posts.')
    return response.json();
}

export const getPost = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`);
    if (!response.ok) throw new Error ('Post not found')
    return response.json();
}