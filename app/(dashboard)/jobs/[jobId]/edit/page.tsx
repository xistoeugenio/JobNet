import { redirect, useRouter } from "next/navigation";

//components
import AddFormJob from "@/components/AddJobForm";
import { auth } from "@clerk/nextjs";
import prismadb from "@/libs/prismadb";

interface EditPageProps {
  params: {
    jobId: string;
  };
}

const Edit: React.FC<EditPageProps> = async ({ params }) => {

  //Verify if the user is logged in
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  //Verify if the job added exists and If does not redirect to '/'
  var job: any = {};
  try {
    job = await prismadb.jobsApplied.findFirst({
      where: {
        id: params.jobId,
        userId,
      },
    });

    if (!job) {
      redirect("/");
    }
  } catch (error) {
    redirect("/");
  }

  return <AddFormJob currentJobValues={job}/>;
};

export default Edit;
