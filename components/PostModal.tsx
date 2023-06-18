"use client"
import {FormEvent, useState} from "react";

type PostModalProps = {
    id: string,
    title: string,
    body: string,
    setOpenModal: (isOpen: boolean) => void,
    setPosts: (posts: Array<{id: string, title: string, body: string}>) => void
}
export const PostModal = ({id, title, body, setOpenModal, setPosts}: PostModalProps) => {
    const [newTitle, setNewTitle] = useState(title)
    const [newBody, setNewBody] = useState(body)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onClose = () => {
        setOpenModal(false)
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true);

        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    title: newTitle,
                    body: newBody,
                }),
            });

            if (response.ok) {
                setPosts(await response.json())
                setOpenModal(false)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return <div className='absolute top-0 left-0 w-full min-h-[100vh] bg-opacity-80 bg-green-900
    flex items-center justify-center
    '>
       <div className='flex flex-col w-[90%] max-w-5xl bg-amber-50 rounded-2xl p-5'>
           <button onClick={onClose} className='text-4xl self-end text-amber-700'>×</button>
           <form onSubmit={onSubmit} className='flex flex-col gap-2.5'>
               <label className='flex flex-col gap-2.5 text-lg'>
                   Your title
                   <input type="text"
                          value={newTitle}
                          onChange={(e)=> setNewTitle(e.currentTarget.value)}
                          className='w-full border-amber-700 border-2 rounded-2xl
                       p-2.5 outline-0'
                   />
               </label>
               <label className='flex flex-col gap-2.5 text-lg'>
                   Your post
                   <textarea
                       value={newBody}
                       onChange={(e)=> setNewBody(e.currentTarget.value)}
                       rows={15}
                       className='w-full border-amber-700 border-2 rounded-2xl
                       p-2.5 outline-0'
                   />
               </label>
               <div className="flex justify-between items-center">
                   <button type="button"
                           className="text-lg uppercase bg-stone-400
                       w-32 py-2 rounded-2xl text-amber-50 font-semibold"
                           onClick={onClose}
                   >
                       cancel
                   </button>
                   <button type="submit"
                           className='text-lg uppercase bg-amber-700
                       w-32 py-2 rounded-2xl text-amber-50 font-semibold'
                   >
                       {isSubmitting? "updating": "update"}
                   </button>
               </div>
           </form>
       </div>
    </div>
}