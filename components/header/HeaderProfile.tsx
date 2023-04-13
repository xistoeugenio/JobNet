import React from "react";
import AvatarName from "../AvatarName";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

interface HeaderProfile {
  name: string;
}

const HeaderProfile: React.FC<HeaderProfile> = ({ name }) => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };
  return (
    <div
      className=" 
    h-16
    flex justify-between items-center
    box-border px-5 
    border-b-2 border-gray-500
    "
    >
      <AvatarName username={name} justPreview />
      <div className="flex gap-3">
        <button onClick={handleSignOut}>
          <FiLogOut
            color="red"
            size={28}
            cursor="pointer"
            //onClick={() => signOut}
          />
        </button>
      </div>
    </div>
  );
};
export default HeaderProfile;
