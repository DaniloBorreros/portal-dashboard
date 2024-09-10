import * as z from "zod";

export const LoginSchema = z.object({
  studentNum: z.string().min(1, { message: "Student Number is required!" }),
  password: z.string().min(1, { message: "Password is required!" }),
});

export const RegisterSchema = z.object({
  studentNum: z.string().min(1, { message: "Student Number is required!" }),
  password: z.string().min(6, { message: "Minimum of 6 characters required!" }),
  firstName: z.string().min(1, { message: "First Name is required!" }),
  middleName: z.string().min(1, { message: "Middle Name is required!" }),
  lastName: z.string().min(1, { message: "Last Name is required!" }),
  email: z.string().email({ message: "Email is required!" }),
});
