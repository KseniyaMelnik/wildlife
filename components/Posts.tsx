import Link from "next/link";
import {IPost} from "@/types";

type PostsProps = {
    posts: any[]
}
export const Posts = ({posts}: PostsProps) => {
    return <ul className='w-[90%] max-w-[1200px] flex flex-col gap-2.5 text-lg'>
        {posts.map((post: IPost)=> (
            <li key={post.id} className='hover:text-amber-700'>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
        ))}
    </ul>
}