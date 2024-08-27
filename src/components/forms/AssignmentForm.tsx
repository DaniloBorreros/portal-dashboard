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
});

type Inputs = z.infer<typeof schema>;

const AssignmentForm = ({
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
      <h1 className="text-xl font-semibold">Create Assignment</h1>
      <div className="flex flex-wrap gap-4 justify-between" >
        <InputField 
          label="Subject"
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
          label="Teacher"
          name="teacher"
          defaultValue={data?.teacher}
          register={register}
          error={errors?.teacher}
          
        />
        <InputField
          label=" Due Date"
          name="date"
          defaultValue={data?.dueDate}
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

export default AssignmentForm;