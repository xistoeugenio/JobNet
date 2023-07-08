"use client";

import Header from "@/components/header/Header";
import ListJobs from "@/components/listJobs/ListJobs";
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const { isLoaded, isSignedIn} = useUser();

  if (isLoaded && !isSignedIn) {
    redirect("/homepage");
    
  }
  return (
    <div className="w-[768px] max-w-[96vw] h-[90vh] border-[1.5px] border-solid border-[gray] rounded-[7px] flex flex-col">
      <Header />
      <ListJobs />
    </div>
  );
}
