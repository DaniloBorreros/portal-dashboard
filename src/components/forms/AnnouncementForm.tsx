"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFields";


const schema = z.object({
title: z.string().min(1, { message: "Title is required!" }),
class: z.string().min(1, { message: "Class Name is required!" }),
date: z.string().min(1, { message: "Date is required!" }),
});

type Inputs = z.infer<typeof schema>;

const AnnouncementForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create Announcement</h1>
      <div className="flex flex-wrap gap-4 justify-between" >
        <InputField 
          label="Title"
          name="title"
          defaultValue={data?.title}
          register={register}
          error={errors?.title}
          
        />
        <InputField
          label="Class"
          name="class"
          defaultValue={data?.class}
          register={register}
          error={errors?.class}
        />
        <InputField 
          label="Date"
          name="date"
          defaultValue={data?.date}
          register={register}
          error={errors?.date}
          
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md ">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AnnouncementForm;