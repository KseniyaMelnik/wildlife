import User from '@/models/user'
import {connectToDB} from "@/utils/database";
import {IAnimal} from "@/types";

export const GET = async (request: Request, { params }: {params: {id: string}}) => {
    try {
        await connectToDB()

        const user = await User.findById(params.id)

        return new Response(JSON.stringify(user.animals), { status: 200 })
    } catch  {
        return new Response("Failed to user's animals", { status: 500 })
    }
}

export const POST = async (request: Request, { params }: {params: {id: string}}) => {
    try {
        await connectToDB()

        const user = await User.findById(params.id)

        if (!user) {
            return new Response('User not found', {status: 404});
        }
        const { id, title, description, body, image } = await request.json();

        const animalExist = user.animals.find((animal: IAnimal) => animal.id === id)
        if (animalExist) {
            return new Response('Animal already added', {status: 202});
        }

        user.animals.push({ id, title, description, body, image });

        await user.save();


        return new Response('Animal added', { status: 200 })
    } catch  {
        return new Response("Failed to added user's animal", { status: 500 })
    }
}

export const PATCH = async (request: Request, { params }: {params: {id: string}}) => {
    try {
        await connectToDB();
        const user = await User.findById(params.id)

        if (!user) {
            return new Response('User not found', {status: 404});
        }
        const {animalId}  = await request.json();

        user.animals = user.animals.filter((animal: IAnimal) => animal.id !== animalId)
        await user.save();

        return new Response(JSON.stringify(user.animals), { status: 200 })
    } catch (error) {
        return new Response(`Failed to remove user's animal ${error}`, { status: 500 });
    }
}




