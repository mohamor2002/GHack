import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Retrieves the courses in progress for a specific user.
 * @param {string} userId The ID of the user for whom to fetch the courses in progress.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of course progress objects.
 */
export default async function getCoursesProgress(userId) {
  // Get a reference to the 'Checkpoint' collection
  const checkpointsCollection = collection(db, "Checkpoint");
  // Query checkpoints for documents where UserId matches the provided userId
  const userCheckpointsQuery = query(
    checkpointsCollection,
    where("UserId", "==", userId)
  );

  try {
    // Fetch the checkpoint documents
    const userCheckpointsSnapshot = await getDocs(userCheckpointsQuery);
    const coursesInProgress = [];

    // Iterate over each checkpoint document
    userCheckpointsSnapshot.forEach((doc) => {
      const checkpointData = doc.data();
      const lessonId = checkpointData.LessonId;
      // Derive courseId from lessonId
      const courseId = getCourseIdFromLessonId(lessonId);
      if (courseId) {
        // Construct course progress object and push into the array
        coursesInProgress.push({
          courseId: courseId,
          lessonId: lessonId,
          isDone: checkpointData.isDone,
        });
      }
    });

    // Return the array of courses in progress
    return coursesInProgress;
  } catch (error) {
    // Handle errors
    console.error("Error fetching courses in progress:", error);
    throw error;
  }
}

/**
 * Retrieves the courseId associated with a given lessonId.
 * @param {number} lessonId The ID of the lesson.
 * @returns {Promise<number|null>} A promise that resolves to the courseId or null if not found.
 */
function getCourseIdFromLessonId(lessonId) {
  // Query the Lessons table to get the courseId based on the lessonId
  const lessonsRef = collection(db, "Lessons");
  const lessonQuery = query(lessonsRef, where("LessonsId", "==", lessonId));

  return getDocs(lessonQuery)
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const lessonData = querySnapshot.docs[0].data();
        const sectionId = lessonData.SectionId;
        // Derive courseId from sectionId
        return getCourseIdFromSectionId(sectionId);
      } else {
        console.error("Lesson document not found for lessonId:", lessonId);
        return null;
      }
    })
    .catch((error) => {
      console.error("Error getting lesson document:", error);
      return null;
    });
}

/**
 * Retrieves the courseId associated with a given sectionId.
 * @param {number} sectionId The ID of the section.
 * @returns {Promise<number|null>} A promise that resolves to the courseId or null if not found.
 */
function getCourseIdFromSectionId(sectionId) {
  // Query the Sections table to get the courseId based on the sectionId
  const sectionsRef = collection(db, "Sections");
  const sectionQuery = query(sectionsRef, where("SectionsId", "==", sectionId));

  return getDocs(sectionQuery)
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const sectionData = querySnapshot.docs[0].data();
        // Return courseId
        return sectionData.CourseId;
      } else {
        console.error("Section document not found for sectionId:", sectionId);
        return null;
      }
    })
    .catch((error) => {
      console.error("Error getting section document:", error);
      return null;
    });
}
