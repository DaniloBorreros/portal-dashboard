import { z } from "zod";

export const studentSchema = z.object({
  id: z.string(),
  studentNumber: z
    .number()
    .int()
    .positive()
    .min(1, "Student number is required"),
  firstName: z.string().min(1, "First name is required"),
  middleInitial: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email().optional(),
  password: z.string().min(1, "Password is required"),
  sex: z.enum(["MALE", "FEMALE"]),
  birthday: z.coerce.date({message: "Birthday is required"}),
  photo: z.string().optional(),
  phone: z.string().optional(),
  yearLevel: z.enum(["FIRST", "SECOND", "THIRD", "FOURTH"]),
  course: z.enum([
    "BSIT",
    "BSCS",
    "BSED_MATH",
    "BSED_ENGLISH",
    "BSCRIM",
    "BSP",
    "BSBM_MM",
    "BSBM_HR",
    "BSHM",
  ]),
  section: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  status: z.enum(["REGULAR", "IRREGULAR"]),
});

export type StudentSchema = z.infer<typeof studentSchema>;

export const eventSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1, "Title is required"),
  class: z.string().min(1, "Class is required"),
  date: z.string().min(1, "Date is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
});

export type eventSchemaType = z.infer<typeof eventSchema>;

export const announcementSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Date is required"),
  description: z.string().min(1, "Description is required"),
});

export type announcementSchemaType = z.infer<typeof announcementSchema>;

