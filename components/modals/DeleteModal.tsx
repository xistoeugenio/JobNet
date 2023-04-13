import useDeleteModal from "@/hooks/useDeleteModal";
import Button from "../Button";

interface DeleteModal {
  onClickDelete: () => void;
}

const DeleteModal: React.FC<DeleteModal> = ({ onClickDelete }) => {
  const { onClose, isOpen } = useDeleteModal();

  //Close the modal 
  const handleClose = () => {
    onClose();
  };

  //If its not open this keep the modal closed
  if (!isOpen) {
    return null;
  }
  return (
    <div
      style={{ border: "red" }}
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70"
    >
      <div className="relative max-w-xl h-auto mx-4">
        <div className="h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
          <div className="flex items-center justify-between p-6 rounded-t">
            <h3 className="text-2xl font-medium text-white text-center">
              Are you sure you want to delete this job application?
            </h3>
          </div>
          <div className="w-full flex justify-around p-6">
            <Button
              label="Cancel"
              submit
              large
              outline
              onClick={handleClose}
              aditionalStyle={{ color: "cyan", borderColor: "cyan" }}
            />
            <Button
              label="Delete"
              submit
              large
              outline
              onClick={onClickDelete}
              aditionalStyle={{ color: "red", borderColor: "red" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
