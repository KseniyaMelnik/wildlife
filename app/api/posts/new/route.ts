import {connectToDB} from "@/utils/database";
import Post from "@/models/post";
import { v4 } from 'uuid';

export const POST = async (request: Request) => {
    const { title, body } = await request.json();

    try {
        await connectToDB();
        const id = v4();

        const newPost = new Post({ id, title, body });

        await newPost.save();
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new post", { status: 500 });
    }
}