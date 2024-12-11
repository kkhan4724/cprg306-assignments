import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} - A promise that resolves to an array of items.
 */
export const getItems = async (userId) => {
  try {
    const items = [];
    const itemsRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(itemsRef);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error retrieving items:", error);
    throw new Error("Failed to fetch items.");
  }
};

/**
 * Adds a new item to a specific user's list of items in Firestore.
 * @param {string} userId - The ID of the user.
 * @param {Object} item - The item to add.
 * @returns {Promise<string>} - A promise that resolves to the ID of the newly created document.
 */
export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);

    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw new Error("Failed to add item.");
  }
};
