import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import type { NextAuthConfig } from "next-auth";

import { LoginSchema } from "./schemas";
import { getUserByStudentNumber } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { studentNum, password } = validatedFields.data;

          const user = await getUserByStudentNumber(studentNum);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcryptjs.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;