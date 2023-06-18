import {GlobalLayout} from "@/components/layouts/GlobalLayuot";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About | Wildlife',
}

export default function About ()  {
    return <GlobalLayout>

        <section className='mt-[80px] bg-stone-300 flex justify-center items-center'>
            <div className='flex flex-col gap-4 max-w-[1200px] w-[90%] p-10'>
                <h2 className='text-2xl text-emerald-900 font-semibold text-center'>Vision</h2>
                <p className='text-lg text-neutral-700'>To be the regional leader in rescuing and conversing wildlife</p>

                <h2 className='text-2xl text-emerald-900 font-semibold text-center'>Mission</h2>
                <p>To provide support to the Indonesian government by applying highest standards of
                    welfare and care in the management of confiscated live animals to optimize ts conversation
                    impact through the innovative development and implementation of recovery programs for threatened
                    Indonesian species and to be of benefit to local communities </p>
            </div>
        </section>

    </GlobalLayout>
}