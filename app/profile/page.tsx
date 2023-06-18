import {getServerSession} from "next-auth/next";
import {authConfig} from "@/configs/auth";
import {GlobalLayout} from "@/components/layouts/GlobalLayuot";

export default async function Profile () {

    //@ts-ignore
    const session = await getServerSession(authConfig);

    return <GlobalLayout>
        <div className='mt-[80px] bg-stone-300 flex justify-center items-center'>
            <div>
                <h1>Hi, {session?.user?.name }</h1>
                {session?.user?.image && <img src={session.user.image} alt={''} />}
            </div>
        </div>
    </GlobalLayout>
}