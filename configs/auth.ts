import type {AuthOptions, User} from 'next-auth'
import GoggleProvider, {GoogleProfile} from 'next-auth/providers/google'
import Credentials, {CredentialsConfig} from 'next-auth/providers/credentials'
import {users} from "@/data/users";
import {OAuthConfig, ProviderType} from "next-auth/providers";

export const authConfig: { pages: { signIn: string };
    providers: (OAuthConfig<GoogleProfile> |
        CredentialsConfig<{ password: { label: string; type: string; required: boolean };
        email: { label: string; type: string; required: boolean } }>)[] } = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Credentials({
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true}
            },
            async authorize(credentials) {
                if(!credentials || !credentials.email || !credentials.password) return null

                const currentUser = users.find(user => user.email === credentials.email)

                if (currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithoutPassword} = currentUser;
                    return userWithoutPassword as User;
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/signin'
    }
}