import {Metadata} from "next";
import {getPost} from "@/services/getPosts";
import Link from "next/link";

type PostProps = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}: PostProps): Promise<Metadata> {
    const post = await getPost(id);

    return {
        title: post[0].title
    }
}

export default async function Post({params: {id}}: PostProps) {

    const post = await getPost(id);

    return (
        <>
                <section className='mt-[80px]
                min-h-full bg-stone-300 flex justify-center items-center'>
                    <div className="flex flex-col w-[90%] max-w-[1200px] justify-center items-center py-10">
                    <div className='
                    w-[90%] max-w-[1200px]
                    flex gap-10 items-center justify-center'>
                        <Link href='/blog' className='w-8 h-8
                        flex flex-shrink-0 items-center justify-center
                        border-amber-700 border-2 rounded-3xl
                        hover:bg-amber-700
                        '>&#129044;</Link>
                        <h1 className='text-3xl m-3'>{post[0].title}</h1></div>
                    <p>{post[0].body}</p>
                    </div>
                </section>
        </>
    )
}