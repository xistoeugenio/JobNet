import { create } from "zustand";

interface CropImageStore {
  image: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  set: (newState: Partial<CropImageStore>) => void;
}

const useCropImage = create<CropImageStore>((set) => ({
  image: '',
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  set: (newState) => set(newState),
}));

export default useCropImage;
