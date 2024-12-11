
"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Async function to load items for the current user
  const loadItems = async () => {
    if (user) {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    }
  };

  // useEffect to load items when the component is mounted
  useEffect(() => {
    loadItems();
  }, [user]);

  // Handle adding an item to the shopping list
  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        const newItemId = await addItem(user.uid, newItem);
        setItems((prevItems) => [
          ...prevItems,
          { id: newItemId, ...newItem },
        ]);
      }
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  // Handle selecting an item to fetch meal ideas
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].trim().replace(/\p{Emoji_Presentation}/gu, "");
    setSelectedItemName(cleanedName);
  };

  // If the user is not logged in, show a secure page message
  if (!user) {
    return (
      <main>
        <h1>Week 10 Demo</h1>
        <p>This is a secure page.</p>
        <p>You must be logged in to view this page.</p>
      </main>
    );
  }

  // Render the shopping list and meal ideas components
  return (
    <main className="p-4 bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="flex flex-wrap w-full max-w-4xl">
        <div className="w-full lg:w-1/2 p-2">
          <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}

