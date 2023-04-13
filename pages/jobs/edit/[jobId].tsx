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
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import useCurrentJob from "@/hooks/useCurrentJob";
import EditButtons from "@/components/edit/EditButtons";

type createJobDatatype = z.infer<typeof createJobSchema>;

const Edit = () => {
  //Get the jobId param
  const router = useRouter();
  const { jobId } = router.query;

  //Get the previous job
  const { data: previousJob, isLoading } = useCurrentJob(jobId);
  const [editMode, setEditMode] = useState(false);

  //create the datatype
  const createJobForm = useForm<createJobDatatype>({
    resolver: zodResolver(createJobSchema),
  });

  //submit function
  const { handleSubmit } = createJobForm;
  async function updateJob(credentials: createJobDatatype) {
    try {
      const { data } = await axios.put(
        `/api/jobs/edit?jobId=${jobId}`,
        credentials
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  //delete the job
  const deletejob = async () => {
    try {
      await axios.delete(`/api/jobs/delete?jobId=${jobId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.addContainer}>
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <FormProvider {...createJobForm}>
          <h2 className="text-3xl font-semibold text-white">Update</h2>
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
                <EditButtons onClick={() => setEditMode(true)} />
              )}
            </div>
            <div className=" hidden flex-1 box-border p-3 sm:block">
              <TextArea
                disabled={!editMode}
                name="jobDescription"
                placeholder="Add your full job description here (optional)"
              />
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default Edit;
