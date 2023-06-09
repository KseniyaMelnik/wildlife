import type {AuthOptions} from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'
import Credentials, {CredentialsConfig} from 'next-auth/providers/credentials'
import {users} from "@/data/users";
import {OAuthConfig} from "next-auth/providers";
import User from '@/models/user';
import {connectToDB} from "@/utils/database";

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
      /*  Credentials({
            id: "credentials",
            name: "Credentials",
            type: "credentials",
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true}
            },
            async authorize(credentials) {
                if(!credentials || !credentials.email || !credentials.password) return null

                const currentUser = sponsors.find(user => user.email === credentials.email)

                if (currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithoutPassword} = currentUser;
                    return userWithoutPassword as User;
                }

                return null
            }
        })*/
    ],
    callbacks: {
        async session({ session }) {
            if (session.user) {
                const sessionUser = await User.findOne({email: session.user.email});
                session.user.id = sessionUser._id.toString();
            }
            return session;
        },
        async signIn({profile, user, credentials }) {
            try {
                await connectToDB();
                const userExists = await User.findOne({ email: profile!.email });

                if (!userExists) {
                    await User.create({
                        email: profile!.email,
                        username: profile!.name?.replace(" ", "").toLowerCase(),
                        image: profile!.picture,
                    });
                }

                return true
            } catch (error: any) {
                console.log("Error checking if user exists: ",  error.message);
                return false
            }
        },
    },
    pages: {
        signIn: '/signin'
    }
}