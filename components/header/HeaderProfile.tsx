import React from "react";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";

const HeaderProfile = () => {
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
      <h2 className="text-neutral-100">Back</h2>
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
