import {connectToDB} from "@/utils/database";
import Animal from "@/models/animal";

export const config = {
    api: {
    },
}
export async function GET (req: Request) {

    try {
        await connectToDB()

        const animals = await Animal.find({})

        return new Response(JSON.stringify(animals), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all animals", { status: 500 })
    }
}