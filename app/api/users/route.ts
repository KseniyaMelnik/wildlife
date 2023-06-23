import {connectToDB} from "@/utils/database";
import User from "@/models/user";

export async function GET (req: Request) {

    try {
        await connectToDB()

        const users = await User.find({})

        return new Response(JSON.stringify(users), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all sponsors", { status: 500 })
    }
}