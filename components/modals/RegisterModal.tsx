import axios from "axios";
import { useState, useCallback } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import Input from "../inputs/Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputValidator from "../inputs/InputValidator";

const RegisterModal = () => {
  //MODALS HOOKS
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  //LOADING
  const [isloading, setIsLoading] = useState(false);

  //Toggle the modals
  const onToggle = useCallback(() => {
    if (isloading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [isloading, registerModal, loginModal]);

  //register schema
  const registerSchema = z.object({
    email: z
      .string()
      .email({
        message: "Invalid email format",
      })
      .nonempty({
        message: "Email is required",
      }),
    name: z.string().nonempty({
      message: "Name is required",
    }),
    username: z
      .string()
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers and underscores",
      })
      .nonempty({
        message: "Username is required",
      }),
    password: z
      .string()
      .nonempty({
        message: "Password is required",
      }),
    passwordConfirm: z.string(),
  }).superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Password and Confirm Password must match",
        path: ["passwordConfirm"],
      });
    }
  });
  

  //register schema type
  type registerDatatype = z.infer<typeof registerSchema>;

  //register form
  const registerForm = useForm<registerDatatype>({
    resolver: zodResolver(registerSchema),
  });
  const { handleSubmit } = registerForm;

  //register function
  const register = async (data: registerDatatype) => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", data);

      toast.success("Acount has been created");

      const { email, password } = data;
      await signIn("credentials", { email, password });

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <InputValidator name="email" placeholder="Email" disabled={isloading} small />
      <InputValidator name="name" placeholder="Name" disabled={isloading} small />
      <InputValidator
        name="username"
        placeholder="UserName"
        disabled={isloading}
        small
      />
      <InputValidator
        name="password"
        placeholder="Password"
        disabled={isloading}
        small
        password
      />
      <InputValidator
        name="passwordConfirm"
        placeholder="confirm your password"
        disabled={isloading}
        small
        password
      />
      {/*Change this to a truly password verification */}
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {" "}
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <FormProvider {...registerForm}>
      <Modal
        disabled={isloading}
        isOpen={registerModal.isOpen}
        title="Create an account"
        actionLabel="Sign in"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(register)}
        body={bodyContent}
        footer={footerContent}
      />
    </FormProvider>
  );
};

export default RegisterModal;
