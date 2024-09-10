import { prisma } from "@/_lib/prisma";

/**
 * Retrieves a user by their student number.
 * @param studentNum The student number of the user to retrieve.
 * @returns The user if found, otherwise null.
 */
export const getUserByStudentNumber = async (studentNum: string) => {
    return await prisma.user.findUnique({
        where: { studentNum },
    });
}

/**
 * Retrieves a user by their unique identifier.
 * @param id The user's unique identifier.
 * @returns The user if found, otherwise null.
 */
export const getUserById = async (id: string) => {
    return await prisma.user.findUnique({
        where: { id },
    });
}