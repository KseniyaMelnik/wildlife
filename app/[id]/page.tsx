import {Metadata} from "next";
import {getAnimal} from "@/services/getAnimals";
import {GlobalLayout} from "@/components/layouts/GlobalLayuot";

type PostProps = {
    params: {
        id: string
    }
}


export async function generateMetadata({params: {id}}: PostProps): Promise<Metadata> {
    const animal = await getAnimal(id);
    return {
        title: animal.title
    }
}

export default async function Animal({params: {id}}: PostProps) {

    const animal = await getAnimal(id);

    return (
        <GlobalLayout>
            <section className='mt-[80px]
                min-h-full bg-stone-300 flex justify-center items-center'>
                    <div className='
                    w-[90%] max-w-[1200px]
                    flex flex-col gap-4 items-center justify-center p-10'>
                        <h1 className='text-3xl'>{animal.title}</h1>
                    <img src={animal.image} alt={animal.description} />
                    <p className='text-lg text-neutral-700'>{animal.body}</p>
                        <button className='self-end bg-amber-700 text-lg font-semibold
                        text-amber-50 py-2 px-4 rounded'> Become a sponsor </button>
                </div>
            </section>
        </GlobalLayout>
    )
}