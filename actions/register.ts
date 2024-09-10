"use server";

import bcrypt from "bcrypt";
import * as z from "zod";

import { prisma } from "@/_lib/prisma";
import { RegisterSchema } from "../schemas";
import { getUserByStudentNumber } from "../data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { password, firstName, middleName, lastName, email, studentNum } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByStudentNumber(studentNum);

  const existingEmail = await prisma.user.findUnique({
    where: { email },
  });

  if (existingEmail) {
    return { error: "Email already exists!" };
  }

  if (existingUser) {
    return { error: "Student number already exists!" };
  }

  await prisma.user.create({
    data: {
      studentNum,
      firstName,
      middleName,
      lastName,
      email,
      password: hashedPassword,
    },
  })

  //TODO: SEND VERIFICATION TOKEN EMAIL

  return { success: "User created!" };
};
