import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Retrieves a section by its course ID and section number.
 * @param {number} courseId The ID of the course.
 * @param {number} sectionNum The number of the section within the course.
 * @returns {Promise<Object|null>} A promise that resolves to the section object if found, or null if not found.
 */
export default async function getSectionByCourseIdAndSectionNum(
  courseId,
  sectionNum
) {
  try {
    // Query the 'Sections' collection to find the section with the given courseId and sectionNum
    const sectionsCollection = collection(db, "Sections");
    const sectionQuery = query(
      sectionsCollection,
      where("CourseId", "==", courseId),
      where("SectionsNum", "==", sectionNum)
    );

    // Execute the query
    const sectionSnapshot = await getDocs(sectionQuery);

    // Check if the section exists
    if (!sectionSnapshot.empty) {
      // Return the section data
      return sectionSnapshot.docs[0].data();
    } else {
      // If section does not exist, return null
      return null;
    }
  } catch (error) {
    console.error("Error fetching section:", error);
    throw error;
  }
}
