import style from "../../../components/add/add.module.scss";
import Button from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createJobSchema, jobFormData } from "@/components/add/JobFormData";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import useJobs from "@/hooks/usejobs.";
import { resumeUpload } from "@/services/resumePdf";

//Components
import DescriptionContainer from "@/components/add/DescriptionContainer";
import HeaderEdit from "@/components/header/HeaderEdit";
import JobInput from "@/components/add/JobInput";

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

    if (credentials.resume instanceof File) {
      //this is responsible to upload to firebase
      try {
        const resumeUrl = await resumeUpload(credentials.resume);
        credentials = {...credentials, resume: resumeUrl }
      } catch (error) {
        toast.error('Your resume faild')
        console.log(error);
      }
    }

    //This cadd a new job to mongoDb

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
          <div className="hidden flex-1 box-border p-3 sm:block">
            <DescriptionContainer />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Add;
