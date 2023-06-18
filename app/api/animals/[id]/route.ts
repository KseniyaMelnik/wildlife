import {connectToDB} from "@/utils/database";
import Animal from "@/models/animal";

export async function GET (req: Request, {params}: {params: {id: string}}) {

    try {
        await connectToDB()

        const animal = await Animal.findOne({id: params.id})
        if (!animal) return new Response("Animal Not Found", { status: 404 });
        return new Response(JSON.stringify(animal), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}