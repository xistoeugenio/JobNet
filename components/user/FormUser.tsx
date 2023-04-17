import { FormProvider, useForm } from "react-hook-form";
import InputValidator from "../inputs/InputValidator";
import Button from "../Button";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import InputPhone from "../inputs/InputPhone/InputPhone";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema } from "@/utils/formUser";
import { toast } from "react-hot-toast";
import { useState } from "react";

const FormUser = () => {
  const [loading, setLoading] = useState(false);

  const createUserForm = useForm<updateUserDatatype>({
    resolver: zodResolver(updateUserSchema),
  });
  const { handleSubmit, control } = createUserForm;
  const { data: currentUser, mutate } = useCurrentUser();

  type updateUserDatatype = z.infer<typeof updateUserSchema>;

  const updateUser = async (credentials: updateUserDatatype) => {
    try {
      setLoading(true);

      await axios.put(`/api/user/update?userId=${currentUser.id}`, {
        name: credentials.name,
        phoneNumber: credentials.phoneNumber || "",
      });

      toast.success("Updated succesfully");
      mutate();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <FormProvider {...createUserForm}>
        {" "}
        <form
          className=" bg-neutral-950 flex-1 flex justify-center rounded-md border-neutral-800 border-2"
          onSubmit={handleSubmit(updateUser)}
        >
          <div className="h-full w-96 flex flex-col justify-between gap-5 p-5">
            <div className="h-4/5 max-h-60 flex flex-col justify-between">
              <InputValidator
                name="email"
                placeholder="Email"
                small
                disabled
                required={false}
                defaultValue={currentUser.email}
              />
              <InputValidator
                name="name"
                placeholder="Name"
                small
                defaultValue={currentUser.name}
              />
              <InputPhone
                name="phoneNumber"
                control={control}
                defaultValue={currentUser.phoneNumber}
              />
            </div>
            <Button label="Save" disabled={loading} outline fullWidth submit />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default FormUser;
