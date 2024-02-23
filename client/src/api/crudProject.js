import {
  collection,
  doc,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Fetches all projects from the database.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of projects.
 */
export async function getProjects() {
  try {
    const projectsCollection = collection(db, "Project");
    const projectsSnapshot = await getDocs(projectsCollection);
    const projects = [];
    projectsSnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

/**
 * Fetches a project by its ID.
 * @param {string} projectId The ID of the project to fetch.
 * @returns {Promise<Object|null>} A promise that resolves to the project object if found, or null if not found.
 */
export async function getProjectById(projectId) {
  try {
    const projectDoc = await getDoc(doc(db, "Project", projectId));
    if (projectDoc.exists()) {
      return { id: projectDoc.id, ...projectDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
}

/**
 * Creates a new project.
 * @param {Object} projectData The data of the project to create.
 * @returns {Promise<string>} A promise that resolves to the ID of the newly created project.
 */
export async function createProject(projectData) {
  try {
    const newProjectRef = await addDoc(collection(db, "Project"), projectData);
    return newProjectRef.id;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

/**
 * Updates an existing project.
 * @param {string} projectId The ID of the project to update.
 * @param {Object} projectData The new data for the project.
 * @returns {Promise<void>} A promise that resolves once the project is updated.
 */
export async function updateProject(projectId, projectData) {
  try {
    const projectRef = doc(db, "Project", projectId);
    await updateDoc(projectRef, projectData);
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}

/**
 * Deletes a project.
 * @param {string} projectId The ID of the project to delete.
 * @returns {Promise<void>} A promise that resolves once the project is deleted.
 */
export async function deleteProject(projectId) {
  try {
    const projectRef = doc(db, "Project", projectId);
    await deleteDoc(projectRef);
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
