"use client"

import {useEffect, useState} from "react";
import {getAllPosts} from "@/services/getPosts";
import {removePost} from "@/services/removePost";
import {PostModal} from "@/components/PostModal";
import DeerLoader from "@/components/loaders/DeerLoader";
import {IPost} from "@/types";


const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [loading, setLoading] = useState(true)
    const [openPost, setOpenPost] = useState(false)
    const [currentPost, setCurrentPost] = useState({
        id: "",
        title: "",
        body: ""
    })

    const onChangePost = ({id, title, body}: IPost) => {
        setCurrentPost({id, title, body})
        setOpenPost(true)

    }

    const deletePost = (id: string) => {
            setLoading(true)
            removePost(id)
                .then(setPosts)
                .catch((e)=> console.log(e))
                .finally(()=>setLoading(false))
    }

    useEffect(()=> {
        getAllPosts()
            .then(setPosts)
            .finally(()=>setLoading(false))
    }, [])

    return (
        <section className='w-full p-10 bg-white'>
            {loading ? (
                <DeerLoader />
            ) : (
                <>
                    <h2 className='text-2xl text-center mb-3.5'>Posts</h2>
                    <div className='w-90% max-w-[1000px] text-lg m-auto'>
                        <div className='grid grid-cols-[1fr_2fr_0.5fr] bg-amber-700 p-2 rounded-t-lg'>
                            <span> Number </span>
                            <span> Post title </span>
                            <span> Actions </span>
                        </div>
                        {posts.map((post, idx) => <div
                                className='grid grid-cols-[1fr_2fr_0.5fr] p-2
                            bg-stone-200
                            odd:bg-stone-100
                            last:rounded-b-lg'
                                key={post.id}>
                                <span>{idx+1}</span>
                                <span> {post.title} </span>
                                <div className='flex gap-4 items-center'>
                                    <button onClick={()=> onChangePost(post)}>
                                        <img src="/assets/icons/pencil.svg" alt="change" width={20} height={20}/>
                                    </button>
                                    <button onClick={()=>deletePost(post.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" version="1.1" viewBox="0 0 32 32">
                                            <g transform="scale(2)">
                                                <circle fill="#B45309" cx="8" cy="8" r="7"/>
                                                <rect fill="#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                                                <rect fill="#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}

            {openPost && <PostModal id={currentPost.id}
                                    title={currentPost.title}
                                    body={currentPost.body}
                                    setOpenModal={setOpenPost}
                                    setPosts={setPosts}
            />}

        </section>
    );
};

export default PostsPage;