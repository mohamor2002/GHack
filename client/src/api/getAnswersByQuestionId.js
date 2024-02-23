import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Retrieves answers associated with a specific question ID.
 * @param {number} questionId The ID of the question.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of answer objects associated with the question.
 */
export default async function getAnswersByQuestionId(questionId) {
  try {
    // Query the 'AnswersLesson' collection to find answers with the given questionId
    const answersCollection = collection(db, "AnswersLesson");
    const answersQuery = query(
      answersCollection,
      where("QuestionLessonId", "==", questionId)
    );

    // Execute the query
    const answersSnapshot = await getDocs(answersQuery);

    // Extract answer data from the snapshot
    const answers = [];
    answersSnapshot.forEach((doc) => {
      answers.push(doc.data());
    });

    return answers;
  } catch (error) {
    console.error("Error fetching answers:", error);
    throw error;
  }
}
