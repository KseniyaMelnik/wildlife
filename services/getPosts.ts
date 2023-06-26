const URL = process.env.BASE_URL

export const getAllPosts = async () => {
    const response = await fetch('/api/posts', {
        headers: {
            'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate'
        },
        next: {
            revalidate: 0
        }
    });
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
    const response = await fetch( `${URL}/api/posts/${id}`);
    if (!response.ok) throw new Error ('Post not found')
    return response.json();
}