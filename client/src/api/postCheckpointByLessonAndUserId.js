import {
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import getCheckpointByLessonAndUserId from "./getCheckpointByLessonAndUserId";

/**
 * Creates or updates a checkpoint (lesson completion record) for a lesson and user.
 * @param {number} lessonId The ID of the lesson.
 * @param {number} userId The ID of the user.
 * @param {boolean} isDone The completion status of the lesson.
 * @returns {Promise<void>} A promise that resolves once the checkpoint is created or updated.
 */
export default async function postCheckpointByLessonAndUserId(
  lessonId,
  userId,
  isDone
) {
  try {
    // Check if the checkpoint already exists
    const existingCheckpoint = await getCheckpointByLessonAndUserId(
      lessonId,
      userId
    );

    // If checkpoint exists, update it; otherwise, create a new checkpoint
    if (existingCheckpoint) {
      await updateCheckpoint(existingCheckpoint.id, isDone);
    } else {
      await createCheckpoint(lessonId, userId, isDone);
    }
  } catch (error) {
    console.error("Error posting checkpoint:", error);
    throw error;
  }
}

/**
 * Creates a new checkpoint (lesson completion record) for a lesson and user.
 * @param {number} lessonId The ID of the lesson.
 * @param {number} userId The ID of the user.
 * @param {boolean} isDone The completion status of the lesson.
 * @returns {Promise<void>} A promise that resolves once the checkpoint is created.
 */
async function createCheckpoint(lessonId, userId, isDone) {
  try {
    // Add a new document to the 'Checkpoint' collection
    const checkpointsCollection = collection(db, "Checkpoint");
    await setDoc(doc(checkpointsCollection), {
      LessonId: lessonId,
      UserId: userId,
      isDone: isDone,
    });
  } catch (error) {
    console.error("Error creating checkpoint:", error);
    throw error;
  }
}

/**
 * Updates an existing checkpoint (lesson completion record).
 * @param {string} checkpointId The ID of the checkpoint document.
 * @param {boolean} isDone The new completion status of the lesson.
 * @returns {Promise<void>} A promise that resolves once the checkpoint is updated.
 */
async function updateCheckpoint(checkpointId, isDone) {
  try {
    // Update the 'isDone' field of the existing checkpoint document
    const checkpointRef = doc(collection(db, "Checkpoint"), checkpointId);
    await setDoc(checkpointRef, { isDone: isDone }, { merge: true });
  } catch (error) {
    console.error("Error updating checkpoint:", error);
    throw error;
  }
}
