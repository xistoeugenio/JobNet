import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXrzx2CczxExUHJAlIgtu3AnUrHnt7Xdo",
  authDomain: "jobnet-def92.firebaseapp.com",
  projectId: "jobnet-def92",
  storageBucket: "jobnet-def92.appspot.com",
  messagingSenderId: "851991428385",
  appId: "1:851991428385:web:85657413f660ddbb141260"
};

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)