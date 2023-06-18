import {NextRequest, NextResponse} from "next/server";
import {connectToDB} from "@/utils/database";
import Post from "@/models/post";

export async function GET (req: Request, {params}: {params: {id: string}}) {
   
    try {
        await connectToDB()

        const post = await Post.find({id: params.id})
        if (!post) return new Response("Post Not Found", { status: 404 });

        return new Response(JSON.stringify(post), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (req: Request, {params}: {params: {id: string}}) => {
    const { title, body } = await req.json();

    try {
        await connectToDB();

        const existingPost = await Post.findOne({id: params.id});

        if (!existingPost) {
            return new Response("Post not found", { status: 404 });
        }

        existingPost.title = title;
        existingPost.body = body;

        await existingPost.save();

        const posts = await Post.find({})

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new Response("Error Updating post", { status: 500 });
    }
};


export async function DELETE (req: Request, {params}: {params: {id: string}}) {
    try {
        await connectToDB();

        await Post.findOneAndRemove({id: params.id});
        const posts = await Post.find({});

        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response("Error deleting post", { status: 500 });
    }
}
