import style from "../../../components/add/add.module.scss";
import TextArea from "@/components/add/TextArea";
import Button from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createJobSchema, jobFormData } from "@/components/add/JobFormData";
import JobInput from "@/components/add/JobInput";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useState } from "react";
import useCurrentJob from "@/hooks/useCurrentJob";
import EditButtons from "@/components/edit/EditButtons";
import HeaderEdit from "@/components/header/HeaderEdit";
import { ClipLoader } from "react-spinners";

type createJobDatatype = z.infer<typeof createJobSchema>;

const Edit = () => {
  //Get the jobId param
  const router = useRouter();
  const { jobId } = router.query;

  //Get the previous job
  const {
    data: previousJob,
    mutate: mutateJob,
    isLoading,
  } = useCurrentJob(jobId);
  const [editMode, setEditMode] = useState(false);

  //create the datatype
  const createJobForm = useForm<createJobDatatype>({
    resolver: zodResolver(createJobSchema),
  });

  //submit function
  const { handleSubmit } = createJobForm;
  async function updateJob(credentials: createJobDatatype) {
    try {
      await axios.put(`/api/jobs/edit?jobId=${jobId}`, credentials);
      toast.success(`'${jobId}' updated succesfully`);
      mutateJob();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      router.push("/");
    }
  }

  const resetFormInputs = () => {
    createJobForm.reset();
  };

  return (
    <div className={style.addContainer}>
      {isLoading ? (
        <ClipLoader color="lightblue" size={80} />
      ) : (
        <>
          <HeaderEdit
            jobName={previousJob.title}
            onResetClick={resetFormInputs}
          />
          <FormProvider {...createJobForm}>
            <form onSubmit={handleSubmit(updateJob)}>
              <div className=" flex flex-1 flex-col items-center justify-around box-border p-2">
                {jobFormData.map((job, index) => (
                  <JobInput
                    name={job.name}
                    key={index}
                    placeholder={job.name}
                    withOptions={job.withOptions}
                    options={job.options}
                    disabled={!editMode}
                    defaultValue={previousJob && previousJob[job.name]}
                  />
                ))}
                {editMode ? (
                  <Button label="Save" outline submit />
                ) : (
                  <EditButtons
                    onClick={() => setEditMode(true)}
                    jobName={previousJob.title}
                  />
                )}
              </div>
              <div className=" hidden flex-1 box-border p-3 sm:block">
                <TextArea
                  disabled={!editMode}
                  name="jobDescription"
                  placeholder="Add your full job description here (optional)"
                  value={previousJob["jobDescription"]}
                />
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default Edit;
