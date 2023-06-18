import {GlobalLayout} from "@/components/layouts/GlobalLayuot";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contacts | Wildlife',
}

export default function Contact () {
    return <GlobalLayout>
        <section className="mt-[80px] min-h-full bg-stone-300 flex flex-col justify-center items-center">
            <h1 className='text-3xl m-3'> Contacts </h1>
            <div className='w-[90%] max-w-[1200px] py-10 flex justify-between flex-wrap gap-2.5 '>
                <ul className='flex flex-col gap-4 text-lg'>
                    <li>Losi village, Molodechno district</li>
                    <li>Coordinates 54.206870,27.101577</li>
                    <li>Opening hours from 10 to 19 </li>
                    <li><a href="tel:+375291111111" className='text-amber-600'> Contact phone number: +375291111111 </a> Helen </li>
                </ul>
                <iframe
                    className='rounded-2xl border-2 border-amber-700'
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d37339.6508074758!2d27.05262918099151!3d54.20259691080896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTTCsDEyJzI0LjciTiAyN8KwMDYnMDUuNyJF!5e0!3m2!1sru!2sby!4v1686052661010!5m2!1sru!2sby"
                    width="600" height="450" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </section>
    </GlobalLayout>
}