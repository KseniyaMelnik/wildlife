import {Slider} from "@/components/Slider";
import {GlobalLayout} from "@/components/layouts/GlobalLayuot";
import {CSSProperties} from "react";

export default function Home() {

  const backgroundStyle: CSSProperties = {
    backgroundImage: "url('assets/images/hero-background.jpg')",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
   <>
     <GlobalLayout >
         <div style={backgroundStyle} className='h-[100vh] w-auto m-auto flex flex-col items-center justify-end sm:justify-center'>
             <section className='w-[90vw] max-w-[1200px] flex flex-col sm:items-start items-center sm:gap-12 gap-3 lg:pt-0 pt-96'>
                 <h1 className='sm:text-5xl text-4xl text-amber-600'>Survival</h1>
                 <p className='text-amber-50 sm:text-lg text-base max-w-[274px]'>What this means is that we exist to help protect our environment and do in
                     numbers of ways. You can save the planet by donation.</p>
                 <button className='w-[160px] h-[60px] bg-amber-700 hover:bg-amber-600
        rounded-md mb-6
        text-amber-50 text-2xl cursor-pointer'>Donate</button>
             </section>
         </div>

         <section id='articles' className='min-h-[100vh] flex flex-col justify-center items-center bg-stone-300 py-28'>
             <div className='w-[90vw] max-w-[1200px] flex flex-col items-center gap-10'>
                 <h2 className='text-5xl text-neutral-700'>Latest articles</h2>
                 <p className='text-2xl text-neutral-500'>Breaking news from the wild</p>
                 <Slider />
             </div>
         </section>

         <section className='bg-stone-300 flex flex-col items-center'>
             <div className='max-w-[1200px] w-[90vw] flex flex-col items-center gap-10'>
                 <h3 className='text-2xl text-neutral-700 text-center'>Get notified about new amazing articles</h3>
                 <form action="" className='mb-[240px] flex sm:flex-row flex-col items-center sm:gap-0 gap-5'>
                     <input className='
                   sm:w-[440px] w-[90vw] h-[60px] text-2xl p-2 outline-0
                   border-solid border-[1px] border-neutral-600 ' type="text" placeholder="Email"/>
                     <input className='border-solid border-[1px] border-amber-700 bg-amber-700 text-amber-50
                   text-2xl w-[120px] h-[60px] cursor-pointer
                   ' type="submit" value="Send" />
                 </form>
             </div>
         </section>
     </GlobalLayout>
   </>

  )
}
