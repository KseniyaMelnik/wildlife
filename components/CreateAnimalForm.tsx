"use client";

import {ChangeEvent, FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export const CreateAnimalForm = () => {

    const router = useRouter();

    const [submitting, setIsSubmitting] = useState(false);
    const [animal, setAnimal] = useState({
        id: '',
        title: '',
        description: '',
        body: '',
        image: '',
    });


    const createAnimal = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
           // const imageUrl = await uploadImage()

            const response = await fetch("/api/animals/new", {
                method: "POST",
                body: JSON.stringify({
                    title: animal.title,
                    description: animal.description,
                    body: animal.body,
                    image: animal.image
                })
            });

            if (response.ok) {
                router.push("/");
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setAnimal((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setAnimal((prevState) => ({
                ...prevState,
                image: reader.result as string,
            }));
        };
    };


    return (
        <form
            onSubmit={(e) => createAnimal(e)}
            className='p-5
                w-full max-w-[1200px] flex flex-col gap-7 bg-green-900
                rounded'
        >
            <label className='grid grid-cols-2 items-center'>
      <span className='font-satoshi font-semibold text-base text-amber-50'>
        Your animal name
      </span>

                <textarea
                    value={animal.title}
                    name="title"
                    onChange={handleInputChange}
                    placeholder='Write your animal name here'
                    required
                    className='rounded p-2.5 border-amber-500 border-2
                        outline-0'
                />
            </label>

            <label className='grid grid-cols-2 items-center'>
      <span className='font-satoshi font-semibold text-base text-amber-50'>
        Your animal description
      </span>

                <textarea
                    value={animal.description}
                    name="description"
                    onChange={handleInputChange}
                    placeholder='Write your animal description here'
                    required
                    className='rounded p-2.5 border-amber-500 border-2
                        outline-0'
                />
            </label>

            <label className='grid grid-cols-2 items-center'>
      <span className='font-satoshi font-semibold text-base text-amber-50'>
           Your history
      </span>
                <textarea
                    value={animal.body}
                    name="body"
                    onChange={handleInputChange}
                    placeholder='Write your history here'
                    rows={15}
                    required
                    className='rounded p-2.5 border-amber-500 border-2
                        outline-0'
                />
            </label>

            <label className='grid grid-cols-2 items-center'>

      <span className='font-satoshi font-semibold text-base text-amber-50'>
           Your animal image
      </span>
                <input
                    name="image"
                    type="file"
                    id="fileImg"
                    multiple
                    accept="image/png, image/jpeg image/jpg"
                    onChange={handleImageChange}
                    required
                    className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-amber-600 file:text-amber-50
                        hover:file:bg-amber-700 cursor-pointer
                        file:cursor-pointer"
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
        </form>)
};

