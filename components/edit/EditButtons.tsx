import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import DeleteModal from "../modals/DeleteModal";
import useDeleteModal from "@/hooks/useDeleteModal";
import { useRouter } from "next/router";

interface EditButtons {
  onClick?: () => void;
}

const EditButtons: React.FC<EditButtons> = ({ onClick }) => {
  const { onOpen } = useDeleteModal();

  //Get the jobId param
  const router = useRouter();
  const { jobId } = router.query;

  //Delete the job by using the Id
  const deleteJob = () => {
    //TODO the delete function
    console.log(`deleted: ${jobId}`);
  };

  return (
    <>
      <DeleteModal onClickDelete={deleteJob} />
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
