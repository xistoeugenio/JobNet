import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import DeleteModal from "../modals/DeleteModal";
import useDeleteModal from "@/hooks/useDeleteModal";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import axios from "axios";

interface EditButtons {
  onClick?: () => void;
  jobName: string
}

const EditButtons: React.FC<EditButtons> = ({ onClick, jobName }) => {
  const { onOpen, onClose } = useDeleteModal();

  //Get the jobId param
  const router = useRouter();
  const { jobId } = router.query;

  //Delete the job by using the Id
  const deleteJob = async () => {
    try {
      await axios.delete(`/api/jobs/delete?jobId=${jobId}`);
      toast.success(`'${jobId}' deleted succesfully`);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      onClose();
      router.push("/");
    }
  };

  return (
    <>
      <DeleteModal onClickDelete={deleteJob} jobName={jobName}/>
      <div className="w-40 flex justify-between">
        <AiOutlineDelete
          className=" text-red-500 cursor-pointer hover:text-red-700"
          size={40}
          onClick={onOpen}
        />
        <AiOutlineEdit
          className=" text-sky-600 cursor-pointer hover:text-sky-800"
          size={40}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default EditButtons;
