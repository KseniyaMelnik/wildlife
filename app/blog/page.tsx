'use client';

import {Metadata} from "next";
import {useEffect, useState} from "react";
import {getAllPosts} from "@/services/getPosts";
import {Posts} from "@/components/Posts";
import DeerLoader from "@/components/loaders/DeerLoader";


const metadata: Metadata = {
    title: 'Blog | Wildlife',
}

export default function Blog() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
      getAllPosts()
          .then(setPosts)
          .finally(()=>setLoading(false))
    }, [])

    return (
            <section className='mt-[80px] min-h-full bg-stone-300 flex flex-col justify-center items-center'>
                <h1 className='text-3xl m-3'> Articles </h1>
                {loading ? (
                       <DeerLoader />
                ) : (
                    <Posts posts={posts} />
                )}
            </section>
    )
}