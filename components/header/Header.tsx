import React from "react";
import AvatarName from "../AvatarName";
import Button from "../Button";
import useCurrentUser from "@/hooks/useCurrentUser";
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

  const goToProfilePage = useCallback(() => {
    router.push("/user/profile");
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
          <AvatarName
            username={currentUser?.name}
            userImage={currentUser?.image}
            onClick={goToProfilePage}
          />
          <Button label="Add a job" outline onClick={goToAddPage} />
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
