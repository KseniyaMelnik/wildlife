import {NextResponse} from "next/server";
import {connectToDB} from "@/utils/database";
import Post from "@/models/post";

export async function GET (req: Request) {
    //const {searchParams} = new URL (req.url)
    //const query = searchParams.get('q')
    //let currentPosts = posts;
    //if (query) {
    //    currentPosts = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    //}
  //return NextResponse.json(currentPosts)

  try {
    await connectToDB()

    const posts = await Post.find({})

    const response = new NextResponse(JSON.stringify(posts), { status: 200 })

    response.headers.set(
            'Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate'
    )

    return response
} catch (error) {
    return new Response("Failed to fetch all posts", { status: 500 })
}
}


