'use client'

import React, { useCallback } from "react";
import { UserButton } from "@clerk/nextjs";
import Button from "../Button";
import { useRouter } from "next/navigation";

interface Header {
  loadHeader: boolean;
}

const Header = () => {
  const router = useRouter();
  const goToAddPage = useCallback(() => {
    router.push("/jobs/add");
  }, [router]);

  return (
    <div
      className={`     
    h-16
    flex
    justify-between items-center
    box-border px-5 
    border-b-2 border-gray-500
    `}
    >
        <>
          <UserButton afterSignOutUrl="/"/>
          <Button label="Add a job" outline onClick={goToAddPage} />
        </>
     
    </div>
  );
};
export default Header;
