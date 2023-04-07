import style from "../components/add/add.module.scss";
import TextArea from "@/components/add/TextArea";
import Button from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createJobSchema, jobFormData } from "@/components/add/JobFormData";
import JobInput from "@/components/add/JobInput";

type createJobDatatype = z.infer<typeof createJobSchema>;

const Add = () => {
  const createJobForm = useForm<createJobDatatype>({
    resolver: zodResolver(createJobSchema),
  });
  const { handleSubmit } = createJobForm;

  function subTest(data: createJobDatatype) {
    //TODO the send data function
    console.log(data);
  }
  return (
    <div className={style.addContainer}>
      <FormProvider {...createJobForm}>
        <form onSubmit={handleSubmit(subTest)}>
          <div className=" flex flex-1 flex-col items-center justify-around box-border p-2">
            {jobFormData.map((job, index) => (
              <JobInput
                name={job.name}
                key={index}
                placeholder={job.name}
                withOptions={job.withOptions}
                options={job.options}
              />
            ))}
            <Button label="Add" outline submit />
          </div>
          <div className=" flex-1 box-border p-3">
            <TextArea
              name="jobDescription"
              placeholder="Add your full job description here (optional)"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Add;
