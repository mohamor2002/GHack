import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Retrieves the courses completed by a specific user.
 * A course is considered completed when all lessons in its sections are done.
 * @param {string} userId The ID of the user for whom to fetch the completed courses.
 * @returns {Promise<Array<number>>} A promise that resolves to an array of course IDs completed by the user.
 */
export default async function getCoursesCompleted(userId) {
  try {
    // Get all sections completed by the user
    const userCheckpoints = await getUserCheckpoints(userId);

    // Map of section IDs to completion status
    const sectionCompletionStatus = {};

    // Populate sectionCompletionStatus based on user checkpoints
    userCheckpoints.forEach((checkpoint) => {
      const sectionId = checkpoint.SectionId;
      const isDone = checkpoint.isDone;

      // Initialize section as incomplete if not already marked as done
      if (!(sectionId in sectionCompletionStatus)) {
        sectionCompletionStatus[sectionId] = isDone;
      } else {
        // If section is marked as done, keep it as done
        sectionCompletionStatus[sectionId] =
          sectionCompletionStatus[sectionId] && isDone;
      }
    });

    // Get all sections from the database
    const sectionsSnapshot = await getDocs(collection(db, "Sections"));

    // Map of course IDs to completion status
    const courseCompletionStatus = {};

    // Populate courseCompletionStatus based on sectionCompletionStatus
    sectionsSnapshot.forEach((sectionDoc) => {
      const sectionData = sectionDoc.data();
      const courseId = sectionData.CourseId;
      const sectionId = sectionDoc.id;

      // Initialize course as incomplete if not already marked as done
      if (!(courseId in courseCompletionStatus)) {
        courseCompletionStatus[courseId] = sectionCompletionStatus[sectionId];
      } else {
        // If any section of the course is incomplete, mark the course as incomplete
        courseCompletionStatus[courseId] =
          courseCompletionStatus[courseId] &&
          sectionCompletionStatus[sectionId];
      }
    });

    // Return completed course IDs
    const completedCourses = [];
    for (const courseId in courseCompletionStatus) {
      if (courseCompletionStatus[courseId]) {
        completedCourses.push(parseInt(courseId));
      }
    }
    return completedCourses;
  } catch (error) {
    console.error("Error fetching completed courses:", error);
    throw error;
  }
}

/**
 * Retrieves all checkpoints (completed lessons) for a specific user.
 * @param {string} userId The ID of the user.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of user checkpoints.
 */
async function getUserCheckpoints(userId) {
  const checkpointsCollection = collection(db, "Checkpoint");
  const userCheckpointsQuery = query(
    checkpointsCollection,
    where("UserId", "==", userId)
  );
  const userCheckpointsSnapshot = await getDocs(userCheckpointsQuery);
  const userCheckpoints = [];
  userCheckpointsSnapshot.forEach((doc) => {
    userCheckpoints.push(doc.data());
  });
  return userCheckpoints;
}
