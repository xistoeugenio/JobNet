import { FormProvider, useForm } from "react-hook-form";
import InputValidator from "../inputs/InputValidator";
import Button from "../Button";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import InputPhone from "../inputs/InputPhone/InputPhone";

const FormUser = () => {
  const createUserForm = useForm();
  const { handleSubmit, control } = createUserForm;
  const { data: currentUser } = useCurrentUser();

  const updateUser = async (credentials) => {
    try {
      await axios.put(`/api/user/update?userId=${currentUser.id}`, {
        name: credentials.name,
        email: credentials.email,
        phoneNumber: credentials.phoneNumber || "",
      });
      console.log(credentials)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {currentUser ? (
        <FormProvider {...createUserForm}>
          {" "}
          <form
            className=" bg-neutral-950 flex-1 flex justify-center rounded-md border-neutral-800 border-2"
            onSubmit={handleSubmit(updateUser)}
          >
            <div className="h-full w-96 flex flex-col justify-between gap-5 p-5">
              <div className="h-4/5 max-h-60 flex flex-col justify-between">
                <InputValidator
                  name="name"
                  placeholder="Name"
                  small
                  defaultValue={currentUser.name}
                />
                <InputValidator
                  name="email"
                  placeholder="Email"
                  small
                  defaultValue={currentUser.email}
                />
                <InputPhone
                  name="phoneNumber"
                  control={control}
                  defaultValue ={currentUser.phoneNumber}
                />
              </div>
              <Button label="Save" outline fullWidth submit />
            </div>
          </form>
        </FormProvider>
      ) : null}
    </>
  );
};

export default FormUser;
