import style from "../../../components/add/add.module.scss";
import TextArea from "@/components/add/TextArea";
import Button from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createJobSchema, jobFormData } from "@/components/add/JobFormData";
import JobInput from "@/components/add/JobInput";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import useJobs from "@/hooks/usejobs.";
import HeaderEdit from "@/components/header/HeaderEdit";

type createJobDatatype = z.infer<typeof createJobSchema>;

const Add = () => {
  const router = useRouter();
  const createJobForm = useForm<createJobDatatype>({
    resolver: zodResolver(createJobSchema),
  });
  const { handleSubmit } = createJobForm;

  const { mutate: mutateJobs } = useJobs();
  const { data: currentUser } = useCurrentUser();
  async function subTest(credentials: createJobDatatype) {
    try {
      await axios.post("/api/jobs", { ...credentials, userId: currentUser.id });
      toast.success("New job added");
      mutateJobs();
      router.push("/");
    } catch (error) {
      toast.success("Something went wrong");
      console.log(error);
    }
  }

  const resetFormInputs = () => {
    createJobForm.reset();
  };
  return (
    <div className={style.addContainer}>
      <HeaderEdit onResetClick={resetFormInputs} />
      <FormProvider {...createJobForm}>
        <form onSubmit={handleSubmit(subTest)}>
          <div className=" flex flex-1 flex-col items-center justify-around box-border p-2">
            {jobFormData.map((job, index) => (
              <JobInput
                name={job.name}
                key={index}
                placeholder={job.placeholder}
                withOptions={job.withOptions}
                options={job.options}
              />
            ))}
            <Button label="Add" outline submit />
          </div>
          <div className=" hidden flex-1 box-border p-3 sm:block">
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
