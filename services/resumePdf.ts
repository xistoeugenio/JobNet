import { storage } from "../libs/firebase"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { v4 as createId } from 'uuid'

export const resumeUpload = async (file: File)=>{

  if (["application/pdf"].includes(file.type)) {
    let randomName = createId();
    let newFile = ref(storage, `resumes/${randomName}`);

    let upload = await uploadBytes(newFile, file);
    let pdfUrl = await getDownloadURL(upload.ref);

    return pdfUrl
  } else {
    console.log('This resume file must be in PDF format')
  }
}