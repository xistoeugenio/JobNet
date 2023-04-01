import React from "react";

export default function Header() {
  return (
    <div
      className=" 
    bg-stone-500 h-11
    flex justify-between items-center
    box-border px-5
    "
    >
      <div className="">
        user info{/* replace to a avatar and the userName */}
      </div>
      <button className="">
        add {/*add the functionality to add a new job applied */}
      </button>
    </div>
  );
}
