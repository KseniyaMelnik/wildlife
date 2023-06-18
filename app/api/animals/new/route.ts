import {connectToDB} from "@/utils/database";
import {v4} from 'uuid';
import Animal from "@/models/animal";

export const POST = async (request: Request) => {

    /*const formData = await request.formData()
    console.log(formData)*/
    const { title, description, body, image } = await request.json();

    try {
        await connectToDB();
        const id = v4();

        const newAnimal = new Animal({ id, title, description, body, image });

        await newAnimal.save();
        return new Response(JSON.stringify(newAnimal), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new animal", { status: 500 });
    }
}