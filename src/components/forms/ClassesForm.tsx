"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFields";


const schema = z.object({
  classname: z.string().min(1, { message: "Class Name Name is required!" }),
  capacity: z.string().min(1, { message: "Capacity is required!" }),
  grade: z.string().min(1, { message: "Grade Level is required!" }),
  teacher: z.string().min(1, { message: "Teacher Name is required!" }),
});

type Inputs = z.infer<typeof schema>;

const ClassesForm = ({
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
      <h1 className="text-xl font-semibold">Create a Class</h1>
      <div className="flex flex-wrap gap-2 justify-between" >
        <InputField 
          label="Class Name"
          name="classname"
          defaultValue={data?.name}
          register={register}
          error={errors?.classname}
          
        />
        <InputField
          label="Capacity"
          name="capacity"
          defaultValue={data?.capacity}
          register={register}
          error={errors?.capacity}
        />
        <InputField
          label="Grade"
          name="grade"
          defaultValue={data?.grade}
          register={register}
          error={errors?.grade}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Teacher
      </span>
      <div className="flex flex-wrap gap-2 justify-between" >
      <InputField
          label="Supervisor"
          name="teacher"
          defaultValue={data?.supervisor}
          register={register}
          error={errors?.teacher}
        />
      </div>


      <button className="bg-blue-400 text-white p-2 rounded-md ">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ClassesForm;