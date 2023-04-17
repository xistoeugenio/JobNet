import useCropImage from "@/hooks/useCropImage";
import { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";

const InputFile = () => {
  const { set, onOpen } = useCropImage();
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        set({ image: URL.createObjectURL(file) });
        onOpen();
      } else {
        toast.error("Please upload an image file (JPG or PNG).");
      }
    }
  };
  return (
    <>
      <input
        id="image"
        className="hidden"
        type="file"
        name="image"
        value=""
        onChange={(e) => {
          change(e);
        }}
      />
      <label
        className="bg-sky-400 text-neutral-950 min-w-fit w-14 p-1 rounded-sm cursor-pointer"
        htmlFor="image"
      >
        Update Image
      </label>
    </>
  );
};

export default InputFile;
