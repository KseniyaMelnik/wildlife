"use client"
import {Accordion} from "@/components/Accordion";
import {CreateAnimalForm} from "@/components/CreateAnimalForm";
import {CreatePostForm} from "@/components/CreatePostForm";

const CreateContentPage = () => {

    return(
        <section className='w-full p-10 bg-white flex flex-col gap-2.5'>
            <Accordion title='Create animal'>
                <CreateAnimalForm/>
            </Accordion>

            <Accordion title='Create post'>
                <CreatePostForm/>
            </Accordion>
        </section>
    );
};

export default CreateContentPage;