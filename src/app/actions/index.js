"use server";

import { signIn, signOut } from "@/auth";

export async function doCredentialLogin(formData) {
  try {
    const response = await signIn("credentials", {
        studentNumber: formData.get("studentNumber"),
        password: formData.get("password"),
        redirect: false,
    });
    return response
  } catch (err) {
    throw new Error(err);
  }
}
