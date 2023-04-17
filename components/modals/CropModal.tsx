import useCropImage from "@/hooks/useCropImage";
import CropEasy from "../CropEasy";

const CropModal = () => {
  const { isOpen, onClose, image } = useCropImage();

  if (!isOpen) {
    return null;
  }
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-900 bg-opacity-80">
      <div className="w-11/12 max-w-3xl h-auto">
        <div className="h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black p-2">
          <CropEasy photoURL={image} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default CropModal;
