import {GlobalLayout} from "@/components/layouts/GlobalLayuot";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Help | Wildlife',
}

export default function Help ()  {
    return <GlobalLayout>

        <section className='mt-[80px] bg-stone-300 flex justify-center items-center'>
            <div className='flex flex-col gap-4 max-w-[1200px] w-[90%] p-10'>
                <p className='text-lg text-neutral-700'>The Wildlife has no state funding.
                    This means that it is run solely by volunteers and charitable donations.</p>
                <p className='text-lg text-neutral-700' >Every day the centre saves lives. Every day we need your help.
                    We appreciate everyone&apos;s involvement. Thank you to everyone who is already with us! </p>
                <dl className='flex flex-col gap-2.5 text-emerald-900 text-lg max-w-[800px]'>You can help the centre in one of the following ways:
                    <li>
                        By transferring money to account BY46BLBB301501930568001001, UNP 193056668
                        OAO Belinvestbank, BIK VLBBBY2X, OKPO 37558116
                        г. Minsk, 11-2 Kollektornaya Street.
                    </li>
                    <li>
                        By transferring money using Settlement system (ERIP). You should choose
                        Public associations - Nature protection - Help centre Kestelga - Contributions for strengthening of material and technical basis.
                        To pay please enter your phone number in format 80YYXXXXXXX - Check for correct information - Confirm payment.
                    </li>
                    <li>
                        OR System (ERIP) - Pay by service code in ERIP - enter code 4481871.
                    </li>
                    <li>
                        Make transfer to your WebMoney Z211218656886 or R011014510618 wallet.
                    </li>
                    <li>
                        Become a guardian of someone in the centre.
                    </li>
                    <li>
                        Donate food and care items in Minsk, Dzerzhinsk, Vitebsk.
                    </li>
                    <li>
                        Take a tour, the earnings from which will be used for the development of the centre
                        (Registration by phone +375 29 191-38-78).
                    </li>
                </dl>
            </div>
        </section>

    </GlobalLayout>
}