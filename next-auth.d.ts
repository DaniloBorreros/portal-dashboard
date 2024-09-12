import "next-auth/jwt"

declare module "next-auth" {
    interface User {
        role: Userole
    }

    declare module "next-auth/jwt" {
        interface JWT {
            role: Userole
        }
    }
}