import Input from "@/components/inputs/Input";
import style from "../components/add/add.module.scss";
import TextArea from "@/components/add/TextArea";
import Button from "@/components/Button";
import SelectInput from "../components/inputs/SelectInput";
import { useState } from "react";
import InputValidation from "@/components/add/inputValidation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createJobSchema } from "@/components/add/JobFormData";

type createJobDatatype = z.infer<typeof createJobSchema>;

const Add = () => {
  const createJobForm = useForm<createJobDatatype>({
    resolver: zodResolver(createJobSchema),
  });
  const { handleSubmit } = createJobForm;

  function subTest(data: createJobDatatype) {
    console.log(data);
  }
  return (
    <div className={style.addContainer}>
      <FormProvider {...createJobForm}>
        <form className={style.second} onSubmit={handleSubmit(subTest)}>
          <div className=" flex flex-1 flex-col items-center justify-around box-border p-2">
            <InputValidation name="title" placeholder="Title" xsmall />
            <InputValidation name="companyName" placeholder="Company" xsmall />
            <InputValidation
              name="offerSallary"
              placeholder="Offer sallary (optional)"
              xsmall
            />
            <InputValidation
              name="jobUrl"
              placeholder="Job Url (optional)"
              xsmall
            />
            <Button label="Save" outline submit />
          </div>
          <div className=" flex-1 box-border p-3">
            <TextArea placeholder="Add the full job description here (optional)" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Add;
