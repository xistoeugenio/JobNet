import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import DeleteModal from "../modals/DeleteModal";
import useDeleteModal from "@/hooks/useDeleteModal";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

interface EditButtons {
  onClick?: () => void;
  jobName: string
  jobId: string
}

const EditButtons: React.FC<EditButtons> = ({ onClick, jobName, jobId }) => {
  const { onOpen, onClose } = useDeleteModal();
  const [deleting, setDeleting] = useState(false)

  const router = useRouter()

  //Delete the job by using the Id
  const deleteJob = async () => {
    setDeleting(true)
    try {
      await axios.delete(`/api/${jobId}/job`);
      toast.success(`'' deleted succesfully`);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      router.push('/')
      onClose()
    }
  };

  return (
    <>
      <DeleteModal onClickDelete={deleteJob} jobName={jobName} deleting={deleting}/>
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
