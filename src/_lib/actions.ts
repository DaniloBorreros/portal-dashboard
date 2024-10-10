"use server";

import { revalidatePath } from "next/cache";
import { StudentSchema } from "./formValidationSchema";
import { prisma } from "./prisma";
import { clerkClient } from "@clerk/nextjs/server";

type CurrentState = { success: boolean; error: boolean };

export const createStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  console.log(data);
  try {
    const user = await clerkClient.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      publicMetadata: { role: "student" },
    });

    await prisma.student.create({
      data: {
        id: user.id,
        studentNumber: data.studentNumber,
        firstName: data.firstName,
        middleInitial: data?.middleInitial,
        lastName: data.lastName,
        username: data.username,
        email: data.email || null,
        password: data.password,
        sex: data.sex,
        birthday: data.birthday,
        photo: data?.photo,
        phone: data?.phone || null,
        yearLevel: data.yearLevel,
        course: data.course,
        section: data.section,
        address: data.address,
        status: data.status,
      },
    });

    return {
      success: true,
      error: false,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: true,
    };
  }
};

export const updateStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  console.log(data);
  if (!data.id) {
    return {
      success: false,
      error: true,
    };
  }
  try {
    const user = await clerkClient.users.updateUser(data.id, {
      username: data.username,
      ...(data.password !== "" && { password: data.password }),
      firstName: data.firstName,
      lastName: data.lastName,
    });

    await prisma.student.update({
      where: {
        id: data.id,
      },
      data: {
        id: user.id,
        studentNumber: data.studentNumber,
        firstName: data.firstName,
        middleInitial: data?.middleInitial,
        lastName: data.lastName,
        username: data.username,
        email: data.email || null,
        password: data.password,
        sex: data.sex,
        birthday: data.birthday,
        photo: data?.photo,
        phone: data?.phone || null,
        yearLevel: data.yearLevel,
        course: data.course,
        section: data.section,
        address: data.address,
        status: data.status,
      },
    });

    return {
      success: true,
      error: false,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: true,
    };
  }
};

export const deleteStudent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await clerkClient.users.deleteUser(id);

    await prisma.student.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};
