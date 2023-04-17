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

  const { data: currentUser } = useCurrentUser();

  const cropImage = async () => {
    try {
      const { file } = await getCroppedImg(photoURL, croppedAreaPixels);

      //upload the image in firebase
      const { url } = (await Photos.insert(file)) as Photo;

      //Update the user image
      await axios.put(`/api/user/update?userId=${currentUser.id}`, {
        image: url,
      });

      onClose()
    } catch (error) {
      console.log(error);
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
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={cropImage}>
            Crop
          </Button>
        </Box>
      </DialogActions>
    </>
  );
};

export default CropEasy;

const zoomPercent = (value: number) => {
  return `${Math.round(value * 100)}%`;
};
