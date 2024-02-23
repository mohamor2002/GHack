import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Retrieves a checkpoint (lesson completion record) by lesson ID and user ID.
 * @param {number} lessonId The ID of the lesson.
 * @param {number} userId The ID of the user.
 * @returns {Promise<Object|null>} A promise that resolves to the checkpoint object if found, or null if not found.
 */
export default async function getCheckpointByLessonAndUserId(lessonId, userId) {
  try {
    // Query the 'Checkpoint' collection to find a checkpoint with the given lessonId and userId
    const checkpointsCollection = collection(db, "Checkpoint");
    const checkpointQuery = query(
      checkpointsCollection,
      where("LessonId", "==", lessonId),
      where("UserId", "==", userId)
    );

    // Execute the query
    const checkpointSnapshot = await getDocs(checkpointQuery);

    // Check if the checkpoint exists
    if (!checkpointSnapshot.empty) {
      // Return the checkpoint data
      return checkpointSnapshot.docs[0].data();
    } else {
      // If checkpoint does not exist, return null
      return null;
    }
  } catch (error) {
    console.error("Error fetching checkpoint:", error);
    throw error;
  }
}
