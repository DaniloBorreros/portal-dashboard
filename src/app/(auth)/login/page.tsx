"use client";

import Image from "next/image";
import { startTransition, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "../../../../schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";
import { login } from "../../../../actions/login";
import { useTransition } from "react";

const LoginPage = () => {

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, isTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      studentNum: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values)
      .then((data) => {
        setError(data.error);
        setSuccess(data.success)
      })
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-1 hidden md:flex items-center justify-center bg-gradient-to-b from-yellow-300 to-blue-700 h-full">
        {/* <Image
          src="/csuLogo.png"
          alt="Logo"
          width={300}
          height={300}
        /> */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/csuLogo.png"
            alt="CSU Logo"
            width={300}
            height={300}
            className="mb-10"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white">
              CAVITE STATE UNIVERSITY
            </h1>
            <p className="font-bold text-center text-white">
              BACOOR CITY CAMPUS
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1  bg-white">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-md mx-auto"
          >
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-blue-700">
                Student Portal
              </h1>
            </div>
            <h1 className="text-3xl font-bold text-left mb-4 text-gray-700">
              Login
            </h1>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="studentNum"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block mb-2">Student Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className="w-full px-4 py-2 border-2 border-blue-700 rounded-md"
                        placeholder="20010825"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block mb-2">Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className="w-full px-4 py-2 border-2 border-blue-700 rounded-md"
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-sm">
                  Remember me
                </label>
              </div>
              <p className="text-sm text-right">
                Dont have an account?
                <a href="/register">&nbsp; Create Request</a>
              </p>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              className="w-full mt-4 px-6 py-5 hover:bg-blue-900 bg-blue-700 text-white rounded-md"
              disabled={isPending}
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
