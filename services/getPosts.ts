import axios from "axios";

const URL = process.env.BASE_URL

export const getAllPosts = async () => {
    const response = await axios.get(`${URL}/api/posts`)

    if (response.status !== 200) throw new Error ('Unable to fetch posts.')
    return response.data;
}

export const getPosts = async () => {
    const response = await axios.get(`/api/posts`)

    if (response.status !== 200) throw new Error ('Unable to fetch posts.')
    return response.data;
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