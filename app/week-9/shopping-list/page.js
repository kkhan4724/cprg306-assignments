"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {

    const {user} = useUserAuth();
    if (!user) {
        return (
            <main>
                <h1>Week 9 Demo</h1>
                <p>This is a secure page.</p>
                <p>You must be logged in to view this page.</p>
            </main>
        );
    }

    
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].trim().replace(/\p{Emoji_Presentation}/gu, "");
    setSelectedItemName(cleanedName);
  };

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
