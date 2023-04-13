import React from "react";
import AvatarName from "../AvatarName";
import Button from "../Button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";

const Header = () => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();

  const goToAddPage = useCallback(() => {
    router.push("/jobs/add");
  }, [router]);

  return (
    <div
      className=" 
    h-16
    flex justify-between items-center
    box-border px-5 
    border-b-2 border-gray-500
    "
    >
      {currentUser ? (
        <>
          <AvatarName username={currentUser?.username} />
          <div className="flex gap-3">
            <Button label="Sign out" secondary onClick={signOut} />
            <Button label="Add a job" outline onClick={goToAddPage} />
          </div>
        </>
      ) : (
        <>
          <Button
            label="Join to jobNet"
            onClick={registerModal.onOpen}
            outline
          />
          <Button label="Login" onClick={loginModal.onOpen} />
        </>
      )}
    </div>
  );
};
export default Header;
