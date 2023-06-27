"use client"
import {getPosts} from "@/services/getPosts";
import {Posts} from "@/components/Posts";
import DeerLoader from "@/components/loaders/DeerLoader";
import Link from "next/link";
import {IPost} from "@/types";
import {InferGetServerSidePropsType} from "next";
import { useEffect, useState } from "react";




export default async function Blog() {

    const [posts, setPosts] = useState([])
   const [loading, setLoading] = useState(true)

    useEffect(()=> {
      getPosts()
          .then(setPosts)
          .finally(()=>setLoading(false))
    }, [])

    return (
            <section className='mt-[80px] min-h-full bg-stone-300 flex flex-col justify-center items-center'>
                <h1 className='text-3xl m-3'> Articles </h1>
                <ul className='w-[90%] max-w-[1200px] flex flex-col gap-2.5 text-lg'>
                    {posts.map((post: IPost)=> (
                        <li key={post.id} className='hover:text-amber-700'>
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
    )
}