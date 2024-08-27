"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFields";


const schema = z.object({
  subject: z.string().min(1, { message: "Subject Name is required!" }),
  teacher: z.string().min(1, { message: "Teacher Name is required!" }),
});

type Inputs = z.infer<typeof schema>;

const SubjectForm = ({
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
      <h1 className="text-xl font-semibold">
      {type === "create" ? "Add Subjects" : "Update Subject"}
      </h1>
      <div className="flex flex-wrap gap-4" >
        <InputField 
          label="Subject"
          name="subject"
          defaultValue={data?.name}
          register={register}
          error={errors?.subject}
          
        />
        <InputField
          label="Teacher"
          name="teacher"
          defaultValue={data?.teachers}
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

export default SubjectForm;