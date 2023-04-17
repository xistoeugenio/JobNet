import { Photo } from "../types/Photos"
import { storage } from "../libs/firebase"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { v4 as createId } from 'uuid'

export const insert = async (file: File) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

        let randomName = createId()
        let newFile = ref(storage, `userImages/${randomName}`)

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref)
        
        return { name: upload.ref.name, url: photoUrl } as Photo
    } else {
        return new Error('file type not allowed.')
    }
}
