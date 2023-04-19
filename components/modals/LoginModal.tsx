import useLoginModal from "@/hooks/useLoginModal";
import { useState, useCallback } from "react";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignIn from "@/hooks/useSignIn";
import { toast } from "react-hot-toast";
import InputValidator from "../inputs/InputValidator";

const LoginModal = () => {
  const signIn = useSignIn;

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
    loginModal.onClose();
    registerModal.onOpen();
  }, [isloading, registerModal, loginModal]);

  //login schema zod
  const loginSchema = z.object({
    email: z
      .string()
      .email({
        message: "Invalid email format",
      })
      .nonempty({
        message: "Email is required",
      }),
    password: z.string().nonempty({
      message: "The password is required",
    }),
  });

  //schema type
  type loginDatatype = z.infer<typeof loginSchema>;

  //Loginform
  const loginForm = useForm<loginDatatype>({
    resolver: zodResolver(loginSchema),
  });
  const { handleSubmit } = loginForm;

  //Login function
  const login = async (data: loginDatatype) => {
    try {
      setIsLoading(true);
      await signIn(data);
      loginModal.onClose();
    } catch (error: any) {
      toast.error(error?.message.toString());
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <InputValidator name="email" placeholder="Email" disabled={isloading} />
      <InputValidator
        name="password"
        placeholder="Password"
        disabled={isloading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using jobNet?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {" "}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <FormProvider {...loginForm}>
      <Modal
        disabled={isloading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(login)}
        body={bodyContent}
        footer={footerContent}
      />
    </FormProvider>
  );
};

export default LoginModal;
