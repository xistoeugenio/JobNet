import React from "react";
import AvatarName from "../AvatarName";

const Header = () => {
  return (
    <div
      className=" 
    bg-stone-500 h-14
    flex justify-between items-center
    box-border px-5
    "
    >
      <AvatarName />
      <button className="">
        add {/*add the functionality to add a new job applied */}
      </button>
    </div>
  );
};
;
export default Header;