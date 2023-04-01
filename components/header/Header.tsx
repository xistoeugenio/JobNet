import React from "react";
import AvatarName from "../AvatarName";

const Header = () => {
  return (
    <div
      className=" 
    h-14
    flex justify-between items-center
    box-border px-5 
    border-b-2 border-gray-500
    "
    >
      <AvatarName />
      <button className=" bg-cyan-600 px-3 py-1 rounded-md">
        add {/*add the functionality to add a new job applied */}
      </button>
    </div>
  );
};
export default Header;
