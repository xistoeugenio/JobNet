import React from "react";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
import GoBackButton from "../Buttons/GoBackButton";
import { Button } from "@mui/material";

const HeaderProfile = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
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
      <GoBackButton />
      <Button
        variant="outlined"
        color="warning"
        startIcon={<FiLogOut />}
        onClick={handleSignOut}
      >
        Logout
      </Button>
    </div>
  );
};
export default HeaderProfile;
