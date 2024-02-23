import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default async function getUserByUID(uid) {
    const usersCollection = collection(db, 'users');
    const query = doc(usersCollection, uid);
  
    try {
      const userDoc = await getDoc(query);
  
      if (userDoc.exists()) {
        // Document with matching UID found
        const userData = userDoc.data();
        return userData;
      } else {
        // Document with UID not found
        return null;
      }
    } catch (error) {
      console.error('Error fetching user document:', error);
      throw error;
    }
  }