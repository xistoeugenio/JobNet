import React from "react";
import AvatarName from "../AvatarName";
import Button from "../Button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";

const Header = () => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();

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
          <AvatarName username={currentUser?.username}/>
          <div className="flex gap-3">
            <Button label="Sign out" secondary onClick={signOut} />
            <Button label="Add" outline />
          </div>
        </>
      ) : (
        <Button label="Login" outline onClick={loginModal.onOpen} />
      )}
    </div>
  );
};
export default Header;
