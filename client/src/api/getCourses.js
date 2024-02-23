import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default async function getCourses() {
  const coursesCollection = collection(db, "courses");

  try {
    const coursesSnapshot = await getDocs(coursesCollection);
    const coursesData = [];

    coursesSnapshot.forEach((doc) => {
      if (doc.exists()) {
        // Document with data found
        const course = {
          id: doc.id,
          ...doc.data(),
        };
        coursesData.push(course);
      } else {
        // Document without data
        console.log("Document is missing data:", doc.id);
      }
    });

    return coursesData;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
}
