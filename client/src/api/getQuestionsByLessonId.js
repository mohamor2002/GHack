import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Retrieves questions associated with a specific lesson.
 * @param {number} lessonId The ID of the lesson.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of question objects associated with the lesson.
 */
export default async function getQuestionsByLessonId(lessonId) {
  try {
    // Query the 'QuestionsLesson' collection to find questions with the given lessonId
    const questionsCollection = collection(db, "QuestionsLesson");
    const questionsQuery = query(
      questionsCollection,
      where("LessonId", "==", lessonId)
    );

    // Execute the query
    const questionsSnapshot = await getDocs(questionsQuery);

    // Extract question data from the snapshot
    const questions = [];
    questionsSnapshot.forEach((doc) => {
      questions.push(doc.data());
    });

    return questions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}
