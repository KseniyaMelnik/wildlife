import DeerLoader from "@/components/loaders/DeerLoader";

export default function Loading() {
    return <div className='w-full min-h-full flex
    justify-center items-center mt-[80px] pt-10
    bg-stone-300'>
        <DeerLoader/>
    </div>
}