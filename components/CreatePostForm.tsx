"use client";

import {FormEvent, useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export const CreatePostForm = () => {
    const router = useRouter();

    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ title: "", body: "" });

    const createPost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/posts/new", {
                method: "POST",
                body: JSON.stringify({
                    title: post.title,
                    body: post.body,
                }),
            });

            if (response.ok) {
                router.push("/admin/posts");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
            <form
                onSubmit={createPost}
                className='p-5
                w-full max-w-[1200px] flex flex-col gap-7 bg-green-900
                rounded'
            >
                <label className='grid grid-cols-2 items-center'>
          <span className='font-satoshi font-semibold text-base text-amber-50'>
            Your Title
          </span>

                    <textarea
                        value={post.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                        placeholder='Write your title here'
                        required
                        className='rounded p-2.5 border-amber-500 border-2
                        outline-0'
                    />
                </label>

                <label className='grid grid-cols-2 items-center'>
          <span className='font-satoshi font-semibold text-base text-amber-50'>
               Your post
          </span>
                    <textarea
                        value={post.body}
                        onChange={(e) => setPost({ ...post, body: e.target.value })}
                        placeholder='Write your post here'
                        required
                        rows={15}
                        className='rounded p-2.5 border-amber-500 border-2
                        outline-0'
                    />
                </label>

                <div className='w-full flex justify-between items-center'>
                    <Link href='/' className='text-gray-300 text-lg font-bold'>
                        🠔 Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-10 py-1.5 text-lg bg-amber-700 rounded-full text-white
                        border-2 border-amber-700 uppercase
                        '
                    >
                        {submitting ? 'submitting' : 'submit'}
                    </button>
                </div>
            </form>

    );
};

