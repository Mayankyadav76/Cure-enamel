
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAmEN37SlmRFYxC86VPcuf4YF2mr8NjS6E",
  authDomain: "curenimal-next.firebaseapp.com",
  projectId: "curenimal-next",
  storageBucket: "curenimal-next.appspot.com",
  messagingSenderId: "87145746531",
  appId: "1:87145746531:web:f3f3a715d61f9059452856",
  measurementId: "G-GEJNK4L6NQ"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log('Firestore instance:', db);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);