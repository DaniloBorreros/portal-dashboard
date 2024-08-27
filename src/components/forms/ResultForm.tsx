"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFields";


const schema = z.object({
  subject: z.string().min(1, { message: "Subject Name is required!" }),
  class: z.string().min(1, { message: "Class Name is required!" }),
  teacher: z.string().min(1, { message: "Teacher Name is required!" }),
  date: z.string().min(1, { message: "Date is required!" }),
  student: z.string().min(1, { message: "Student Name is required!" }),
  score: z.string().min(1, { message: "Score is required!" }),
  type: z.string().min(1, { message: "Type is required!" }),
  
});

type Inputs = z.infer<typeof schema>;

const ResultForm = ({
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
      <h1 className="text-xl font-semibold">Create Result</h1>
      <div className="flex flex-wrap gap-4 justify-between" >
        <InputField 
          label="Subject Name"
          name="subject"
          defaultValue={data?.subject}
          register={register}
          error={errors?.subject}
          
        />
        <InputField
          label="Class"
          name="class"
          defaultValue={data?.class}
          register={register}
          error={errors?.class}
        />
        <InputField
          label="Student Name"
          name="student"
          defaultValue={data?.student}
          register={register}
          error={errors?.student}
        />
        </div>

        <div className="flex flex-wrap gap-4 justify-between" >
        <InputField 
          label="Teachers Name"
          name="teacher"
          defaultValue={data?.teacher}
          register={register}
          error={errors?.teacher}
        />
        <InputField 
          label="Date"
          name="date"
          defaultValue={data?.date}
          register={register}
          error={errors?.date}
        />
        <InputField 
          label="Score"
          name="score"
          defaultValue={data?.score}
          register={register}
          error={errors?.score}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-between" >
      <InputField 
          label="Type"
          name="type"
          defaultValue={data?.type}
          register={register}
          error={errors?.type}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md ">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ResultForm;