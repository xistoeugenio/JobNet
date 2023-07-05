"use client"

import Header from "@/components/header/Header";
import ListJobs from "@/components/listJobs/ListJobs";
import { UserButton } from "@clerk/clerk-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[768px] max-w-[96vw] h-[90vh] border-[1.5px] border-solid border-[gray] rounded-[7px] flex flex-col">
      <Header />
      <ListJobs/>
    </div>
  );
}
