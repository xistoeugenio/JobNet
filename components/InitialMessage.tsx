import { useRouter } from "next/navigation";

const InitialMessage = () => {
  const router = useRouter();

  const addJob = () => {
    router.push("/jobs/add");
  };
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6">
      <p className="text-neutral-300">
        {`Looks like you haven't applied to any jobs yet.`}
      </p>
      <p className="text-neutral-300">
        Add your first application to{" "}
        <button
          className="bg-neutral-800 px-1 rounded-md hover:bg-neutral-700"
          onClick={addJob}
        >
          get started!
        </button>
      </p>
    </div>
  );
};
export default InitialMessage;
