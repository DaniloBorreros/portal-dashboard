import { studentsData } from "@/_lib/data";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserbystudentId } from "@/lib/data";

export const {handlers: {GET, POST }, auth, signIn, signOut} = NextAuth({
    session: {
        strategy: "jwt",
    },
  providers: [
    CredentialsProvider({
        name: 'Credentials',

        credentials: {
            studentNumber: {label: "Student Number", type: "text"},
            password: {label: "Password", type: "password"},
        },

        async authorize(credentials) {
            if(credentials === null) return null; 
            try {
                const user = studentsData(credentials.studentNumber);

                if (user) {
                    const isMatch = user?.password === credentials.password;
                    if (isMatch) {
                        return user;
                    } else {
                        throw new Error('Check your password');
                    }
                } else {
                    throw new Error('No user found');
                }
            } catch (error) {
                throw new Error(error);
            }
        }
    })
  ],
});