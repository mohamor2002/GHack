import { signInWithPopup } from "firebase/auth";
import { FETCH_STATUS } from "../constants/fetchStatus";
import { toast } from 'react-toastify';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";

export default async function SignUpWithGoogle(e,setStatus,googleProvider) {
    e.preventDefault()
    try {
      setStatus(FETCH_STATUS.LOADING)
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      // Check if the user document exists in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnapshot = await getDoc(userDocRef);
  
      if (!userDocSnapshot.exists()) {
        // If the document does not exist, then the user is new.
        await setDoc(userDocRef, {
          uid: user.uid,
          username: user.displayName,
        });
        toast.success('Welcome');

      }
      else{
        toast.success('Welcome Back');

      }
      setStatus(FETCH_STATUS.SUCCESS)
      
    } catch (error) {
      setStatus(FETCH_STATUS.ERROR)
      toast.error("Error during Google signup or saving to Firestore: ", error);
      console.log(error)
    }
  }