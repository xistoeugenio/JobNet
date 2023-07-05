"use client";

import style from "@/components/add/add.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createJobSchema, jobFormData } from "@/components/add/JobFormData";
import axios from "axios";
import { toast } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

//components
import HeaderEdit from "@/components/header/HeaderEdit";
import EditButtons from "@/components/edit/EditButtons";
import JobInput from "@/components/add/JobInput";
import Button from "@/components/Button";
import DescriptionContainer from "@/components/add/DescriptionContainer";

type createJobDatatype = z.infer<typeof createJobSchema>;

interface AddFormJobProps {
  currentJobValues?: any
}

const AddFormJob: React.FC<AddFormJobProps> = ({ currentJobValues }) => {
  const [uploading, setUploading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const router = useRouter()


  //create the datatype
  const createJobForm = useForm<createJobDatatype>({
    resolver: zodResolver(createJobSchema),
  });

  //submit function
  const { handleSubmit } = createJobForm;
  async function updateJob(credentials: createJobDatatype) {
    setUploading(true);
    try {
      await axios.put(`/api/${currentJobValues.id}/job`, credentials);
      toast.success(`'${currentJobValues.id}' updated succesfully`);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      router.push('/')
    }
  }

  const resetFormInputs = () => {
    createJobForm.reset();
  };


  return (
    <div className={style.addContainer}>
      <HeaderEdit jobName={currentJobValues.title} onResetClick={resetFormInputs} />
      <FormProvider {...createJobForm}>
        <form onSubmit={handleSubmit(updateJob)}>
          <div className=" flex flex-1 flex-col items-center justify-around box-border p-2">
            {jobFormData.map((job, index) => (
              <JobInput
                name={job.name}
                key={index}
                placeholder={job.placeholder}
                withOptions={job.withOptions}
                options={job.options}
                disabled={!editMode}
                defaultValue={currentJobValues[job.name] || ''}
              />
            ))}
            {editMode ? (
              uploading ? (
                <ScaleLoader
                  color="lightblue"
                  width={10}
                  height={37}
                  margin={3}
                />
              ) : (
                <Button label="Add" outline submit />
              )
            ) : (
              <EditButtons
                onClick={() => setEditMode(true)}
                jobName={currentJobValues.title}
                jobId={currentJobValues.id}
              />
            )}
          </div>
          <div className=" hidden flex-1 box-border p-3 sm:block">
            <DescriptionContainer
              description={currentJobValues["jobDescription"] || ''}
              resume={currentJobValues["resume"] || ''}
              disabled={!editMode}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddFormJob;
