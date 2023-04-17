import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage";
import * as Photos from "../services/photos";
import { Photo } from "@/types/Photos";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { ClipLoader } from "react-spinners";
import { toast } from "react-hot-toast";

interface CropEasy {
  photoURL: string;
  onClose: () => void;
}

const CropEasy: React.FC<CropEasy> = ({ photoURL, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const { data: currentUser, mutate } = useCurrentUser();
  const [isUploading, setIsUploading] = useState(false);
  const cropImage = async () => {
    try {
      setIsUploading(true);
      const { file } = await getCroppedImg(photoURL, croppedAreaPixels);

      //upload the image in firebase
      const { url } = (await Photos.insert(file)) as Photo;

      //Update the user image
      await axios.put(`/api/user/update?userId=${currentUser.id}`, {
        image: url,
      });
      toast.success("Image upload succesfully");
    } catch (error) {
      toast.error("something went wrong!");
      console.log(error);
    } finally {
      mutate();
      setIsUploading(false);
      onClose();
    }
  };
  return (
    <>
      <DialogContent
        dividers
        sx={{
          position: "relative",
          height: 400,
          width: "auto",
        }}
      >
        <Cropper
          image={photoURL}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onZoomChange={setZoom}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </DialogContent>
      <DialogActions sx={{ flexDirection: "column", mx: 3, my: 2 }}>
        {/*Handle the uploading state */}

        {isUploading ? (
          <ClipLoader color="lightblue" size={80} />
        ) : (
          <>
            <Box sx={{ width: "100%", mb: 1 }}>
              <Box>
                <Typography color="white">Zoom: {zoomPercent(zoom)}</Typography>
                <Slider
                  valueLabelDisplay="auto"
                  valueLabelFormat={zoomPercent}
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e, zoom: any) => setZoom(zoom)}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="contained" onClick={cropImage}>
                Update
              </Button>
            </Box>
          </>
        )}
      </DialogActions>
    </>
  );
};

export default CropEasy;

const zoomPercent = (value: number) => {
  return `${Math.round(value * 100)}%`;
};
