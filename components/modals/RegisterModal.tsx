import axios from "axios";
import { useState, useCallback } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isloading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [isloading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });

      toast.success("Acount has been created");

      await signIn('credentials',{
        email,
        password
      })

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, username, name]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isloading}
        small
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isloading}
        small
      />
      <Input
        placeholder="UserName"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isloading}
        small
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isloading}
        small
      />
      {/*Change this to a truly password verification */}
      <Input
        placeholder="Confirm Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isloading}
        small
      />
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
    <Modal
      disabled={isloading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Sign in"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
