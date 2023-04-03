import React from "react";
import AvatarName from "../AvatarName";
import Button from "../Button";

const Header = () => {
  return (
    <div
      className=" 
    h-16
    flex justify-between items-center
    box-border px-5 
    border-b-2 border-gray-500
    "
    >
      <AvatarName />
      <Button label="Add" outline/>
    </div>
  );
};
export default Header;
